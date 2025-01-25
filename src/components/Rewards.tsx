import { RewardItem } from './RewardItem'
import WalletSvg from '@/assets/svgs/wallet-icon.svg'
import AccountAgeIcon from '@/assets/svgs/accountAgeIcon.svg'
import TelegramPremiumIcon from '@/assets/svgs/telegramPremiumIcon.svg'
import InvitedFriendsIcon from '@/assets/svgs/invitedFriendsIcon.svg'

export const Rewards = ({
  pointAge = 0,
  pointFriends = 0,
  pointWallets = 0,
}) => {
  return (
    <div className="text-white p-4 rounded-lg">
      <div className="text-xl font-bold mb-4">Your rewards</div>
      <RewardItem
        icon={<AccountAgeIcon />}
        title="Account age"
        point={pointAge}
      />
      <RewardItem
        icon={<TelegramPremiumIcon />}
        title="Telegram Premium"
        point={0}
      />
      <RewardItem
        icon={<InvitedFriendsIcon />}
        title="Invited friends"
        point={pointFriends}
      />
      <RewardItem
        icon={<WalletSvg />}
        title="Connect Wallet"
        point={pointWallets}
      />
    </div>
  )
}
