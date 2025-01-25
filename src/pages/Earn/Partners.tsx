import { OverlayButton } from "@/components/OverlayButton";

import BackLogo from '@/assets/images/Group 1000002443.png';
import { ClaimReward } from '@/components/ClaimReward';
import { MusicPlayer } from "@/components/MusicPlayer";
import SimpleCoinIcon from '@/assets/images/SimpleCoinIcon.png'
import RubyCoinIcon from '@/assets/images/RubyCoinIcon.png'
import WCoinIcon from '@/assets/images/w-CoinIcon.png'
import { ComingSoon } from "@/components/ComingSoon";

const rewards = [
  {
    icon: SimpleCoinIcon,
    label: "Simple Coin",
    reward: "49,000 HashTags"
  },
  {
    icon: RubyCoinIcon,
    label: "RubyCoin",
    reward: "49,000 HashTags"
  },
  {
    icon: WCoinIcon,
    label: "W-Coin",
    reward: "49,000 HashTags"
  },
]

export const Partners = ({}) => {
  return (
    <div className="px-[16px]">
      <p className="text-[16px] font-[700]">
        Wallets
      </p>
      <div className="mt-2 flex flex-col gap-4">
        {rewards.map(r => <ComingSoon label={r.label} icon={r.icon} rewards={r.reward}/>)}
      </div>
      <div className="mt-[76px]">
        <MusicPlayer className="py-[6px] h-[54px]"/>
      </div>
      <div className="mt-[88px]">
        <OverlayButton label="Buy $HTC"/>
      </div>
      <div className='absolute top-[256px] flex justify-center items-center opacity-[12%]'>
        <img src={BackLogo}/>
      </div>
    </div>
  );
}