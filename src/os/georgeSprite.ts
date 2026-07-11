export type PixelGrid = string[]

export const PALETTE: Record<string, string> = {
  G: "#8b5cf6", // George body (violet)
  D: "#6d28d9", // George dark accent
  S: "#f4f6fb", // George highlight / face
  E: "#1a2233", // eyes / outline
  B: "#f4796b", // bug body (coral)
  L: "#1a2233", // bug legs / eyes
}

// 8 wide x 9 tall — a compact pixel figure (running frame A)
export const GEORGE_RUN_A: PixelGrid = [
  "  GGGG  ",
  " GGGGGG ",
  " GSSGSG ",
  " GSEGEG ",
  " GGGGGG ",
  "  GGGG  ",
  " DD  DD ",
  " D    D ",
  "DD    DD",
]

// running frame B — legs swapped
export const GEORGE_RUN_B: PixelGrid = [
  "  GGGG  ",
  " GGGGGG ",
  " GSSGSG ",
  " GSEGEG ",
  " GGGGGG ",
  "  GGGG  ",
  " DD  DD ",
  "  D  D  ",
  "  DD DD ",
]

// jump pose — legs tucked
export const GEORGE_JUMP: PixelGrid = [
  "  GGGG  ",
  " GGGGGG ",
  " GSSGSG ",
  " GSEGEG ",
  " GGGGGG ",
  "  GGGG  ",
  " D    D ",
  "DD    DD",
  "        ",
]

// 7 wide x 5 tall bug
export const BUG: PixelGrid = [
  "L     L",
  " BBBBB ",
  "BBLBLBB",
  " BBBBB ",
  "L  L  L",
]
