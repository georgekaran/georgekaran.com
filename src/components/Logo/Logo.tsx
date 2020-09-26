import React from 'react'
import * as S from './Logo.styles'

export type LogoProps = {
  hideOnMobile?: boolean
}

const Logo = ({ hideOnMobile = false }: LogoProps) => (
  <S.Wrapper hideOnMobile={hideOnMobile}>
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 505 142" role="img" aria-label="George Mueller">
      <path className="name" d="M97.796 60.436c2.124 0 3.978.432 5.562 1.296 1.62.864 2.862 1.998 3.726 3.402v-4.266h9.234v30.078c0 2.772-.558 5.274-1.674 7.506-1.08 2.268-2.754 4.068-5.022 5.4-2.232 1.332-5.022 1.998-8.37 1.998-4.464 0-8.082-1.062-10.854-3.186-2.772-2.088-4.356-4.932-4.752-8.532h9.126c.288 1.152.972 2.052 2.052 2.7 1.08.684 2.412 1.026 3.996 1.026 1.908 0 3.42-.558 4.536-1.674 1.152-1.08 1.728-2.826 1.728-5.238V86.68c-.9 1.404-2.142 2.556-3.726 3.456-1.584.864-3.438 1.296-5.562 1.296-2.484 0-4.734-.63-6.75-1.89-2.016-1.296-3.618-3.114-4.806-5.454-1.152-2.376-1.728-5.112-1.728-8.208s.576-5.814 1.728-8.154c1.188-2.34 2.79-4.14 4.806-5.4 2.016-1.26 4.266-1.89 6.75-1.89zm9.288 15.498c0-2.304-.648-4.122-1.944-5.454-1.26-1.332-2.808-1.998-4.644-1.998-1.836 0-3.402.666-4.698 1.998-1.26 1.296-1.89 3.096-1.89 5.4 0 2.304.63 4.14 1.89 5.508 1.296 1.332 2.862 1.998 4.698 1.998 1.836 0 3.384-.666 4.644-1.998 1.296-1.332 1.944-3.15 1.944-5.454zm44.318-.486c0 .864-.054 1.764-.162 2.7h-20.898c.144 1.872.738 3.312 1.782 4.32 1.08.972 2.394 1.458 3.942 1.458 2.304 0 3.906-.972 4.806-2.916h9.828a13.312 13.312 0 01-2.754 5.346c-1.296 1.584-2.934 2.826-4.914 3.726-1.98.9-4.194 1.35-6.642 1.35-2.952 0-5.58-.63-7.884-1.89-2.304-1.26-4.104-3.06-5.4-5.4-1.296-2.34-1.944-5.076-1.944-8.208 0-3.132.63-5.868 1.89-8.208 1.296-2.34 3.096-4.14 5.4-5.4 2.304-1.26 4.95-1.89 7.938-1.89 2.916 0 5.508.612 7.776 1.836 2.268 1.224 4.032 2.97 5.292 5.238 1.296 2.268 1.944 4.914 1.944 7.938zm-9.45-2.43c0-1.584-.54-2.844-1.62-3.78-1.08-.936-2.43-1.404-4.05-1.404-1.548 0-2.862.45-3.942 1.35-1.044.9-1.692 2.178-1.944 3.834h11.556zm28.038 18.414c-2.952 0-5.616-.63-7.992-1.89-2.34-1.26-4.194-3.06-5.562-5.4-1.332-2.34-1.998-5.076-1.998-8.208 0-3.096.684-5.814 2.052-8.154 1.368-2.376 3.24-4.194 5.616-5.454 2.376-1.26 5.04-1.89 7.992-1.89s5.616.63 7.992 1.89c2.376 1.26 4.248 3.078 5.616 5.454 1.368 2.34 2.052 5.058 2.052 8.154s-.702 5.832-2.106 8.208c-1.368 2.34-3.258 4.14-5.67 5.4-2.376 1.26-5.04 1.89-7.992 1.89zm0-7.992c1.764 0 3.258-.648 4.482-1.944 1.26-1.296 1.89-3.15 1.89-5.562 0-2.412-.612-4.266-1.836-5.562-1.188-1.296-2.664-1.944-4.428-1.944-1.8 0-3.294.648-4.482 1.944-1.188 1.26-1.782 3.114-1.782 5.562 0 2.412.576 4.266 1.728 5.562 1.188 1.296 2.664 1.944 4.428 1.944zm29.901-17.55c1.08-1.656 2.43-2.952 4.05-3.888 1.62-.972 3.42-1.458 5.4-1.458v9.774h-2.538c-2.304 0-4.032.504-5.184 1.512-1.152.972-1.728 2.7-1.728 5.184V91h-9.234V60.868h9.234v5.022zm25.311-5.454c2.124 0 3.978.432 5.562 1.296 1.62.864 2.862 1.998 3.726 3.402v-4.266h9.234v30.078c0 2.772-.558 5.274-1.674 7.506-1.08 2.268-2.754 4.068-5.022 5.4-2.232 1.332-5.022 1.998-8.37 1.998-4.464 0-8.082-1.062-10.854-3.186-2.772-2.088-4.356-4.932-4.752-8.532h9.126c.288 1.152.972 2.052 2.052 2.7 1.08.684 2.412 1.026 3.996 1.026 1.908 0 3.42-.558 4.536-1.674 1.152-1.08 1.728-2.826 1.728-5.238V86.68c-.9 1.404-2.142 2.556-3.726 3.456-1.584.864-3.438 1.296-5.562 1.296-2.484 0-4.734-.63-6.75-1.89-2.016-1.296-3.618-3.114-4.806-5.454-1.152-2.376-1.728-5.112-1.728-8.208s.576-5.814 1.728-8.154c1.188-2.34 2.79-4.14 4.806-5.4 2.016-1.26 4.266-1.89 6.75-1.89zm9.288 15.498c0-2.304-.648-4.122-1.944-5.454-1.26-1.332-2.808-1.998-4.644-1.998-1.836 0-3.402.666-4.698 1.998-1.26 1.296-1.89 3.096-1.89 5.4 0 2.304.63 4.14 1.89 5.508 1.296 1.332 2.862 1.998 4.698 1.998 1.836 0 3.384-.666 4.644-1.998 1.296-1.332 1.944-3.15 1.944-5.454zm44.319-.486c0 .864-.054 1.764-.162 2.7h-20.898c.144 1.872.738 3.312 1.782 4.32 1.08.972 2.394 1.458 3.942 1.458 2.304 0 3.906-.972 4.806-2.916h9.828a13.312 13.312 0 01-2.754 5.346c-1.296 1.584-2.934 2.826-4.914 3.726-1.98.9-4.194 1.35-6.642 1.35-2.952 0-5.58-.63-7.884-1.89-2.304-1.26-4.104-3.06-5.4-5.4-1.296-2.34-1.944-5.076-1.944-8.208 0-3.132.63-5.868 1.89-8.208 1.296-2.34 3.096-4.14 5.4-5.4 2.304-1.26 4.95-1.89 7.938-1.89 2.916 0 5.508.612 7.776 1.836 2.268 1.224 4.032 2.97 5.292 5.238 1.296 2.268 1.944 4.914 1.944 7.938zm-9.45-2.43c0-1.584-.54-2.844-1.62-3.78-1.08-.936-2.43-1.404-4.05-1.404-1.548 0-2.862.45-3.942 1.35-1.044.9-1.692 2.178-1.944 3.834h11.556zm65.068-12.258c2.34 0 4.428.486 6.264 1.458 1.872.972 3.33 2.412 4.374 4.32 1.08 1.908 1.62 4.212 1.62 6.912V91h-6.102V74.368c0-2.664-.666-4.698-1.998-6.102-1.332-1.44-3.15-2.16-5.454-2.16s-4.14.72-5.508 2.16c-1.332 1.404-1.998 3.438-1.998 6.102V91h-6.102V74.368c0-2.664-.666-4.698-1.998-6.102-1.332-1.44-3.15-2.16-5.454-2.16s-4.14.72-5.508 2.16c-1.332 1.404-1.998 3.438-1.998 6.102V91h-6.156V61.246h6.156v3.402c1.008-1.224 2.286-2.178 3.834-2.862 1.548-.684 3.204-1.026 4.968-1.026 2.376 0 4.5.504 6.372 1.512 1.872 1.008 3.312 2.466 4.32 4.374.9-1.8 2.304-3.222 4.212-4.266a12.294 12.294 0 016.156-1.62zm47.038.486V91h-6.156v-3.51c-.972 1.224-2.25 2.196-3.834 2.916-1.548.684-3.204 1.026-4.968 1.026-2.34 0-4.446-.486-6.318-1.458-1.836-.972-3.294-2.412-4.374-4.32-1.044-1.908-1.566-4.212-1.566-6.912V61.246h6.102v16.578c0 2.664.666 4.716 1.998 6.156 1.332 1.404 3.15 2.106 5.454 2.106s4.122-.702 5.454-2.106c1.368-1.44 2.052-3.492 2.052-6.156V61.246h6.156zm35.392 14.148c0 1.116-.072 2.124-.216 3.024h-22.734c.18 2.376 1.062 4.284 2.646 5.724 1.584 1.44 3.528 2.16 5.832 2.16 3.312 0 5.652-1.386 7.02-4.158h6.642c-.9 2.736-2.538 4.986-4.914 6.75-2.34 1.728-5.256 2.592-8.748 2.592-2.844 0-5.4-.63-7.668-1.89-2.232-1.296-3.996-3.096-5.292-5.4-1.26-2.34-1.89-5.04-1.89-8.1 0-3.06.612-5.742 1.836-8.046 1.26-2.34 3.006-4.14 5.238-5.4 2.268-1.26 4.86-1.89 7.776-1.89 2.808 0 5.31.612 7.506 1.836 2.196 1.224 3.906 2.952 5.13 5.184 1.224 2.196 1.836 4.734 1.836 7.614zm-6.426-1.944c-.036-2.268-.846-4.086-2.43-5.454-1.584-1.368-3.546-2.052-5.886-2.052-2.124 0-3.942.684-5.454 2.052-1.512 1.332-2.412 3.15-2.7 5.454h16.47zm18.64-22.41V91h-6.156V51.04h6.156zm14.239 0V91h-6.156V51.04h6.156zm35.352 24.354c0 1.116-.072 2.124-.216 3.024h-22.734c.18 2.376 1.062 4.284 2.646 5.724 1.584 1.44 3.528 2.16 5.832 2.16 3.312 0 5.652-1.386 7.02-4.158h6.642c-.9 2.736-2.538 4.986-4.914 6.75-2.34 1.728-5.256 2.592-8.748 2.592-2.844 0-5.4-.63-7.668-1.89-2.232-1.296-3.996-3.096-5.292-5.4-1.26-2.34-1.89-5.04-1.89-8.1 0-3.06.612-5.742 1.836-8.046 1.26-2.34 3.006-4.14 5.238-5.4 2.268-1.26 4.86-1.89 7.776-1.89 2.808 0 5.31.612 7.506 1.836 2.196 1.224 3.906 2.952 5.13 5.184 1.224 2.196 1.836 4.734 1.836 7.614zm-6.426-1.944c-.036-2.268-.846-4.086-2.43-5.454-1.584-1.368-3.546-2.052-5.886-2.052-2.124 0-3.942.684-5.454 2.052-1.512 1.332-2.412 3.15-2.7 5.454h16.47zm18.64-7.884c.9-1.512 2.088-2.682 3.564-3.51 1.512-.864 3.294-1.296 5.346-1.296v6.372h-1.566c-2.412 0-4.248.612-5.508 1.836-1.224 1.224-1.836 3.348-1.836 6.372V91h-6.156V61.246h6.156v4.32z" fill="#43FECB"/>
      <g filter="url(#filter0_i)">
        <path fill="#28F5BE" d="M54.147 80.94l-9.794 9.795-9.794-9.794 9.794-9.794z"/>
      </g>
      <g filter="url(#filter1_i)">
        <path fill="#28F5BE" fillOpacity=".8" d="M44.412 71.088l-9.794 9.794-9.794-9.794 9.794-9.794z"/>
      </g>
      <g filter="url(#filter2_i)">
        <path fill="#28F5BE" fillOpacity=".4" d="M24.942 51.383l-9.794 9.794-9.795-9.794 9.795-9.794z"/>
      </g>
      <g filter="url(#filter3_i)">
        <path fill="#28F5BE" fillOpacity=".6" d="M34.677 61.235l-9.794 9.794-9.795-9.794 9.795-9.794z"/>
      </g>
      <g filter="url(#filter4_i)">
        <path fill="#28F5BE" d="M64 71.206L54.206 81l-9.794-9.794 9.794-9.794z"/>
      </g>
      <g filter="url(#filter5_i)">
        <path fill="#28F5BE" d="M44.294 90.676L34.5 100.47l-9.794-9.794 9.794-9.794z"/>
      </g>
      <g filter="url(#filter6_i)">
        <path fill="#28F5BE" fillOpacity=".8" d="M54.265 61.353l-9.794 9.794-9.795-9.794 9.795-9.794z"/>
      </g>
      <g filter="url(#filter7_i)">
        <path fill="#28F5BE" fillOpacity=".4" d="M34.794 41.647L25 51.442l-9.794-9.795L25 31.853z"/>
      </g>
      <g filter="url(#filter8_i)">
        <path fill="#28F5BE" fillOpacity=".2" d="M25.06 31.794l-9.794 9.794-9.794-9.794L15.266 22z"/>
      </g>
      <g filter="url(#filter9_i)">
        <path fill="#28F5BE" fillOpacity=".6" d="M44.53 51.5l-9.795 9.794-9.794-9.794 9.794-9.794z"/>
      </g>
      <g filter="url(#filter10_i)">
        <path fill="#28F5BE" fillOpacity=".8" d="M34.56 80.823l-9.795 9.794-9.794-9.794 9.794-9.794z"/>
      </g>
      <g filter="url(#filter11_i)">
        <path fill="#28F5BE" fillOpacity=".6" d="M24.824 70.97l-9.794 9.795-9.794-9.794 9.794-9.795z"/>
      </g>
      <g filter="url(#filter12_i)">
        <path fill="#28F5BE" d="M34.442 100.41l-9.795 9.795-9.794-9.794 9.794-9.794z"/>
      </g>
      <g filter="url(#filter13_i)">
        <path fill="#28F5BE" fillOpacity=".8" d="M24.707 90.559l-9.795 9.794-9.794-9.794 9.794-9.795z"/>
      </g>
      <g filter="url(#filter14_i)">
        <path fill="#28F5BE" d="M24.589 110.146l-9.794 9.794L5 110.146l9.795-9.794z"/>
      </g>
      <defs>
        <filter id="filter0_i" x="34.559" y="71.147" width="19.588" height="23.588" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend in2="shape" result="effect1_innerShadow"/>
        </filter>
        <filter id="filter1_i" x="24.824" y="61.294" width="19.588" height="23.588" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend in2="shape" result="effect1_innerShadow"/>
        </filter>
        <filter id="filter2_i" x="5.353" y="41.588" width="19.588" height="23.588" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend in2="shape" result="effect1_innerShadow"/>
        </filter>
        <filter id="filter3_i" x="15.088" y="51.441" width="19.588" height="23.588" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend in2="shape" result="effect1_innerShadow"/>
        </filter>
        <filter id="filter4_i" x="44.412" y="61.412" width="19.588" height="23.588" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend in2="shape" result="effect1_innerShadow"/>
        </filter>
        <filter id="filter5_i" x="24.706" y="80.882" width="19.588" height="23.588" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend in2="shape" result="effect1_innerShadow"/>
        </filter>
        <filter id="filter6_i" x="34.676" y="51.559" width="19.588" height="23.588" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend in2="shape" result="effect1_innerShadow"/>
        </filter>
        <filter id="filter7_i" x="15.206" y="31.853" width="19.588" height="23.588" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend in2="shape" result="effect1_innerShadow"/>
        </filter>
        <filter id="filter8_i" x="5.471" y="22" width="19.588" height="23.588" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend in2="shape" result="effect1_innerShadow"/>
        </filter>
        <filter id="filter9_i" x="24.941" y="41.706" width="19.588" height="23.588" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend in2="shape" result="effect1_innerShadow"/>
        </filter>
        <filter id="filter10_i" x="14.971" y="71.029" width="19.588" height="23.588" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend in2="shape" result="effect1_innerShadow"/>
        </filter>
        <filter id="filter11_i" x="5.236" y="61.176" width="19.588" height="23.588" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend in2="shape" result="effect1_innerShadow"/>
        </filter>
        <filter id="filter12_i" x="14.853" y="90.617" width="19.588" height="23.588" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend in2="shape" result="effect1_innerShadow"/>
        </filter>
        <filter id="filter13_i" x="5.118" y="80.764" width="19.588" height="23.588" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend in2="shape" result="effect1_innerShadow"/>
        </filter>
        <filter id="filter14_i" x="5" y="100.352" width="19.588" height="23.588" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend in2="shape" result="effect1_innerShadow"/>
        </filter>
      </defs>
    </svg>
  </S.Wrapper>
)

export default Logo
