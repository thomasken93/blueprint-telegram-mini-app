import { useNavigate } from 'react-router-dom';
import { Community, Content, Header, Rewards } from '@/components'
import { UserSection } from '@/components/UserSection';
import { MusicPlayer } from '@/components/MusicPlayer';
import { OverlayButton } from '@/components/OverlayButton';
import LeaderBoardCup from '@/assets/images/leaderboardcup.png';
import { useCallback } from 'react';
import WomanIcon from '@/assets/images/memoji.png';
import ManIcon from '@/assets/images/man.png';
import { UserRanking } from '@/components/UserRanking';
import { UserIconRank } from '@/components/UserIconRank';

const userRanking = [
  {
    icon: WomanIcon,
    name: "MJ",
    balance: 49000
  },
  {
    icon: ManIcon,
    name: "JK",
    balance: 49000
  },
  {
    icon: WomanIcon,
    name: "myguy",
    balance: 49000
  },
]

export const LeaderboardPage = () => {
  const navigate = useNavigate();

  const onBuyHTCClick = useCallback(() => {
    navigate('/buyhtc');
  }, [navigate])

  return (
    <div>
      <Header />
      <div className="mt-[51px]">
        <UserSection/>
      </div>
      <div className='mt-[-18px] flex flex-col items-center'>
        <img src={LeaderBoardCup} />
        <p className='text-[24px] leading-[30px] font-[700]'>LEADERBOARD</p>
      </div>
      <div className='relative flex justify-center items-center flex-col h-[186px]'>
        <div className='relative'><UserIconRank ranking={1} icon={ManIcon} name="Obed Rich" balance={98899999} color='#FFA100' size='md'/></div>
        <div className='absolute self-start bottom-0'><UserIconRank ranking={2} icon={WomanIcon} name="Fav" balance={80001146} color='#3772FF' size='sm'/></div>
        <div className='absolute self-end bottom-0'><UserIconRank ranking={3} icon={ManIcon} name="string#s" balance={98899999} color='#3772FF' size='sm'/></div>
      </div>
      <div className='flex flex-col gap-[6px] px-4 mt-[38px]'>
        <div className='text-[16px] leading-[20px] flex justify-between'>
          <p>Total</p>
          <p>40,123,000 users</p>
        </div>
        <div className='flex flex-col gap-4'>
          {userRanking.map((u, index) => <UserRanking icon={u.icon} name={u.name} balance={u.balance} ranking={index + 4}/>)}
        </div>
      </div>
    </div>
  )
}

export default LeaderboardPage
