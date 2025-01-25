import { useState } from 'react'
import staticLogo1 from '../assets/images/duck_static.png'
import gifLogo from '../assets/images/a56.gif'

export const Content = ({ point = 0 }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const handleClick = () => {
    setIsPlaying(true)
  }

  return (
    <div className="flex flex-col items-center justify-center text-white mt-16">
      <img
        src={isPlaying ? gifLogo : staticLogo1}
        alt="Duck"
        className="w-32 h-32 mb-4 cursor-pointer"
        onClick={handleClick}
      />
      <h1 className="text-4xl font-bold">{point} DUCK</h1>
    </div>
  )
}

export default Content
