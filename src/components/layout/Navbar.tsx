import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#EBF1FF] h-20 flex items-center justify-between px-20'>
        <Link href={'/'} className='text-3xl hover:text-[#3F465C]'>My Shop Manager</Link>
        <div className='flex space-x-2 text-lg'>
          <p>option1</p>
          <p>options2</p>
        </div>
        <div className='flex items-center space-x-2 text-lg'>
          {/* Add animations of filling when hover */}
          <Link href={'/login'} className='py-2 px-5 rounded-2xl border border-[#8990A8]'>log in</Link>
          <Link href={'/register'} className='bg-black text-white py-2 px-4 rounded-2xl'>Register</Link>
        </div>
    </div>
  )
}

export default Navbar