import React from 'react'
import myresume from '../assets/RohitDubeyResume.pdf'

export default function Resume() {
  return (
    <div className='flex flex-col items-center  mx-8 py-52 '>
      <p className='md:text-5xl text-4xl flex flex-col text-[var(--foreground)] font-bold  font-[Poppins]'>My Resume</p>
      <p className='text-base text-center mt-4'> Here's a detailed version of my skills. Please click the button below to download my full resume.  </p>
      <a target='_blank' href={myresume}><button  className='shadow-2xl  block border-3  duration-400 hover:-translate-y-2 hover:shadow-cyan-500/40  border-white  transition-all   hover:text-black hover:bg-cyan-400  cursor-pointer text-3xl font-[Poppins] mt-4 max-w-fit px-4 py-2 min-w-1/5  h-16'>Resume</button></a>
      {/* <button className='class="neo-btn w-2/3 h-14  mx-auto xl:mx-0 xl:my-10 xl:w-60 xl:h-[68px] xl:mb-16 xl:h-[5rem] 2xl:w-[18rem] 2xl:text-xl'>My Resume</button> */}

    </div>
  )
}

