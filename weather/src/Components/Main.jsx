import React from 'react'
import Navbar from './Navbar'
import Forcast from './Forcast'
import Marquee from './Marquee'

export default function Main() {
  return (
    <div className='px-6'>
        <Navbar/>
        <Marquee/>
        <Forcast/>
    </div>
  )
}
