export interface User {
  telegramId: string
  username: string
  avatarPath: string
  point: number
  friendPoint: number
  registeredDate: string
  rewardWallet: number
  wallet: string
}

export interface userWallet {
  telegramId: string
  wallet: string
}
