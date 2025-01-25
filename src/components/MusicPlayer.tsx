import MusicIcon from '@/assets/images/music.png'

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ className }) => {
  return (
    <div className={`w-[358px] h-[74px] bg-[#FF29C2] border rounded-[8px] border-[#A7A7CC] flex justify-center items-center px-2 py-4 gap-[68px] ${className}`}>
      <img src={MusicIcon} />
      <p className='text-[16px] font-[700]'> Coming Soon </p>
      <a className='text-[14px] leading-[18px] text-[#002681] bg-opacity-[59%] bg-white px-6 py-3 rounded-[8px]'> Play </a>
    </div>
  )
}

type MusicPlayerProps = {
  className?: string,
}
