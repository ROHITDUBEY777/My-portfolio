import React, { useState } from "react";
import Image from "../assets/full-stack.png";

const Contact = () => {
  return (
    <>
      <div id="Contact">
        {/* <p id="Contact" className="flex flex-col    mx-8 text-xl  mt-52">
          Feel free to contact me if you have any questions or just want to
          connect with me.{" "}
        </p> */}
        <div className="   md:justify-between px-10  mb-10 items-center  flex   flex-col md:flex-row     mt-4  gap-5         ">
          <div className=" md:h-fit   md:min-w-1/3 rounded-2xl   h-fit bg-gradient-to-r from-zinc-900 to-zinc-900 justify-center  md:w-1/4 bg-[var(--bg)] px-4 py-6">
            <p className="text-[var(--foreground)]  md:text-5xl text-4xl font-[Poppins] mb-2">
              Contact Me
            </p>
            <p className="text-base md:text-xl  mb-6">
              Looking for a developer to bring your ideas to life?
            </p>
            <p className="text-base md:text-xl mb-2">Your Name</p>
            <input
              type="text"
              placeholder="Enter your Name"
              className=" border bg-[#1e293b] w-full h-[3rem] px-4 mb-6 "
            />
            <p className="text-base md:text-xl mb-2">Your Email</p>
            <input
              type="text"
              placeholder="Enter your Email"
              className="border bg-[#1e293b] w-full px-4 py-3 mb-6"
            />
            <p className="text-base md:text-xl mb-2">Your Message</p>
            <input
              type="message"
              placeholder="What do you want to say?"
              className="border bg-[#1e293b] w-full  flex flex-col  px-4  mb-4 h-[8rem] lg:h-[11rem]"
            />
            <button className="btn-2 hover:text-black  hover:border-white duration-200 border px-4 py-2 ">
              Send
            </button>
          </div>

          <div className="">
            <img src={Image} alt="" className=" w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     try {
//       const res = await fetch("http://localhost:5000/send", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await res.json();
//       if (result.success) {
//         setStatus("Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" }); // Reset form
//       } else {
//         setStatus("Failed to send message.");
//       }
//     } catch (err) {
//       console.error(err);
//       setStatus("Something went wrong.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//       <label>
//         Your Name
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           placeholder="Enter your Name"
//           className="w-full bg-slate-800 text-white p-2 border border-gray-400"
//         />
//       </label>

//       <label>
//         Your Email
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           placeholder="Enter your Email"
//           className="w-full bg-slate-800 text-white p-2 border border-gray-400"
//         />
//       </label>

//       <label>
//         Your Message
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//           placeholder="What do you want to say?"
//           className="w-full bg-slate-800 text-white p-2 border border-gray-400 min-h-[100px]"
//         ></textarea>
//       </label>

//       <button
//         type="submit"
//         className="px-4 py-2 border text-white hover:bg-white hover:text-black transition-all"
//       >
//         Send
//       </button>

//       {status && <p className="text-sm text-center mt-2">{status}</p>}
//     </form>
//   );
// };

// export default ContactForm;
export default Contact;
