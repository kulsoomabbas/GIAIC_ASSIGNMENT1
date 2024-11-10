import React from 'react'

function page() {
  return (
    <div className='flex justify-between mr-10  '>
      <div  className='w-[700px] h-screen bg-cover' style={{backgroundImage:"url('/image/img.png')"}}>
      </div>
      <div className='w-[450px] mt-20'>
        <h1 className='font-extrabold text-[60px] mt-5 '>Math <br />lesson</h1>
        <p className='mt-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eveniet non rem doloremque nobis voluptas voluptates porro facere ad obcaecati illo, reiciendis recusandae aliquam. Rem libero deleniti animi asperiores vero!</p>
        <button className='mt-5 bg-pink-500 px-3 py-2 border rounded-none ml-28'>Get started now!</button>
      </div>
    </div>
  )
}

export default page
