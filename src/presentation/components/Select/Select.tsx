import React, { useEffect, useState } from 'react'

import * as S from './Select.styles'

export type SelectProps = {
  ariaLabel?: string
  options: string[]
  initialValue?: string
  onChange: (value: string) => void
}

const Select = ({ options, initialValue, ariaLabel, onChange }: SelectProps) => {
  const [selected, setSelected] = useState('')

  useEffect(() => {
    if (initialValue) {
      setSelected(initialValue)
    }
  }, [initialValue])

  const onChangeInternal = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
    setSelected(event.target.value)
    onChange(event.target.value)
  }

  return (
    <S.Wrapper>
      <S.Select
        aria-label={ariaLabel}
        data-testid="select"
        value={selected}
        onChange={onChangeInternal}
      >
        {options.map(option => (<S.Option key={option} value={option}>{option}</S.Option>))}
      </S.Select>
    </S.Wrapper>
  )
}

export default Select
