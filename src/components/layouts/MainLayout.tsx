import React from 'react'
import ButtonBottom from '../ButtonBottom'
import { Earn, Miner, Boosters, Rank, Friends } from '../../icons'

import { Outlet } from 'react-router-dom'

type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#002379] to-[#3772FF] min-h-screen flex flex-col text-white">
      <div className="flex-grow overflow-y-auto pb-10">
        <Outlet />
      </div>
      <div className="fixed bottom-3 left-4 right-4 bg-[#022B8961] rounded-[10px] border-[#FEC001] border flex justify-around items-center z-50 text-xs py-[7.5px]">
        <ButtonBottom
          to="/earn"
          icon={<Earn className="w-8 h-8 mx-auto" />}
          label="Earn"
        />
        <ButtonBottom
          to="/miner"
          icon={<Miner className="w-8 h-8 mx-auto" />}
          label="Miner"
        />
        <ButtonBottom
          to="/boosters"
          icon={<Boosters className="w-8 h-8 mx-auto" />}
          label="Boosters"
        />
        <ButtonBottom
          to="/rank"
          icon={<Rank className="w-8 h-8 mx-auto" />}
          label="Rank"
        />
        <ButtonBottom
          to="/friends"
          icon={<Friends className="w-8 h-8 mx-auto" />}
          label="Friends"
        />
      </div>
    </div>
  )
}

export default MainLayout
