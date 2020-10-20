import React, { useState, useEffect, useContext } from 'react'
import { Copy as CopyIcon } from '@styled-icons/feather/Copy'
import { ExternalLink as ExternalLinkIcon } from '@styled-icons/feather/ExternalLink'

import * as S from './ContactCard.styles'
import i18nContext from '@/presentation/contexts/i18n'

export type ContactCardProps = {
  socialMedia: string
  icon: React.ReactNode
  previewLink: string
  fullLink: string
}

const ContactCard = ({ socialMedia, icon, previewLink, fullLink } : ContactCardProps) => {
  const [open, setOpen] = useState(false)
  const [isCopyClicked, setCopyClicked] = useState(false)
  const { i18n } = useContext(i18nContext)

  useEffect(() => {
    if (isCopyClicked) {
      setTimeout(() => {
        setCopyClicked(false)
      }, 1300)
    }
  }, [isCopyClicked])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullLink)
      setCopyClicked(true)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <S.Wrapper
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <S.ContentWrapper>
        <S.IconWrapper>
          {icon}
        </S.IconWrapper>
        <S.PreviewLink>{previewLink}</S.PreviewLink>
      </S.ContentWrapper>
      <S.Overlay
        data-testid="overlay"
        aria-hidden={open ? 'false' : 'true'}
      >
        <S.ContentWrapper>
          <S.IconWrapper
            className="pointer"
            onClick={copyToClipboard}
            isClicked={isCopyClicked}
            textOnClick={i18n?.t('copy_to_clipboard')}
          >
            <CopyIcon
              aria-label={i18n!.t('copy_url', [socialMedia])}
              title={i18n!.t('copy_url', [socialMedia])}
            />
          </S.IconWrapper>
          <S.IconWrapper
            as="a"
            href={fullLink}
            target="__blank"
          >
            <ExternalLinkIcon
              aria-label={`Open ${socialMedia} link`}
              title={`Open ${socialMedia} link`}
            />
          </S.IconWrapper>
        </S.ContentWrapper>
      </S.Overlay>
    </S.Wrapper>
  )
}

export default ContactCard
