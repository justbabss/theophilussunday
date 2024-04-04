import React from 'react'
import profilepic from '../assets/home-image.png'
import { TypeAnimation } from 'react-type-animation';



const Home = () => {
  return (
    <div className=' max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-middle'>

      <div className=' flex-col my-auto md:mx-0 mx-[2rem]'> 
      <p className=' md:text-5xl sm:text-4xl text-3xl font-bold text-gray-200'>Theophilus Sunday</p>
      <h1 className=' md:text-4xl sm:text-3xl text-2xl font-bold md:py-0'>
        <TypeAnimation
        sequence={[
          "Minister",
          1000,
          "Preacher",
          1000,
          "Artist",
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        />
       </h1>
       <div className=' flex justify-center items-center'>
        <p className=' md:text-[1.1rem] sm:text-[1.1rem] text-[1.1rem] font-semibold text-white'>A mandate to make men one with God through the ministry of worship, prayer, and the word.</p>
       </div>
      </div>

      <div className=' my-auto mt-[1rem]'>
      <img
          className='w-[300px] sm:w-[812px] mx-auto h-auto'
          src={profilepic}
          alt='Home'
        />
      </div>

    </div>
  );
};
export default Home
