import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#D5E3FF] w-full h-100 flex justify-center gap-10'>
        <img src="/Oregon.png" alt="Logo of the app" />
        <div className='flex flex-col justify-center space-y-5'>
            <h1 className='text-5xl font-medium'>Welcome to My Shop Manager</h1>
            <div>
              <p>
                Do you own a electronics repair store?
              </p>
              <p>
                Here you can manage your own repair store for free.
              </p>
              <p>
                Manage employees, keep track of payments, repairs and much more.
              </p>
            </div>

            <Link href={'/register'} className='text-xl text-white bg-[#1E78D6] hover:bg-[#005FB0] w-max px-3 py-1.5 rounded-lg '>Register now</Link>
        </div>
    </div>
  )
}

export default Hero