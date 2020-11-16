import React from 'react'
import { RenderResult, screen } from '@testing-library/react'
import { transparentize } from 'polished'

import { Technology, TechnologyProps } from '.'
import { render } from '@/test/utils/helpers'
import theme from '@/presentation/styles/theme'

type SutProps = Partial<TechnologyProps>

const makeSut = ({
  image = 'https://miro.medium.com/max/1000/1*Yafu7ihc1LFuP4azerAa4w.png',
  alt = 'React logo (Atom)',
  ...props
}: SutProps = {}): RenderResult => {
  return render(<Technology image={image} alt={alt} {...props} />)
}

describe('<Technology />', () => {
  it('should render with initial state', () => {
    const { container } = makeSut()
    const image = screen.getByRole('img', { hidden: true })
    // FIX: img hidden true
    // expect(image).toHaveAttribute('srcset', /https:\/\/miro\.medium\.com\/max\/1000\/1\*Yafu7ihc1LFuP4azerAa4w\.png/)
    expect(image).toHaveAttribute('alt', 'React logo (Atom)')
    expect(container.firstChild).toHaveStyle({
      width: '12rem',
      height: '12rem',
      background: transparentize(0.4, theme.colors.black04),
      borderRadius: '50%'
    })
  })
})
