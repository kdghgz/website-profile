import { Link } from 'react-router-dom'

function HeaderComponent() {
  return (
    <header>
      <nav>
        <Link to="/">Beranda</Link>
        <Link to="/about">Tentang</Link>
        <Link to="/gallery">Galeri</Link>
        <Link to="/contact">Kontak</Link>
      </nav>
    </header>
  )
}

export default HeaderComponent