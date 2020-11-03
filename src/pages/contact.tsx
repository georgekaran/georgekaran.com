import React from 'react'
import Image from 'next/image'
import { Github as GithubIcon } from '@styled-icons/feather/Github'
import { Mail as MailIcon } from '@styled-icons/feather/Mail'
import { Linkedin as LinkedinIcon } from '@styled-icons/feather/Linkedin'
import { Twitter as TwitterIcon } from '@styled-icons/feather/Twitter'

import * as S from '@/presentation/styles/pages/contact'
import * as Animations from '@/presentation/styles/animations'
import { Heading } from '@/presentation/components/Heading'
import { ContactCard } from '@/presentation/components/ContactCard'
import useI18N from '@/presentation/hooks/usei18n'

const Contact = () => {
  const i18n = useI18N()

  return (
    <S.Wrapper>
      <Heading
        data-aos="slide-right"
        {...Animations.baseAosAnimation}
      >
        {i18n.t('contact_me')}
      </Heading>

      <S.Subtitle
        data-aos="slide-right"
        {...Animations.baseAosAnimation}
      >
        {i18n.t('contact_me_description')} 😀
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
            fullLink="mailto:georgekaran12@gmail.com"
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
          <S.ImageAbsolute>
            <Image
              src="/img/me/george_brooklyn_bridge.png"
              alt={i18n.t('contact_me_image_alt')}
              width={309}
              height={417}
              className="Image"
            />
          </S.ImageAbsolute>
        </S.ImageWrapper>
      </S.BoxWrapper>
    </S.Wrapper>
  )
}

export default Contact
