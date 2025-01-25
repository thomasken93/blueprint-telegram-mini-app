import React from 'react'

type UserCardProps = {
  rank: number
  name: string
  point: number
  isUserCard?: boolean
  avatar?: string
}

const UserCard: React.FC<UserCardProps> = ({
  rank,
  name,
  point,
  isUserCard = false,
  avatar,
}) => {
  return (
    <div
      className={`flex items-center justify-between bg-gray-800 p-2 rounded-lg mb-2 ${
        isUserCard ? 'mb-4' : 'mb-2'
      }`}>
      <div className="flex items-center">
        <div className="bg-amber-950 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-2">
          {avatar ? (
            <img src={avatar} className="rounded-full" />
          ) : (
            name.slice(0, 2).toUpperCase()
          )}
        </div>
        <div>
          <p className="font-bold">{name}</p>
          {!isUserCard && (
            <p className="text-gray-400">{point.toLocaleString()} DUCKS</p>
          )}
        </div>
      </div>
      {isUserCard ? (
        <p className="text-xm font-bold">#{rank} </p>
      ) : (
        <div
          className={`${
            rank === 1
              ? 'text-3xl text-yellow-500'
              : rank === 2
              ? 'text-3xl text-gray-400'
              : rank === 3
              ? 'text-3xl text-brown-500'
              : 'text-xm text-white'
          }`}>
          {rank === 1 && '🥇'}
          {rank === 2 && '🥈'}
          {rank === 3 && '🥉'}
          {rank && rank > 3 && `#${rank}`}
        </div>
      )}
    </div>
  )
}

export default React.memo(UserCard)
