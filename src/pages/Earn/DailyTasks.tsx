import { OverlayButton } from "@/components/OverlayButton";

import BackLogo from '@/assets/images/Group 1000002443.png';
import { Referals } from "@/components/Referals";
import { ClaimReward } from '@/components/ClaimReward';
import { MusicPlayer } from "@/components/MusicPlayer";
import FacebookIcon from '@/assets/images/facebook.png'
import TwitterIcon from '@/assets/images/twitter.png'
import TelegramIcon from '@/assets/images/Telegram.png'
import CommunityIcon from '@/assets/images/community.png'
import YoutubeIcon from '@/assets/images/youtube.png'
import TiktokIcon from '@/assets/images/tiktok.png'
import { FollowSocial } from "@/components/FollowSocial";

import VideoLogo from '@/assets/images/videologo.png'

const rewards = [
  {
    icon: FacebookIcon,
    label: "Follow HashTag on Facebook",
    reward: "Reward: +1000 $HTC"
  },
  {
    icon: TwitterIcon,
    label: "Follow HashTag Official X",
    reward: "Reward: +1000 $HTC"
  },
  {
    icon: TelegramIcon,
    label: "Subscribe HashTag Official Channel",
    reward: "Reward: +1000 $HTC"
  },
  {
    icon: CommunityIcon,
    label: "Join HashTag Community",
    reward: "Reward: +1000 $HTC"
  },
  {
    icon: YoutubeIcon,
    label: "Subscribe HashTag Offical YouTube",
    reward: "Reward: +1000 $HTC"
  },
  {
    icon: TiktokIcon,
    label: "Follow HashTag on TikTok",
    reward: "Reward: +1000 $HTC"
  },
]

export const DailyTasks = ({}) => {
  return (
    <div className="px-[16px]">
      <p className="text-[16px] font-[700]">
        Videos
      </p>
      <div className="mt-2 flex flex-col gap-4">
        <img className="w-full" src={VideoLogo} />
      </div>
      <div className="mt-[76px] flex flex-col gap-[10px]">
        { rewards.map(r => <FollowSocial icon={r.icon} label={r.label} rewards={r.reward} />)}
      </div>
      <div className='absolute top-[256px] flex justify-center items-center opacity-[12%]'>
        <img src={BackLogo}/>
      </div>
    </div>
  );
}