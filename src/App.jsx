import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HeaderComponent from './components/header'
import FooterComponent from './components/footer'

import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <FooterComponent />
    </BrowserRouter>
  )
}

export default App