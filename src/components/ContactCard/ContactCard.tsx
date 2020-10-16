import React, { useState, useEffect } from 'react'
import { Copy as CopyIcon } from '@styled-icons/feather/Copy'
import { ExternalLink as ExternalLinkIcon } from '@styled-icons/feather/ExternalLink'
import * as S from './ContactCard.styles'

export type ContactCardProps = {
  socialMedia: string
  icon: React.ReactNode
  previewLink: string
  fullLink: string
}

const ContactCard = ({ socialMedia, icon, previewLink, fullLink } : ContactCardProps) => {
  const [open, setOpen] = useState(false)
  const [isCopyClicked, setCopyClicked] = useState(false)

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
            textOnClick="Copied to clipboard"
          >
            <CopyIcon
              aria-label={`Copy ${socialMedia} url`}
              title={`Copy ${socialMedia} url`}
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
