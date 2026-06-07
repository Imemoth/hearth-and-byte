import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Akadalymentesites from './pages/Akadalymentesites'
import Arlista from './pages/Arlista'
import Kapcsolat from './pages/Kapcsolat'
import Chatbot from './pages/Chatbot'
import Honlap from './pages/Honlap'
import { useTheme } from './hooks/useTheme'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  useTheme()
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/akadalymentesites" element={<Akadalymentesites />} />
          <Route path="/arlista" element={<Arlista />} />
          <Route path="/kapcsolat" element={<Kapcsolat />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/honlap" element={<Honlap />} />
        </Route>
      </Routes>
    </>
  )
}
