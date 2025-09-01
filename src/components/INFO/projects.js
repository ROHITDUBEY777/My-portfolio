// import pass from '../assets/pass.webp';
// import Weather from '../assets/weatherlogo.jpg'
import Dandoo from "../assets/Dandoo.png"
import chatbotimg from "../assets/chatbot.png"
import password from "../assets/password.png"
import weather from  "../assets/weather.png"
import textutils from "../assets/textutils.png"

export  const  projectsobj = [ 
    {
     id:1,
     projname:"Dandoo",
    backgroundUrl:Dandoo,
     progdesc:"A cool and minimal website for blogging, distraction free. Built using MERN stack with JWT authentication. Also has a cool landing page.",
     livelink:"https://dandooo.netlify.app/",
     github:"https://github.com/dandoo-web/dandoo-landing-page",
     
    },
    {
        id:2,
        projname:"Chatbot",
        backgroundUrl:chatbotimg,
        progdesc:"An AI-powered chatbot that delivers real-time, human-like conversations with a sleek, modern UI. Built using advanced NLP to answer queries and assist users seamlessly.  ",
        github:"",
        livelink:"https://chatbot-ai-smoky.vercel.app/"
    },
    {
     id:3,
     projname:"WeatherApi",
     progdesc:"Weatherly is a simple, responsive web application that allows users to check the current weather conditions for any city around the world. It fetches real-time weather data using a public API (like OpenWeatherMap) and presents it in a clean, intuitive user interface.",
     backgroundUrl:password,
     github:"https://github.com/ROHITDUBEY777/WeatherApi",
     livelink:""
    
    },
    {
     id:4,
     projname:"Random-Pass Generator",
     progdesc:"Random Password Generator is a lightweight, fast, and easy-to-use web application built using HTML, CSS, and JavaScript. It allows users to instantly generate strong, random passwords based on selected criteria, making it a handy tool for improving online security and personal password management.",
     github:"https://github.com/ROHITDUBEY777/Random-Password-Generator-",
     livelink:"",
     backgroundUrl:weather
    },
     
      {
     id:5,
     projname:"TextUtils Website ",
     progdesc:"TextUtils is a modern, lightweight, and user-friendly text utility web application built with React. Designed to simplify and speed up everyday text processing tasks, TextUtils empowers users to transform, analyze, and manage their text content with ease.",
     github:"https://github.com/ROHITDUBEY777/TextUtils-",
     livelink:"",
     backgroundUrl:textutils
                
    }
]
   

export default projectsobj;