import React,{useState} from 'react';
import emailjs from '@emailjs/browser';


const Contactform = () => {

    

  const [form,setform] = useState({name:'',email:'',message:''});
  const [status,setstatus] = useState('');

   const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const sendemail = (e) => {
       
              
     e.preventDefault(); 

   
     
    

  
      emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ).then(() =>{
        setstatus('Message sent successfully!');
        setform({name:'',email:'',message:''});
      },
      (error)=>{
        console.error("Error while sending message",error);
        setstatus('Failed to send message.');
      }
    )
    };

  
    
    
  return (
     
    <div id='Contact' className=' md:justify-between  px-2  mb-10 items-center  flex   flex-row lg:flex-row  md:flex-col     mt-4  gap-5    '>
     
    
   <form  onSubmit={sendemail}   className='space-y-2 min-w-1/2 max-h-fit   md:h-fit w-full '>
     <p className='md:text-base lg:text-xl xl:text-xl text-base'>Enter your name here </p>
    <input 
    type="text"
    name="name"
    placeholder='Your Name'
    required
    value={form.name}
    onChange={handleChange}
    className='w-full p-2  border bg-[#1e293b] text-white'
    />
    <p className='md:text-base lg:text-xl xl:text-xl text-base'>Enter your email here </p>
    <input 
     type="email"
     name="email"
     placeholder='Your Email'
     required
     value={form.email}
     onChange={handleChange}
     className='w-full border p-2 bg-[#1e293b]  text-white'
    />
    <p className='md:text-base lg:text-xl xl:text-xl text-base'>Message</p>
    <textarea
     name='message'
     value={form.message}
     required
     onChange={handleChange}
     placeholder='What do you want to say'
     rows="5"
     className='w-full p-2 bg-[#1e293b] border'
     />
    <button type='submit'  className='btn-2 hover:text-black  hover:border-white duration-200 border px-4 py-2'> Send </button>
    {status && <p className={`text-base ${status.includes("success")? "text-green-600 ":"text-red-600"}`}>{status}</p>}
   
    </form>
     
     </div>
  )
}

export default Contactform;