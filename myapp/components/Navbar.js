import React from 'react'
import Link from 'next/link'
import logo from "../public/logo.png"

const Navbar = () => {
  return (
    <header className='navbar bg-base-100'>
    <div className="flex-1">
      <a className="normal-case text-xl">Donut Shop</a>
    </div>
    <div className="flex-none">
    <ul className="menu menu-horizontal px-1 gap-4">
      <li><a className='btn btn-sm btn-outline'>Create </a></li>
      <li>
        <details>
          <summary>
            Options
          </summary>
          <ul className="p-2 bg-base-100">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
      <li className='btn btn-ghost btn-circle avatar border-white'>
        <div className='w-10 rounded-full'>
          <img
          src={logo}
          alt='logo'
          />
        </div>
      </li>
    </ul>
  </div>

    </header>
  )
}

export default Navbar