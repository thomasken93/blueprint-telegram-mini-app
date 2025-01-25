import { useCallback, useState } from 'react';

type TabsProps = {
  width: string,
  options: {
    label: any,
  }[],
  onOptionChange: any,
}

const Tabs: React.FC<TabsProps> = ({ width, options, onOptionChange }) => {
  const [selected, setSelected] = useState(0);
  
  const onOptionClick = useCallback((option: number) => () => {
    console.log('component: ', option)
    setSelected(option);
    onOptionChange(option);
  }, [setSelected, onOptionChange])

  return (
    <div className={`flex gap-[10px] w-${width} rounded-[10px] bg-[#002681] border-[#A7A7CC] p-1`}>
      {options.map(({label}, index: number) => {
        return (
          <a className={`${selected == index ? 'bg-[#1B44A4] font-[700]' : 'text-[#080708] font-[400]'} text-white border-[#A7A7CC] font-[700] rounded-[10px] px-3 py-2 cursor-pointer`} onClick={onOptionClick(index)}>
            {label}
          </a>
        )
      })}
    </div>
  )
}

export { Tabs }
