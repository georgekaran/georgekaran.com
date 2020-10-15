import * as S from '@/styles/pages/contact'
import * as Animations from '@/styles/animations'
import { Heading } from '@/components/Heading'

const Contact = () => {
  return (
    <S.Wrapper>
      <Heading
        data-aos="slide-right"
        {...Animations.baseAosAnimation}
      >
        Entre em contato comigo
      </Heading>

      <S.Subtitle
        data-aos="slide-right"
        {...Animations.baseAosAnimation}
      >
        Estas são as minhas principais redes sociais, não hesite em iniciar uma conversa. 😀
      </S.Subtitle>
      <S.BoxWrapper>
        <S.ContactBox>
          ...
        </S.ContactBox>
        <S.ImageWrapper>
          <S.TransparentBox />
          <S.Image src="/img/me/george_brooklyn_bridge.png" alt="George sitting on the brooklyn bridge in New York City" />
        </S.ImageWrapper>
      </S.BoxWrapper>
    </S.Wrapper>
  )
}

export default Contact
