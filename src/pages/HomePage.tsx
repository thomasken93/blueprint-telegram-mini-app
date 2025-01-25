import { useNavigate } from 'react-router-dom';
import { Community, Content, Header, Rewards } from '@/components'
import { UserSection } from '@/components/UserSection';
import { MusicPlayer } from '@/components/MusicPlayer';
import { OverlayButton } from '@/components/OverlayButton';
import BackLogo from '@/assets/images/Group 1000002443.png';
import { useCallback } from 'react';

export const HomePage = () => {
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
      <div className="mt-[51px] w-full text-center">
        <p className='font-[800] text-[32px]'>450,000 $HTC</p>
        <p className='font-[700] text-[20px] text-[#FFCA02]'>5H: 22M: 06s</p>
      </div>
      <div className='flex justify-center mt-5'>
        <OverlayButton label={
          <>
            <p className="text-[16px] mr-1">Claim HTC Now:</p>
            <p className="text-[#FFCA02] text-[16px]">1000</p>
          </>
        } width='278px'/>
      </div>
      <div className='relative top-[-24px] flex justify-center items-center'>
        <img src={BackLogo}/>
      </div>
      <div className='relative top-[-116px] ml-6'>
        <p className='text-[16px] font-[700]'>
          Tonic Sofa Gamify System
        </p>
        <div className='relative mt-4'>
          <MusicPlayer />
        </div>
        <div className='flex justify-around mt-[22px]'>
          <OverlayButton label='Start Farming'/>
          <OverlayButton label='Buy %HTC' onClick={onBuyHTCClick}/>
        </div>
      </div>
    </div>
  )
}

export default HomePage
