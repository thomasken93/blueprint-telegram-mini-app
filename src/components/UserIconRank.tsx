import { useMemo } from "react";
import CoinIcon from '@/assets/images/ninja coin.png'

const formatNumberAsThousands = (number: number) => {
  return new Intl.NumberFormat('en-US').format(number);
};


export const UserIconRank: React.FC<UserIconRankProps> = ({ ranking, color, icon, name, balance, size }) => {
  const iconSize = useMemo(() => {
    switch(size) {
      case 'sm':
        return '60px';
      case 'md':
        return '80px';
    }
  }, [size])

  return (
    <div>
      <div className={`relative flex justify-center`}>
        <img src={icon} className="rounded-[50%] border-4" width={iconSize} height={iconSize} style={{ borderColor: color }}/>
        <div className={`w-[20px] h-[20px] absolute bottom-[-10px] rounded-[10px] flex items-center justify-center`} style={{ backgroundColor: color, left: "calc(50% - 10px)" }}>{ranking}</div>
      </div>
      <p className="mt-3 text-[14px] leading-[16px] text-center">{name}</p>
      <div className="mt-[2px] text-[14px] leading-[16px] flex gap-[2px] justify-center"><img src={CoinIcon}/>{formatNumberAsThousands(balance)}</div>
    </div>
  );
}

type UserIconRankProps = {
  ranking: number,
  color: string,
  icon: string,
  name: string,
  balance: number,
  size: 'md' | 'sm'
}