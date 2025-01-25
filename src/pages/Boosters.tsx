import { Community, Content, Header, Rewards } from '@/components'
import { UserSection } from '@/components/UserSection';
import { MusicPlayer } from '@/components/MusicPlayer';
import { OverlayButton } from '@/components/OverlayButton';
import { useCallback, useMemo, useState } from 'react';
import { BoostMe } from "@/components/BoostMe";
import BoostMeIcon from '@/assets/images/BoostMe.png'
import GoodVibesIcon from '@/assets/images/GoodVibes.png'
import DEntertainer from '@/assets/images/D-Entertainer.png'

import BackLogo from '@/assets/images/Group 1000002443.png';

const rewards = [
  {
    icon: BoostMeIcon,
    label: "BoostMe",
    reward: 3000,
    duration: 8,
  },
  {
    icon: GoodVibesIcon,
    label: "GoodVibes",
    reward: 7000,
    duration: 8,
  },
  {
    icon: DEntertainer,
    label: "D-Entertainer",
    reward: 10000,
    duration: 8,
  },
]

import ArrowLeft from '@/assets/svgs/arrow-left.svg';
import { BoostModal } from '@/components/BoostModal';
export const Boosters = () => {
  const [activeBooster, setActiveBooster] = useState(null);

  const onActivateBoost = useCallback((index: any) => () => {
    setActiveBooster(index);
  }, [setActiveBooster]);
  return (
    <div>
      <div className="mt-[51px] text-center text-[24px] font-[700] px-2">
        Boosters
        <a className='float-left'>
          <ArrowLeft />
        </a>
      </div>
      <div className='mt-[80px]'>
        <div className="px-[16px]">
          <p className="text-[16px] font-[700]">
            Boost To Earn More Points
          </p>
          <div className="mt-2 flex flex-col gap-4">
            {rewards.map((r, index) => <BoostMe label={r.label} icon={r.icon} rewards={r.reward} duration={r.duration} active={index == activeBooster} onActivate={onActivateBoost(index)}/>)}
          </div>
          <div className="mt-[76px]">
            <MusicPlayer className="py-[6px] h-[54px]"/>
          </div>
          <BoostModal open={activeBooster != null} data={activeBooster != null ? rewards[activeBooster] : {}} onClose={() => setActiveBooster(null)} onBoostWithHTC={() => {}} onBoostWithTon={() => {}}/>
          <div className='absolute top-[256px] flex justify-center items-center opacity-[12%] z-[-1]'>
            <img src={BackLogo}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Boosters
