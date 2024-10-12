import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    // <>
    // <nav className='bg-emerald-950  flex py-5 px-10 item-center justify-between'>
    //   <h2 className='text-2xl'>krishna</h2>
    //   <div className='flex gap-8 item-center'>

    //   <h4 className='text-xl'>About</h4>
    //   <h4 className='text-xl'>Contact</h4>
    //   <h4 className='text-xl'>services</h4>
    //   <h4 className='text-xl'>Your Account</h4>
    //   </ div>
    // </nav>
    
    // </>

    <>
    <nav className='bg-emerald-600  flex py-7 px-10 item-center text-wjite justify-between'>
      <h2 className='text-2xl'>krishna <input className='text-black' type="text" /></h2>
      <div className='flex gap-8 item-center'>
        {/* <a className='text-xl' href="/">Home</a>
        <a className='text-xl' href="/about">About</a>
        <a className='text-xl' href="/contact">Contact</a>
        <a className='text-xl' href="/product">Product</a> */}
        
        <Link to='/' >Home</Link>
        <Link to='/about' >About</Link>
        <Link to='/contact' >Contact</Link>
        <Link to='/product' >Product</Link>

      </ div>
    </nav>
    
    </>
  )
}

export default Header