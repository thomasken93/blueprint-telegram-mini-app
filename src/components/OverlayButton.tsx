type ButtonProps = {
  onClick?: any,
  label: any,
  width?: string,
  overlay?: boolean,
}

const OverlayButton: React.FC<ButtonProps> = ({ onClick, label, width, overlay = true }) => {
  return (
    <div className="relative">
      <a className={`relative bg-[#080708] border-[#A7A7CC] p-[10px] rounded-[10px] ${width ? `w-[${width}]` : ''} flex justify-center items-center z-10`} onClick={onClick}>
        {label}
      </a>
      {overlay && <a className={`absolute bottom-[-2px] right-[-2px] bg-[#00675E] border-[#A7A7CC] p-[10px] rounded-[10px] ${width ? `w-[${width}]` : ''} flex justify-center items-center z-0`} onClick={onClick}>
        {label}
      </a>}
    </div>
  )
}

export { OverlayButton }
