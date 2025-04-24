import pass from '../assets/pass.webp';
import Weather from '../assets/weatherlogo.jpg'

export  const  projects = [ 
    {
     id:1,
     projname:"TextUtils-Website",
     progdesc:"TextUtils is a modern, lightweight, and user-friendly text utility web application built with React. Designed to simplify and speed up everyday text processing tasks, TextUtils empowers users to transform, analyze, and manage their text content with ease.",
     github:"https://github.com/ROHITDUBEY777/TextUtils-",
     backgroundUrl:null,
                
    },
    {
     id:2,
     projname:"WeatherApi",
     progdesc:"Weatherly is a simple, responsive web application that allows users to check the current weather conditions for any city around the world. It fetches real-time weather data using a public API (like OpenWeatherMap) and presents it in a clean, intuitive user interface.",
     backgroundUrl:Weather,
     github:"https://github.com/ROHITDUBEY777/WeatherApi",
    
    },
    {
     id:3,
     projname:"Random-Pass Generator",
     progdesc:"Random Password Generator is a lightweight, fast, and easy-to-use web application built using HTML, CSS, and JavaScript. It allows users to instantly generate strong, random passwords based on selected criteria, making it a handy tool for improving online security and personal password management.",
     github:"https://github.com/ROHITDUBEY777/Random-Password-Generator-",
     backgroundUrl:pass,
    }
]
export default projects;