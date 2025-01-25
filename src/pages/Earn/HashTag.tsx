import { OverlayButton } from "@/components/OverlayButton";

import BackLogo from '@/assets/images/Group 1000002443.png';
import { Referals } from "@/components/Referals";
import { ClaimReward } from '@/components/ClaimReward';
import { MusicPlayer } from "@/components/MusicPlayer";

const subscribes = [
  {
    label: "Invite 1 Friend",
    reward: 3000
  },
  {
    label: "Invite 5 Friend",
    reward: 10000
  },
  {
    label: "Invite 20 Friend",
    reward: 20000
  },
  {
    label: "Invite 50 Friend",
    reward: 40000
  },
  {
    label: "Subscribe Telegram Premium",
    reward: 50000
  },
]

export const HashTag = ({}) => {
  return (
    <div className="px-[16px]">
      <p className="text-[16px] font-[700]">
        Invite friends
      </p>
      <div className="mt-2">
        <Referals />
      </div>
      <div className="mt-[22px] flex flex-col gap-2">
        {subscribes.map((sub) => <ClaimReward value={sub} />)}
      </div>
      {/* <p className="mt-2 text-[18px] leading-[20px] font-[700]">Tonic Sofa Gamify System</p> */}
      <div className="mt-2">
        <MusicPlayer className="py-[6px] h-[54px]"/>
      </div>
      <div className='absolute bottom-[38px] flex justify-center items-center opacity-[12%]'>
        <img src={BackLogo}/>
      </div>
    </div>
  );
}