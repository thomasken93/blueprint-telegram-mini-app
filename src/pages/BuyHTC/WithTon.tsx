import { OverlayButton } from "@/components/OverlayButton";

export const WithTon = ({}) => {
  return (
    <div className="pl-[46px] pr-[32px]">
      <div className="flex gap-[14px] flex-col">
        <div className="">
          <p className="ml-[6px] text-[16px] leading-[24px] mb-[8px]"> Enter amount in TON </p>
          <div className="flex justify-center align-center p-4 bg-white rounded-[10px]">
            <input className="w-[85%]" />
            <p className="flex-end text-black">TON</p>
          </div>
        </div>
        <div className="">
          <p className="ml-[6px] text-[16px] leading-[24px] mb-[8px]"> Amount in $HTC </p>
          <div className="flex justify-center align-center p-4 bg-white rounded-[10px]">
            <input className="w-full" />
            <p className="flex-end text-black">$HTC</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[42px]">
        <OverlayButton label="BUY" overlay={false} width="172px"/>
      </div>
    </div>
  );
}