export interface Gachapon {
  id: number
  name: string
  imageUrl: string
  count: number
}

export interface GachaponList {
  tickets: number
  respVOList: GachaponTask[]
}

export interface GachaponTask {
  id: number
  taskName: string
  description: string
  rewardValue: number
  taskValue: number
  completed: boolean
  receive: boolean
}
