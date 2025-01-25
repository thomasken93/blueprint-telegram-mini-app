import MusicIcon from '@/assets/images/music.png'

const formatNumberAsThousands = (number: number) => {
  return new Intl.NumberFormat('en-US').format(number);
};

export const FollowSocial: React.FC<FollowSocialProps> = ({ icon, label, rewards, className }) => {
  return (
    <div className={`w-[358px] h-[46px] bg-[#FF29C2] border rounded-[8px] border-[#A7A7CC] flex justify-center items-center px-2 gap-[0px] ${className}`}>
      <div className='flex grow gap-[24px]'>
        <img src={icon} className='object-contain'/>
        <div className='flex flex-col gap-1'>
          <p className='text-[16px] font-[400]'>{label}</p>
          <p className='text-[14px] font-[400]'>{rewards}</p>
        </div>
      </div>
      <a className='text-[16px] leading-[20px] text-[#002681] font-[700] bg-white px-2 py-3 rounded-[8px] flex-none'> GO </a>
    </div>
  )
}

type FollowSocialProps = {
  className?: string,
  icon: any,
  label: string,
  rewards: string,
}
