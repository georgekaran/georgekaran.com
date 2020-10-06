import React from 'react'
import * as S from './Testimonional.styles'

export type TestimonionalProps = {
  testimonial: string
  author: string
  authorImage: string
  job: string
  company: string
}

const Testimonional = ({ testimonial, authorImage, author, job, company }: TestimonionalProps) => (
  <S.Wrapper>
    <S.TestimonialWrapper>
      <S.Testimonial>
        {testimonial}
      </S.Testimonial>
      <S.Quotes>&quot;</S.Quotes>
    </S.TestimonialWrapper>
    <S.AuthorWrapper>
      <S.ImageWrapper>
        <S.Image src={authorImage} alt={author} />
      </S.ImageWrapper>
      <S.AuthorInfo>
        <S.Author>{author}</S.Author>
        <S.TitleBox>
          <S.Title>{job} | </S.Title>
          <S.Company>{company}</S.Company>
        </S.TitleBox>
      </S.AuthorInfo>
    </S.AuthorWrapper>
  </S.Wrapper>
)

export default Testimonional
