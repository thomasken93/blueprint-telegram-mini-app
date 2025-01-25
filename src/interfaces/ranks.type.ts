export interface TotalRanks {
  totalHolder: number
  ranks: Ranking[]
}
export interface Ranking {
  telegramId: string
  username: string
  avatarPath: string
  ranking: number
  totalScore: string
  createdAt: Date
}
