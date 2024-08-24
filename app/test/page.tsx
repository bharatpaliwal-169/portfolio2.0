"use client"
import Navbar from '@/components/Navbar';
import { useTheme } from 'next-themes';
import { experience } from '@/constants/resume';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { BriefcaseIcon } from '@heroicons/react/24/outline';

const TestPage = () => {
  const { theme } = useTheme();
  return (
    <>
      <Navbar></Navbar>
      <section className='grid grid-cols-1 md:grid-cols-12 items-center'>
          <div className="col-span-12 p-4 text-balance text-center ">
            <h1 className="font-bold text-lg ">Work Experience</h1>
            <p className="p-2">I have total working experience of 3+ years</p>
          </div>
          <div className='m-4 p-2 col-span-10 col-start-2 items-center justify-center border border-pink-900'>
            <VerticalTimeline 
              lineColor='#6D6D6D'
              layout='2-columns'
              animate={true}
            >
              <div>
                {
                  experience.map((item,index) => {
                    return(
                      <>
                        <VerticalTimelineElement key = {index}
                        position='left'
                            date={item.startDate}
                            className="vertical-timeline-element--work"
                            contentStyle={{
                              display: "flex",
                              flexDirection: "column",
                              background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                              boxShadow: "none",
                              border: "2px solid rgba(0, 0, 0, 0.05)",
                              textAlign: "left",
                              padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                              borderRight:
                                theme === "light"
                                  ? "0.4rem solid #9ca3af"
                                  : "0.4rem solid rgba(255, 255, 255, 0.5)",
                            }}
                            iconStyle={{
                              background: theme === "light" ? "white" : "#6D6D6D",
                              fontSize: "1.5rem",
                            }}
                            icon={
                              <BriefcaseIcon className='h-12 w-12'/>
                            }
                            visible={true}
                            >
                          
                            <h3 className='font-bold text-md text-brand-dark dark:text-brand-white'>{item.title}</h3>
                            <h6 className='font-medium text-sm dark:text-gray-100'>{item.companyName}</h6>
                            <ul className='my-5 list-disc ml-5 space-y-2'>
                              {item.points.map((point,index)=> {
                                return(
                                  <li key={index} className='dark:text-gray-300 font-normal pl-1 text-sm'>
                                    {point}
                                  </li>
                                )
                              })}
                            </ul>
                          
                        </VerticalTimelineElement>
                      </>
                    )
                  })
                }

              </div>
            </VerticalTimeline>
          </div>
      </section>
    </>
  )
}


// '/assets/hero-bg.svg'
export default TestPage