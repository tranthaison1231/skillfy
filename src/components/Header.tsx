import { Button } from '@/components/ui/Button'
import logo from '@/assets/svgs/logo.svg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-auto gap-16">
        <img src={logo} alt="logo" />
        <ul className="flex items-center w-full gap-6">
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
      <Link to="/login">
        <Button> Login </Button>
      </Link>
    </div>
  )
}

export default Header
