import React from 'react'
import Model2 from '../spline/Model2';


const Contact = () => {


  return (
   
    <>
     <div id='Contact'> 
    <p  className='flex flex-col   mx-8 text-xl  mt-52'>Feel free to contact me if you have any questions or just want to connect with me.  </p>
    <div  className=' absolute max-h-screen  flex   flex-col md:flex-row     w-screen mt-4 md:justify-between  gap-5         '>
      
    <div className='mx-8  md:h-fit border-2  md:min-w-1/4   h-fit   justify-center  md:w-1/4 bg-[var(--bg)]     px-4 py-6'>
      <p className='md:text-4xl text-2xl font-[Poppins] mb-2'>Contact Me</p>
      <p className='text-base md:text-xl  mb-6'>Looking for a developer to bring your ideas to life?</p>
      <p className='text-base md:text-xl mb-2'>Your Name</p>
      <input type="text" placeholder='Enter your Name' className=' border bg-[#1e293b] w-full h-[3rem] px-4 mb-6 ' />
      <p className='text-base md:text-xl mb-2'>Your Email</p>
      <input type="text" placeholder='Enter your Email' className='border bg-[#1e293b] w-full px-4 py-3 mb-6' />
      <p className='text-base md:text-xl mb-2'>Your Message</p>
      <input type="message" placeholder='What do you want to say?' className='border bg-[#1e293b] w-full  flex flex-col  px-4  mb-4 h-[8rem] lg:h-[11rem]'/>
      <button className='neo-btn hover:text-black  hover:border-white duration-200 border px-4 py-2 '>Send</button>
    
    </div>
   
   
    <div className='relative scale-0      md:scale-145   '>

    <Model2   />
    </div>
    
   
   
     </div>
     </div>
    </>
  )
}

export default Contact
