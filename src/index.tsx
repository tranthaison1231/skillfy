import { createRoot } from 'react-dom/client'
import AboutUs from './components/AboutUs'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import Membership from './components/Membership'
import ReasonsToJoin from './components/ReasonsToJoin'
import TrainerStaff from './components/TrainerStaff'
import './style.css'

function App() {
  return (
    <div className="font-primary bg-transparent text-white">
      <Header />
      <div className="mt-56 px-56">
        <Banner />
      </div>
      <div className="mt-106 px-56">
        <ReasonsToJoin />
      </div>
      <div className="mt-62.5 px-56">
        <Membership />
      </div>
      <div className="mt-62.5 px-56">
        <AboutUs />
      </div>
      <div className="mt-62.5 px-56">
        <TrainerStaff />
      </div>
      <div className="mt-62.5">
        <Footer />
      </div>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))

root.render(<App />)
