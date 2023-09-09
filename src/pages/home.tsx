import useScrollWhenHashChange from '@/hooks/useScrollWhenHashChange'
import Welcome from '@/components/Welcome'

export default function Home() {
  useScrollWhenHashChange()

  return (
    <div>
      <Welcome className="mt-16" />
      <div style={{ height: 800 }} id="about-us">
        About US
      </div>
      <div style={{ height: 800 }} id="our-team">
        Our Team
      </div>
    </div>
  )
}
