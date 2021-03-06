export interface BgColor {
  daily: string
  monthly: string
  yearly: string
  custom: string
  [propName: string]: string
}

export interface Props {
  title: string
  period: string
  taskTotal: number
  taskDone: number
  onClick?: () => void
}

export interface StyledWrapper {
  period: string
}
