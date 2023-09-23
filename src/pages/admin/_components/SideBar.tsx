import Dashboard from '@/assets/svgs/dashboard.svg'
import Chervon from '@/assets/svgs/chervon.svg'
import menu from '@/assets/svgs/menu.svg'
import game from '@/assets/svgs/game.svg'
import authentication from '@/assets/svgs/athentication.svg'
import user from '@/assets/svgs/user.svg'
import boookmark from '@/assets/svgs/bookmark.svg'
import components from '@/assets/svgs/components.png'
import widgets from '@/assets/svgs/widgets.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [, setSelectedOption] = useState(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = option => {
    setSelectedOption(option)
  }
  return (
    <div className="w-1/5 h-screen px-8 py-2">
      <h1 className="text-[#ADB5BD] h-11 font font-semibold">Home</h1>
      <div className="hover:bg-[#3A57E8] pl-3 rounded-md w-60 hover:text-white flex h-11 items-center cursor-pointer gap-4">
        <img src={Dashboard} alt="dashboard" className="hover:text-white" />
        <h1 className="text-[#8A92A6]">Dashboard</h1>
      </div>
      <div className="hover:bg-[#3A57E8] pl-3 rounded-md w-60 flex h-11 cursor-pointer items-center gap-4">
        <img src={menu} alt="menu" />
        <h1 className="text-[#8A92A6]">Menu Styles</h1>
        <img src={Chervon} alt="chervon" className="ml-8" />
      </div>
      <div className="w-205 h-[1px] bg-[#E9ECEF]"></div>
      <h1 className="text-[#ADB5BD] h-11 font mt-4 font-semibold">Pages</h1>
      <div className="hover:bg-[#3A57E8] pl-3 rounded-md w-60 flex h-11 cursor-pointer items-center gap-4">
        <img src={game} alt="game" />
        <h1 className="text-[#8A92A6]">Special Pages</h1>
        <img src={Chervon} alt="chervon" className="ml-8" />
      </div>
      <div className="hover:bg-[#3A57E8] pl-3 rounded-md w-60 flex h-11 cursor-pointer items-center gap-4">
        <img src={authentication} alt="authentication" />
        <h1 className=" text-[#8A92A6]">Authentication</h1>
        <img src={Chervon} alt="chervon" className="ml-8" />
      </div>
      <div className="relative inline-block text-left">
        <div className="">
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex justify-between w-[241px] px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-[#3A57E8] shadow-sm focus:text-white focus:bg-[#3A57E8]"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded={isOpen}
          >
            <img src={user} alt="user" />
            <h1 className="text-[#ADB5BD]">Users</h1>
            <img src={Chervon} alt="chervon" className="ml-8" />
          </button>
        </div>
        {isOpen && (
          <div className="relative w-40 mt-1 ml-1 bg-white rounded-md shadow-lg left-14 ring-0 ring-black ring-opacity-5">
            <ul
              className="py-1 pl-2"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <li
                onClick={() => handleOptionClick('User Profile')}
                role="menuitem"
              >
                <Link
                  to="/admin/users"
                  className="px-4 py-2 text-sm hover:bg-[#3A57E8] rounded-md hover:text-white font-semibold flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-[#8A92A6] rounded-full focus:bg-white hover:bg-white"></div>
                  <span className="text-[#8A92A6]">User Profile</span>
                </Link>
              </li>
              <li
                onClick={() => handleOptionClick('User List')}
                role="menuitem"
              >
                <Link
                  to="/admin/user-list"
                  className="px-4 py-2 text-sm hover:bg-[#3A57E8] rounded-md hover:text-white font-semibold flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-[#8A92A6] rounded-full focus:bg-white hover:bg-white"></div>
                  <span className="text-[#8A92A6]">User List</span>
                </Link>
              </li>
              <li
                onClick={() => handleOptionClick('Edit User')}
                role="menuitem"
              >
                <Link
                  to="/admin/edit-user"
                  className="flex px-4 py-2 text-sm hover:bg-[#3A57E8] rounded-md hover:text-white font-semibold items-center gap-3 "
                >
                  <div className="w-2 h-2 bg-[#8A92A6] rounded-full focus:bg-white hover:bg-white"></div>
                  <span className="text-[#8A92A6]">Edit User</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="hover:bg-[#3A57E8] pl-3 rounded-md w-60 flex h-11 cursor-pointer items-center gap-4">
        <img src={boookmark} alt="bookmark" />
        <h1 className="text-[#8A92A6]">Utilities</h1>
        <img src={Chervon} alt="chervon" className="ml-8" />
      </div>
      <div className="w-205 h-[1px] bg-[#E9ECEF]"></div>
      <h1 className="text-[#ADB5BD] h-11 font mt-4 font-semibold">Elements</h1>
      <div className="hover:bg-[#3A57E8] pl-3 rounded-md w-60 flex h-11 cursor-pointer items-center gap-4">
        <img src={components} alt="game" />
        <h1 className="text-[#8A92A6]">Components</h1>
        <img src={Chervon} alt="chervon" className="ml-8" />
      </div>
      <div className="hover:bg-[#3A57E8] pl-3 rounded-md w-60 flex h-11 cursor-pointer items-center gap-4">
        <img src={widgets} alt="authentication" />
        <h1 className="text-[#8A92A6]">Components</h1>
        <img src={Chervon} alt="chervon" className="ml-8" />
      </div>
    </div>
  )
}
