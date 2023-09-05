import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="relative">
      <ul className="flex gap-18.75">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/search">
          <li>Search</li>
        </Link>
        <Link to="/#about-us">
          <li>About Us</li>
        </Link>
        <Link to="/#our-team">
          <li>Our Team</li>
        </Link>
      </ul>
    </div>
  )
}

export default Header
