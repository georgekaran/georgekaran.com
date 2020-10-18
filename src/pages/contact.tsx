import { Github as GithubIcon } from '@styled-icons/feather/Github'
import { Mail as MailIcon } from '@styled-icons/feather/Mail'
import { Linkedin as LinkedinIcon } from '@styled-icons/feather/Linkedin'
import { Twitter as TwitterIcon } from '@styled-icons/feather/Twitter'

import * as S from '@/styles/pages/contact'
import * as Animations from '@/styles/animations'
import { Heading } from '@/components/Heading'
import { ContactCard } from '@/components/ContactCard'

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
          <ContactCard
            icon={<GithubIcon aria-label="Github Icon" />}
            previewLink="georgekaran"
            fullLink="https://github.com/georgekaran"
            socialMedia="Github"
          />
          <ContactCard
            icon={<MailIcon aria-label="Email Icon" />}
            previewLink="georgekaran12@gmail.com"
            fullLink="malito:georgekaran12@gmail.com"
            socialMedia="Email"
          />
          <ContactCard
            icon={<LinkedinIcon aria-label="Linkedin Icon" />}
            previewLink="in/georgekaranmueller"
            fullLink="https://linkedin.com/in/georgekaranmueller"
            socialMedia="Linkedin"
          />
          <ContactCard
            icon={<TwitterIcon aria-label="Twitter Icon" />}
            previewLink="georgekaran12"
            fullLink="https://twitter.com/georgekaran12"
            socialMedia="Twitter"
          />
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
