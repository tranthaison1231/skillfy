import React from 'react'
import Background from '@/assets/images/bg-circle-2.png'
import Logo1 from '@/assets/svgs/logo-1.svg'
import Success from '@/assets/icons/success.png'
import bgLogo from '@/assets/images/bg-logo.png'
import { Button } from '@/components/ui/Button'
import { Link } from '@/router'
export default function email() {
  return (
    <div className="relative flex items-center justify-between h-screen">
      <div className="z-0 opacity-70">
        <img
          src={bgLogo}
          alt="backgroundColor"
          className="absolute top-0 w-500 h-400 left-[29%]"
        />
      </div>
      <div className="flex flex-col items-center justify-center m-auto w-[50%]">
        <div className="flex flex-col items-center justify-center m-auto ">
          <div className="flex gap-2 mb-10 mr-auto">
            <img src={Logo1} alt="logo-1" />
            <div className="text-4xl font-normal leading-10 text-slate-800">
              Hope Ui
            </div>
          </div>
          <img src={Success} alt="Success" className="flex w-86 h-90 " />
          <h1 className="text-blue-800 text-[64px] font-bold ">Success !</h1>
          <p className="w-[490px] text-center text-slate-800 mb-7">
            A email has been send to your email@domain.com. Please check for an
            email from company and click on the included link to reset your
            password.
          </p>
          <Link to="/">
            <Button className="w-48" type="button">
              Back to home
            </Button>
          </Link>
        </div>
      </div>
      <div className="z-20 relative w-[50%] h-screen bg-gradient-to-br from-blue-500 to-blue-900 ">
        <img
          className="absolute w-1000 top-[-80px] h-screen m-0 opacity-10 right 0"
          src={Background}
          alt="background"
        />
      </div>
    </div>
  )
}
