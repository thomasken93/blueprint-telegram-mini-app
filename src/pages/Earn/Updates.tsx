import { OverlayButton } from "@/components/OverlayButton";

import BackLogo from '@/assets/images/Group 1000002443.png';
import { Referals } from "@/components/Referals";
import { ClaimReward } from '@/components/ClaimReward';
import { MusicPlayer } from "@/components/MusicPlayer";
import TonIcon from '@/assets/images/TonIcon.png'
import DogeIcon from '@/assets/images/DogeIcon.png'
import { ComingSoon } from "@/components/ComingSoon";

const rewards = [
  {
    icon: TonIcon,
    label: "Invite 1 Friend",
    reward: "49,000 HashTags"
  },
  {
    icon: DogeIcon,
    label: "Invite 5 Friend",
    reward: "49,000 HashTags"
  },
]

export const Updates = ({}) => {
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
      <div className="mt-[30px]">
        <Referals />
      </div>
      <div className='absolute top-[256px] flex justify-center items-center opacity-[12%]'>
        <img src={BackLogo}/>
      </div>
    </div>
  );
}