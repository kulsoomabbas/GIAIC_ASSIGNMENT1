import React from 'react'
import Link from 'next/link'
function Header() {
    return (
        <div className='flex justify-between mt-10 text-pink-500  text-[20px]'>
            <div className='ml-14 font-bold'>
                <h1>LOGO</h1>
            </div>
        <div className='mr-20'>
                <Link href="/" className='mx-10'>Home</Link>
                <Link href="/contact"className='mx-10'>Contact us </Link>
                <Link href="/stater"className='mx-10'>Get started</Link>
                <Link href="/about"className='mx-10'>About us</Link>
                <button className='ml-32 bg-pink-500 text-white px-5 py-1 bordeer rounded-xl'>
                    sign in
                </button>
            </div>
        </div>
    )
}
export default Header
