type ClaimRewardProps = {
  value: any
}

const ClaimReward: React.FC<ClaimRewardProps> = ({ value }) => {
  return (
    <div className="flex p-2 justify-between bg-white bg-opacity-[20%] rounded-[6px]">
      <div className="flex flex-col gap-1">
        <p className="text-[16px] leading-[16px] font-[700]"> {value.label} </p>
        <p className="text-[14px] leading-[14px] font-[400]"> Reward: +{value.reward} $HTC </p>
      </div>
      <a className="px-4 py-[6px] bg-white text-[#002681] font-[700] rounded-[8px]">Claim</a>
    </div>
  )
}

export { ClaimReward }
