"use client"
import Navbar from '@/components/Navbar';
import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import Image from 'next/image';

const TestPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className='flex items-center min-h-screen justify-center'>
        <div className='pill-box'>
          <h1 className='pill-text'>
            Software & Technology Enthusiast
          </h1>
        </div>
          <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>


        <Typewriter words={
          [
            "Software Engineer",
            "FullStack Developer",
            "Passionate learner",
            "Badminton Player",
            "Book Reader"
          ]
        }
        loop = {true}
        // typeSpeed={50}
        deleteSpeed={50}
        cursorBlinking={true}
        cursor
        
        />
      </div>

      <div>
        {/* <Image src={HeroBg} alt="bg" width={1000} height={1000}></Image> */}
      </div>
    </>
  )
}


// '/assets/hero-bg.svg'
export default TestPage