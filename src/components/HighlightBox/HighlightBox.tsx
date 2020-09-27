import React from 'react'
import * as S from './HighlightBox.styles'

export type HighlightBoxProps = {
  primaryText: string
  secondaryText: string
}

const HighlightBox = ({ primaryText, secondaryText }: HighlightBoxProps) => (
  <S.Wrapper>
    <S.Ellipse data-testid="ellipse">
      <S.PrimaryText>{primaryText}</S.PrimaryText>
    </S.Ellipse>
    <S.SecondaryText>{secondaryText}</S.SecondaryText>
  </S.Wrapper>
)

export default HighlightBox
