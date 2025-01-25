import MusicIcon from '@/assets/images/music.png'

const formatNumberAsThousands = (number: number) => {
  return new Intl.NumberFormat('en-US').format(number);
};

export const BoostMe: React.FC<BoostMeProps> = ({ icon, label, rewards, duration, onActivate, active, className }) => {
  return (
    <div className={`w-[358px] h-[74px] bg-[#FF29C2] border rounded-[8px] border-[#A7A7CC] flex justify-center items-center px-2 py-4 gap-[0px] ${className}`}>
      <div className='flex grow gap-[10px]'>
        <img src={icon} className='object-contain'/>
        <div className='flex flex-col gap-2'>
          <p className='text-[16px] font-[400]'>{label}</p>
          <p className='text-[14px] font-[400]'>{rewards} $HTC in {duration}hrs</p>
        </div>
      </div>
      <button className={`text-[16px] leading-[20px] text-[#002681] font-[700] bg-white px-2 py-3 rounded-[8px] flex-none ${active ? 'bg-[#FEC001]' : ''} cursor-pointer`} onClick={onActivate}> Activate Me </button>
    </div>
  )
}

type BoostMeProps = {
  className?: string,
  active?: boolean,
  icon: any,
  label: string,
  rewards: number,
  duration: number,
  onActivate: any,
}
