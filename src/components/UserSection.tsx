import { useEffect, useMemo, useState } from 'react'
import UserIcon from '../assets/images/memoji.png';
import { useAppDispatch, useAppSelector } from '@/app/hook'
import { useTonConnectUI, useTonWallet } from '@tonconnect/ui-react'
import WebApp from '@twa-dev/sdk'
import {
  fetchUserById,
  selectUserById,
  updateUserWallet,
} from '@/app/slice/userSlice'

export const UserSection: React.FC<UserSectionProp> = ({ 
}) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectUserById)
  const userId = WebApp.initDataUnsafe?.user?.id ?? null
  const wallet = useTonWallet()
  const [tonConnectUi] = useTonConnectUI()
  const [isOpen, setIsOpen] = useState(false)

  
  useEffect(() => {
    if (userId && !user) {
      dispatch(fetchUserById(userId))
    }
  }, [userId, user, dispatch])

  useEffect(() => {
    if (userId && !user?.wallet && wallet?.account.address) {
      dispatch(
        updateUserWallet({
          telegramId: userId,
          wallet: wallet?.account.address,
        }),
      )
    }
  }, [userId, wallet, user, dispatch])

  const userPoints = useMemo(() => {
    return (
      (user?.point ?? 0) + (user?.friendPoint ?? 0) + (user?.rewardWallet ?? 0)
    )
  }, [user])

  const walletButtonText = useMemo(() => {
    return user?.wallet && wallet ? "Wallet Connected" : 'Connect wallet'
  }, [wallet, user])

  const handleClickConnectWallet = () => {
    if (wallet) {
      setIsOpen(true)
    } else {
      tonConnectUi.openModal()
    }
  }

  const handleConnectDifferentWallet = () => {
    if (wallet) {
      tonConnectUi.disconnect()
    }
    setIsOpen(false)
    tonConnectUi.openModal()
  }

  return (
    <div className="flex justify-between mb-3 w-full px-4">
      <div className="flex gap-2">
        <div className="rounded-[50%] w-[40px] h-[40px]">
          <img src={UserIcon}/>
        </div>
        <div className="flex flex-col justify-between text-[16px]">
          <p className="leading-[16px]">slackecy</p>
          <p className="leading-[16px]">LV 1</p>
        </div>
      </div>
      <a className="text-white font-[800] text-[16px] mt-1" onClick={handleClickConnectWallet}>{walletButtonText}</a>
    </div>
  )
}

type UserSectionProp = {
}
