import MusicIcon from '@/assets/images/music.png'

const formatNumberAsThousands = (number: number) => {
  return new Intl.NumberFormat('en-US').format(number);
};

export const UserRanking: React.FC<UserRankingProps> = ({ icon, name, balance, ranking, className }) => {
  return (
    <div className={`w-[358px] h-[74px] bg-[#FF29C2] border rounded-[8px] border-[#A7A7CC] flex justify-center items-center px-2 py-4 gap-[0px] ${className}`}>
      <div className='flex grow gap-[10px]'>
        <img src={icon} className='w-[40px] h-[40px] object-contain'/>
        <div className='flex flex-col gap-1'>
          <p className='text-[16px] leading-[18px] font-[400]'>{name}</p>
          <p className='text-[16px] leading-[18px] font-[400]'>{formatNumberAsThousands(balance)} Hashtags</p>
        </div>
      </div>
      <p className='text-[16px] leading-[20px] text-white font-[700] flex-none'> #{ranking} </p>
    </div>
  )
}

type UserRankingProps = {
  className?: string,
  icon: any,
  name: string,
  balance: number,
  ranking: number,
}
