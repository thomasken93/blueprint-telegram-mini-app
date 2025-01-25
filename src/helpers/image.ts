import { URL_FILE_TELEGRAM } from '../constants/token'

const botToken = import.meta.env.VITE_BOT_TOKEN

export const preProcessUrl = (avatarPath: string): string => {
  return `${URL_FILE_TELEGRAM + botToken}/${avatarPath}`
}
