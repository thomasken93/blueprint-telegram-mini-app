import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import MainLayout from '@/components/layouts/MainLayout'

import { THEME, TonConnectUIProvider } from '@tonconnect/ui-react'
import {
  AnniversaryPage,
  HomePage,
  InviteFriendPage,
  LeaderboardPage,
  RewardPage,
  BuyHTC,
  Earn,
  Boosters,
} from '@/pages'

function App() {
  return (
    <TonConnectUIProvider
      manifestUrl="https://ducktma.netlify.app/tonconnect-manifest.json"
      uiPreferences={{ theme: THEME.DARK }}
      actionsConfiguration={{
        twaReturnUrl: 'https://t.me/Duck_01_bot/DuckMeme',
      }}>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/invite" element={<InviteFriendPage />} />
            <Route path="/buyhtc" element={<BuyHTC />} />
            <Route path="/earn" element={<Earn />} />
            <Route path="/boosters" element={<Boosters />} />
          </Route>

          <Route path="/anniversary" element={<AnniversaryPage />} />
          <Route path="/reward" element={<RewardPage />} />
        </Routes>
      </Router>
    </TonConnectUIProvider>
  )
}

export default App
