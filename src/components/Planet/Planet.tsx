import React from 'react'
import * as S from './Planet.styles'

export type SizeType = 'small' | 'medium' | 'large'

export type PlanetProps = {
  size?: SizeType
}

const Planet = ({ size = 'medium' }: PlanetProps) => (
  <S.Wrapper data-testid="planet" size={size}>
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
      <g filter="url(#filter0_i)">
        <circle cx="279.815" cy="279.5" r="259.5" fill="url(#paint0_linear)"/>
      </g>
      <circle cx="279.815" cy="279.5" r="269.5" stroke="#0BFFB6" strokeOpacity=".03" strokeWidth="20" strokeMiterlimit="1" strokeDasharray="1 1"/>
      <path d="M272.721 7.709c1.266-.945 23.624-.945 24.468 0 .844.945 1.16 8.428 7.594 13.233 6.433 4.804-47.671 5.985-39.655 0 8.015-5.986 6.328-12.288 7.593-13.233z" fill="#AFEFDD"/>
      <path d="M13.258 225.224c.317-1.39 6.495-25.492 6.563-26.369.069-.878 8.49.786 14.878-4.988 6.388-5.773-6.979 52.821-10.637 42.737-3.659-10.084-11.121-9.99-10.804-11.38z" fill="#6BE7C5"/>
      <path d="M462.381 71.17c1.989.202 21.127 19.584 20.943 21.21-.184 1.625-7.085 8.981-6.183 19.105.902 10.124-46.54-35.657-33.942-34.374 12.597 1.283 17.193-6.144 19.182-5.941z" fill="#98F1D9"/>
      <ellipse cx="428.815" cy="309.5" rx="24.5" ry="33.5" fill="#28F5BE"/>
      <ellipse cx="426.315" cy="313" rx="22" ry="30" fill="#1C9B79"/>
      <ellipse rx="21.5" ry="29" transform="matrix(-1 0 0 1 484.815 208)" fill="#28F5BE"/>
      <ellipse rx="19.306" ry="25.97" transform="matrix(-1 0 0 1 487.009 211.03)" fill="#1C9B79"/>
      <ellipse cx="115.815" cy="360.5" rx="24.5" ry="33.5" fill="#28F5BE"/>
      <ellipse cx="113.315" cy="364" rx="22" ry="30" fill="#1C9B79"/>
      <ellipse cx="287.315" cy="500" rx="8" ry="11" fill="#28F5BE"/>
      <ellipse cx="286.499" cy="501.149" rx="7.184" ry="9.851" fill="#1C9B79"/>
      <ellipse cx="387.315" cy="406" rx="8" ry="11" fill="#28F5BE"/>
      <ellipse cx="386.499" cy="407.149" rx="7.184" ry="9.851" fill="#1C9B79"/>
      <ellipse cx="187.315" cy="410" rx="8" ry="11" fill="#28F5BE"/>
      <ellipse cx="186.499" cy="411.149" rx="7.184" ry="9.851" fill="#1C9B79"/>
      <ellipse rx="9" ry="12.5" transform="matrix(-1 0 0 1 52.315 346.5)" fill="#28F5BE"/>
      <ellipse rx="8.082" ry="11.194" transform="matrix(-1 0 0 1 53.234 347.806)" fill="#1C9B79"/>
      <ellipse rx="11" ry="15.5" transform="matrix(-1 0 0 1 147.315 445.5)" fill="#28F5BE"/>
      <ellipse rx="9.878" ry="13.881" transform="matrix(-1 0 0 1 148.438 447.119)" fill="#1C9B79"/>
      <ellipse cx="332.815" cy="457.5" rx="12.5" ry="17.5" fill="#28F5BE"/>
      <ellipse cx="331.54" cy="459.328" rx="11.225" ry="15.672" fill="#1C9B79"/>
      <ellipse rx="13.5" ry="17.5" transform="matrix(-1 0 0 1 494.815 281.5)" fill="#28F5BE"/>
      <ellipse rx="12.122" ry="15.672" transform="matrix(-1 0 0 1 496.193 283.328)" fill="#1C9B79"/>
      <ellipse rx="9" ry="11.5" transform="matrix(-1 0 0 1 493.315 349.5)" fill="#28F5BE"/>
      <ellipse rx="8.082" ry="10.299" transform="matrix(-1 0 0 1 494.234 350.702)" fill="#1C9B79"/>
      <ellipse rx="4.5" ry="6" transform="matrix(-1 0 0 1 390.815 281)" fill="#28F5BE"/>
      <ellipse rx="4.041" ry="5.373" transform="matrix(-1 0 0 1 391.275 281.627)" fill="#1C9B79"/>
      <ellipse rx="4.5" ry="6" transform="matrix(-1 0 0 1 413.815 264)" fill="#28F5BE"/>
      <ellipse rx="4.041" ry="5.373" transform="matrix(-1 0 0 1 414.275 264.627)" fill="#1C9B79"/>
      <ellipse cx="212.315" cy="491" rx="8" ry="11" fill="#28F5BE"/>
      <ellipse cx="211.499" cy="492.149" rx="7.184" ry="9.851" fill="#1C9B79"/>
      <ellipse rx="10" ry="13.5" transform="matrix(1 0 0 -1 405.315 454.5)" fill="#28F5BE"/>
      <ellipse rx="8.98" ry="12.09" transform="matrix(1 0 0 -1 404.295 453.09)" fill="#1C9B79"/>
      <ellipse rx="10" ry="13.5" transform="matrix(1 0 0 -1 405.315 454.5)" fill="#28F5BE"/>
      <ellipse rx="8.98" ry="12.09" transform="matrix(1 0 0 -1 404.295 453.09)" fill="#1C9B79"/>
      <ellipse rx="3" ry="4" transform="matrix(1 0 0 -1 432.315 395)" fill="#28F5BE"/>
      <ellipse rx="2.694" ry="3.582" transform="matrix(1 0 0 -1 432.009 394.582)" fill="#1C9B79"/>
      <ellipse rx="3" ry="4" transform="matrix(1 0 0 -1 239.315 440)" fill="#28F5BE"/>
      <ellipse rx="2.694" ry="3.582" transform="matrix(1 0 0 -1 239.009 439.582)" fill="#1C9B79"/>
      <ellipse rx="3" ry="4" transform="matrix(1 0 0 -1 457.315 368)" fill="#28F5BE"/>
      <ellipse rx="2.694" ry="3.582" transform="matrix(1 0 0 -1 457.009 367.582)" fill="#1C9B79"/>
      <ellipse rx="3" ry="4" transform="matrix(1 0 0 -1 150.315 403)" fill="#28F5BE"/>
      <ellipse rx="2.694" ry="3.582" transform="matrix(1 0 0 -1 150.009 402.582)" fill="#1C9B79"/>
      <ellipse cx="193.816" cy="100" rx="53.5" ry="9" transform="rotate(-31.063 193.816 100)" fill="#fff" fillOpacity=".7"/>
      <circle cx="132.669" cy="138.353" r="9" transform="rotate(-31.063 132.669 138.353)" fill="#fff" fillOpacity=".7"/>
      <defs>
        <linearGradient id="paint0_linear" x1="352.183" y1="421.311" x2="345.654" y2="-170.747" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1BE0AB"/>
          <stop offset="1" stopColor="#fff"/>
        </linearGradient>
        <filter id="filter0_i" x=".315" y="0" width="563" height="563" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="10" in="SourceAlpha" result="effect1_innerShadow"/>
          <feOffset dx="4" dy="4"/>
          <feGaussianBlur stdDeviation="7.5"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix values="0 0 0 0 0.189063 0 0 0 0 0.458333 0 0 0 0 0.329083 0 0 0 0.45 0"/>
          <feBlend in2="shape" result="effect1_innerShadow"/>
        </filter>
      </defs>
    </svg>
  </S.Wrapper>
)

export default Planet
