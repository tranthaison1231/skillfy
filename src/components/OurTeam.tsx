import React from 'react'
import AvatarUser from '@/assets/images/avatar-user.png'
import AvatarUser2 from '@/assets/images/avatar-user2.png'
import AvatarUser3 from '@/assets/images/avatar-user3.png'
import AvatarUser4 from '@/assets/images/avatar-user4.png'
import AvatarUser5 from '@/assets/images/avatar-user5.png'
const users = [
  {
    id: 1,
    name: 'Davis Carder',
    image: AvatarUser,
    desc: 'Super duper position'
  },
  {
    id: 2,
    name: 'Maren Press',
    image: AvatarUser2,
    desc: 'Super duper position'
  },
  {
    id: 3,
    name: 'Randy Rosser',
    image: AvatarUser3,
    desc: 'Super duper position'
  },
  {
    id: 4,
    name: 'Haylie Donin',
    image: AvatarUser4,
    desc: 'Super duper position'
  },
  {
    id: 5,
    name: 'Miracle Bator',
    image: AvatarUser5,
    desc: 'Super duper position'
  }
]

export default function OurTeam() {
  return (
    <div id="our-team" className="max-w-5xl mx-auto py-28">
      <div className="flex flex-row-reverse flex-wrap items-center justify-between gap-y-10">
        <div className="w-[30%]">
          <h1 className="text-5xl font-bold leading-loose">Our Team</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            rutrum donec ultricies cras id ac.
          </p>
        </div>
        {users.map(user => (
          <div
            key={user.id}
            className="w-[30%] flex justify-center border-lightgray border-[1px] rounded-sm shadow-xl"
          >
            <div className="py-5 font-medium text-center">
              <img src={user.image} alt="user" />
              <h2 className="mt-6 text-xl">{user.name}</h2>
              <p className="mt-1 text-lg text-primary">{user.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="relative left-[44%] top-9 h-4 w-28">
        <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-zinc-200" />
        <div className="w-4 h-4 left-[32px] top-0 absolute bg-zinc-200 rounded-full" />
        <div className="w-4 h-4 left-[64px] top-0 absolute bg-blue-900 rounded-full" />
        <div className="w-4 h-4 left-[96px] top-0 absolute bg-zinc-200 rounded-full" />
      </div>
    </div>
  )
}
