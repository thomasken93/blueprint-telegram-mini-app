import { useCallback, useState } from 'react';

type SwitchProps = {
  width: string,
  options: {
    label: any,
  }[],
  onOptionChange: any,
}

const Switch: React.FC<SwitchProps> = ({ width, options, onOptionChange }) => {
  const [selected, setSelected] = useState(0);
  
  const onOptionClick = useCallback((option: number) => () => {
    console.log('component: ', option)
    setSelected(option);
    onOptionChange(option);
  }, [setSelected, onOptionChange])

  return (
    <div className={`flex gap-4 w-${width} rounded-[10px] bg-[#F4FDFF] border-[#A7A7CC]`}>
      {options.map(({label}, index: number) => {
        return (
          <a className={`${selected == index ? 'bg-[#080708] text-white' : 'bg-white text-[#080708]'} border-[#A7A7CC] font-[700] rounded-[10px] px-3 py-[9px]`} onClick={onOptionClick(index)}>
            {label}
          </a>
        )
      })}
    </div>
  )
}

export { Switch }
