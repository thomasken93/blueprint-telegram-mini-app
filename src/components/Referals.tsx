import ManIcon from '@/assets/images/man.png'
import ShareIcon from '@/assets/svgs/share-2.svg'

export const Referals: React.FC<ReferalsProps> = ({ }) => {
  return (
    <div className="w-[358px] h-[169px] bg-gradient-to-b from-white to-[#A0BBFF] rounded-[12px] flex pl-4 pr-1 py-3 gap-[24px]">
      <div>
        <div className='ml-1'><ShareIcon /></div>
        <div className='flex mt-[8px]'>
          <p className='text-[40px] leading-[52px] text-[#002681] font-[700]'>24</p>
          <div className='flex flex-col gap-[6px] pt-[14px]'>
            <p className='text-[16px] leading-[20px] text-[#002681] font-[600]'>Total Referrals</p>
            <p className='text-[#FF29C2] text-[12px] leading-[14px] font-[700]'>+500 Hashtag per invite</p>
          </div>
        </div>
        <a className='inline-block text-[16px] font-[700] leading-[20px] px-[10px] py-2 bg-gradient-to-b from-[#212121] to-[#022B89] mt-[28px] ml-[32px] rounded-[8px]'>Copy Link</a>
      </div>
      <div className='flex flex-row'>
        <img src={ManIcon} className='rounded-[50%] self-end'/>
      </div>
    </div>
  )
}

type ReferalsProps = {
}
