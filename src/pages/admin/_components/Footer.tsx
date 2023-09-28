import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="flex items-center justify-between ml-4 mr-4 text-xs bg-white h-14">
      <div className="flex gap-4 ">
        <span>Privacy Policy</span>
        <span>Terms of Use</span>
      </div>
      <span>
        © 2021 Hope UI, Made with ❤ by{' '}
        <Link to="#" className="text-primary">
          IQONIC Design.
        </Link>
      </span>
    </div>
  )
}
