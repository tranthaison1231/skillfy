import { Button } from '@/components/ui/Button'
import logo from '@/assets/svgs/logo.svg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-16 flex-auto">
        <img src={logo} alt="logo" />
        <ul className="flex gap-6 w-full items-center">
          <Link to="/">
            <li>Top offers</li>
          </Link>
          <Link to="/search">
            <li>Search in offers</li>
          </Link>
          <Link to="/#references">
            <li>References</li>
          </Link>
          <Link to="/#about-us">
            <li>About Us</li>
          </Link>
          <Link to="/#our-team">
            <li>Our Team</li>
          </Link>
        </ul>
      </div>

      <Button>Contact Us </Button>
    </div>
  )
}

export default Header
