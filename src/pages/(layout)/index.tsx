import useScrollWhenHashChange from '@/hooks/useScrollWhenHashChange'
import Welcome from '@/components/Welcome'
import AboutUs from '@/components/AboutUs'
import OurTeam from '@/components/OurTeam'
import References from '@/components/References'
function Home() {
  useScrollWhenHashChange()

  return (
    <div>
      <Welcome className="mt-16" />
      <div className="mt-16 mb-9 md:h-500 h-850" id="about-us">
        <AboutUs />
      </div>
      <div className="h-[2100px] sm:h-1150 md:h-750" id="our-team">
        <OurTeam></OurTeam>
      </div>
      <div className="mt-8 sm:h-800 md:h-570 h-900" id="references">
        <References></References>
      </div>
    </div>
  )
}

export default Home
