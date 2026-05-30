import { FunctionComponent, PropsWithChildren, SVGProps } from "react"

type Size = "xs" | "sm" | "md" | "lg" | "xl"

export type IconProps = SVGProps<SVGSVGElement> & {
  size?: Size
}

export type Icon = FunctionComponent<PropsWithChildren<IconProps>>

const sizeClasses: Record<Size, string> = {
  xs: "w-4 h-4",
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-12 h-12",
  xl: "w-16 h-16",
}

export const SvgIcon: Icon = ({ size = "sm", children, className, ...rest }) => {
  return (
      <svg
          {...rest}
          className={`${sizeClasses[size]} ${className ?? ""}`}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
      >
        {children}
      </svg>
  )
}
