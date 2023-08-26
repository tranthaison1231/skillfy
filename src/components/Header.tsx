import { Link } from 'react-router-dom'
import trainer from '../assets/images/trainer.png'

function Header() {
  return (
    <div className="relative">
      <div className="pt-10 flex justify-between px-56">
        <p>
          Gym<span className="text-primary">24 </span>
        </p>
        <ul className="flex gap-18.75">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/courses">
            <li>Course</li>
          </Link>
          <Link to="/search">
            <li>Search</li>
          </Link>
        </ul>
      </div>
      <div className="absolute -z-10 top-0 right-0 trainer-image">
        <img src={trainer} alt="trainer" />
      </div>
    </div>
  )
}

export default Header
