import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QuoteProvider } from './context/QuoteContext'
import { QuoteModal } from './components/QuoteModal'
import { ScrollToTop } from './components/ScrollToTop'
import { LandingPage } from './pages/LandingPage'
import { MenuPage } from './pages/MenuPage'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <QuoteProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cardapio/:slug" element={<MenuPage />} />
        </Routes>
        <QuoteModal />
      </QuoteProvider>
    </BrowserRouter>
  )
}
