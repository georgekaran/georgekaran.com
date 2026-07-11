import type { ComponentProps } from "react"
import { PALETTE, GEORGE_RUN_A } from "@/os/georgeSprite"
import type { AppIcon } from "@/os/types"

const COLS = GEORGE_RUN_A[0].length
const ROWS = GEORGE_RUN_A.length

type GeorgeIconProps = ComponentProps<AppIcon>

export function GeorgeIcon({ size = 24, style }: GeorgeIconProps) {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${COLS} ${ROWS}`} style={style} aria-hidden="true">
      {GEORGE_RUN_A.flatMap((line, row) =>
        [...line].map((key, col) => {
          const fill = PALETTE[key]
          if (!fill) return null
          return <rect key={`${row}-${col}`} x={col} y={row} width={1} height={1} fill={fill}/>
        }),
      )}
    </svg>
  )
}
