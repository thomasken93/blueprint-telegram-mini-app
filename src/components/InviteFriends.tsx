import WebApp from '@twa-dev/sdk'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/hook'
import { fetchFriendById, selectFriends } from '@/app/slice/friendSlice'
import duckCoin from '@/assets/images/a56.gif'

import { preProcessUrl } from '@/helpers/image'
import FriendItem from './FriendItem'

const InviteFriends: React.FC = () => {
  const userId = WebApp.initDataUnsafe?.user?.id ?? null
  const dispatch = useAppDispatch()
  const friends = useAppSelector(selectFriends)

  useEffect(() => {
    if (userId && !friends) {
      dispatch(fetchFriendById(userId))
    }
  }, [userId, friends, dispatch])

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.onEvent('web_app_open_tg_link', handleOpenTgLink)
    }

    return () => {
      if (window.Telegram?.WebApp) {
        window.Telegram.WebApp.offEvent(
          'web_app_open_tg_link',
          handleOpenTgLink,
        )
      }
    }
  }, [])

  // Format share of telegram
  // https://t.me/share/url?url={url}&text={text}

  const handleOpenTgLink = () => {
    const url = `https://t.me/Duck_01_bot/?start=${userId}`
    const text = 'whoisDucks'
    window.Telegram.WebApp.openTelegramLink(
      `https://t.me/share/url?url=${url}&text=${text}`,
    )
  }
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <div className="text-center p-4">
        <h1 className="text-2xl font-bold">Invited friends</h1>
        <p className="text-xl mt-1">and get more DUCKS</p>
        <div className="my-2 mt-3">
          <img src={duckCoin} alt="DUCKS" className="mx-auto w-[90%] " />
        </div>
      </div>

      <div className="flex-grow p-4 overflow-y-auto ">
        <h2 className="text-lg font-bold mb-4">
          {friends?.length ?? 0} friends
        </h2>
        {friends?.map((friend, index) => (
          <FriendItem
            key={index}
            avatar={friend?.avatarPath ? preProcessUrl(friend.avatarPath) : ''}
            name={friend.username}
            point={friend.scoreEarned}
          />
        ))}
        <div className="h-20"></div>
      </div>

      <div className="fixed bottom-12 left-0 w-full p-5 z-50 bg-black">
        <button
          className="w-full p-3 bg-white rounded-full text-black"
          onClick={handleOpenTgLink}>
          Invite friend
        </button>
      </div>
    </div>
  )
}

export default InviteFriends
