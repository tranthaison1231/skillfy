import trainer from '../assets/images/trainer.png'

function Header() {
  return (
    <div className="relative">
      <div className="pt-10 flex justify-between px-56">
        <p>
          Gym<span className="text-primary">24 </span>
        </p>
        <ul className="flex gap-18.75">
          <li>Advantages</li>
          <li>Membership</li>
          <li>About</li>
          <li>Trainers</li>
        </ul>
      </div>
      <div className="absolute -z-10 top-0 right-0 trainer-image">
        <img src={trainer} alt="trainer" />
      </div>
    </div>
  )
}

export default Header
