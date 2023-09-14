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
      <div style={{ height: 500, marginTop: '60px' }} id="about-us">
        <AboutUs />
      </div>
      <div style={{ height: 750, marginTop: '30px' }} id="our-team">
        <OurTeam></OurTeam>
      </div>
      <div style={{ height: 550, marginTop: '30px' }} id="our-team">
        <References></References>
      </div>
    </div>
  )
}

export default Home
