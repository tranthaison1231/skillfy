import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [hash])

  return (
    <div>
      <div style={{ height: 800 }}>Home</div>
      <div style={{ height: 800 }} id="about-us">
        About US
      </div>
      <div style={{ height: 800 }} id="our-team">
        Our Team
      </div>
    </div>
  )
}
