import type { ModuleType } from '~/@types/component'

export interface HomeData {
  id: number
  moduleType: ModuleType
  sort: number
  status: number
  title: string
  titleVisible: boolean
}

export interface GameItem {
  gameImageUrl: string
  gameName: string
  [key: string]: any
}

export interface GameResponse {
  list: GameItem[]
  [key: string]: any
}
