export const BoostModal: React.FC<BoostModalProps> = ({ data, open, onClose, onBoostWithHTC, onBoostWithTon}) => {
  return (
    <div className={`fixed left-0 right-0 bottom-0 h-[388px] bg-[#080708] z-[100] rounded-[10px] ${open ? 'block' : 'hidden'}`}>
      <div className="relative w-full h-full px-[24px] pt-[36px] pb-[24px]">
        <a className="absolute top-[12px] right-[32px] rounded-[50%] w-[36px] h-[36px] flex justify-center items-center cursor-pointer bg-white text-[#002681]" onClick={onClose}>X</a>
        <p className="w-full text-center text-[24px] font-[700] leading-[30px]">{data.label}</p>
        <p className="w-full text-[20px] leading-[24px] font-[400]"> Activate {data.label} to Increase your farming rate and earn more rewards. Instantly earn {data.reward} $HTC every {data.duration}hrs.</p>
        <div className="absolute bottom-[24px] left-0 flex flex-col gap-[18px] items-center w-full">
          <button className="bg-[#6E6EFF] rounded-[8px] text-center py-[14px] w-[295px]" onClick={onBoostWithHTC}> Boost with 50,000 $HTC </button>
          <button className="bg-[#002681] rounded-[8px] text-center py-[14px] w-[295px]" onClick={onBoostWithTon}> Boost with 0.2 TON </button>
        </div>
      </div>
    </div>
  )
}

type BoostModalProps = {
  className?: string,
  data: any,
  open: boolean,
  onClose: any,
  onBoostWithHTC: any,
  onBoostWithTon: any,
}