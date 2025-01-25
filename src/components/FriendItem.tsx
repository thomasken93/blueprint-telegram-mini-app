import React from 'react'

type FriendItemProps = {
  avatar?: string
  name: string
  point: number
}

const FriendItem: React.FC<FriendItemProps> = ({ avatar, name, point }) => {
  return (
    <div className="flex justify-between  items-center mb-3">
      <div className="flex  items-center">
        <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white mr-3 ">
          {avatar ? (
            <img src={avatar} className="rounded-full" />
          ) : (
            name.slice(0, 2).toUpperCase()
          )}
        </div>
        <span>{name}</span>
      </div>
      <span className=""> {point} DUCKS</span>
    </div>
  )
}

export default FriendItem
