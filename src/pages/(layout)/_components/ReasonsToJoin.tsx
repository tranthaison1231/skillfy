import line from '../assets/svgs/line.svg'
import fitnessZones from '../assets/svgs/fitness-zones.svg'
import equipment from '../assets/svgs/equipment.svg'
import time from '../assets/svgs/time.svg'
import { useEffect, useState } from 'react'
import { fetchReasons } from '@/apis/reasons'

const Icon = {
  line: line,
  'fitness-zones': fitnessZones,
  equipment: equipment,
  time: time
}

function Skeleton() {
  return new Array(4).fill(0).map((_, index) => (
    <li key={index} className="flex gap-2 animate-pulse">
      <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
      <div>
        <div className="w-20 h-4 bg-gray-300 rounded-full mb-3"></div>
        <div className="w-60 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </li>
  ))
}

export default function ReasonsToJoin() {
  const [reasons, setReasons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getReasons = async () => {
      try {
        setLoading(true)
        const data = await fetchReasons()
        setReasons(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    getReasons()
  }, [])

  return (
    <div>
      <h2 className="text-5xl mb-30"> Reasons to join </h2>
      <ul className="grid grid-cols-2 gap-y-20 gap-x-30">
        {loading ? (
          <Skeleton />
        ) : (
          reasons.map(reason => (
            <li key={reason.title} className="flex gap-2">
              <img src={Icon[reason.icon]} alt="" />
              <div>
                <h3 className="mb-3">{reason.title}</h3>
                <p>{reason.desc}</p>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}
