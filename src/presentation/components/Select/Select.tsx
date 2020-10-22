import React, { useState } from 'react'

import * as S from './Select.styles'

export type SelectProps = {
  options: string[]
  initialValue?: string
  onChange: (value: string) => void
}

const Select = ({ options, initialValue, onChange }: SelectProps) => {
  const [selected, setSelected] = useState(initialValue || '')

  const onChangeInternal = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
    setSelected(event.target.value)
    onChange(event.target.value)
  }

  return (
    <S.Wrapper>
      <S.Select data-testid="select" defaultValue={selected} onChange={onChangeInternal}>
        {options.map(option => (<S.Option key={option} value={option}>{option}</S.Option>))}
      </S.Select>
    </S.Wrapper>
  )
}

export default Select
