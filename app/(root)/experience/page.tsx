"use client"

import { useTheme } from 'next-themes';
import { experience, socialLinks } from '@/constants/resume';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { BriefcaseIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';import { appData } from '@/constants/appdata';
;
const Experience = () => {
  const theme = useTheme();
  return (
    <>
      <section className='grid grid-cols-1 md:grid-cols-12 items-center gap-0'>
          {/* heading */}
          <div className="col-span-12 p-4 text-balance text-center ">
            <h1 className="font-bold text-xl ">{appData.workExperience}</h1>
            <p className="text-md p-2 font-medium">{appData.workExDesp}</p>
          </div>
          
          {/* timeline */}
          <div className='m-4 p-2 col-span-12 items-center justify-center z-10 gap-0'>
            <VerticalTimeline 
              lineColor='#6D6D6D'
              layout='2-columns'
              animate={true}
            >
              <div>
                {
                  experience.map((item,index) => {
                    return(
                      <div key = {index}>
                        <VerticalTimelineElement 
                            position= {(index%2 !==0 ) ?'right':'left'}
                            date={item.startDate}
                            className="vertical-timeline-element--work"
                            contentStyle={{
                              display: "flex",
                              flexDirection: "column",
                              background: theme.toString() === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                              border: "2px solid rgba(0, 0, 0, 0.05)",
                              textAlign: "left",
                              padding: "1.5rem 2rem",
                              marginBottom: "10rem"
                            }}

                            contentArrowStyle={{
                              borderRight:
                              theme.toString() === "light" ? "0.4rem solid rgba(0, 0, 0, 0.05)"
                                : "0.4rem solid rgba(255, 255, 255, 0.5)",
                            }}
                            iconStyle={{
                              background: theme.toString() === "light" ? "white" : "#FBF5DF",
                              fontSize: "1.5rem",
                              color: "#010101",
                            }}
                            icon={
                              <BriefcaseIcon className='h-12 w-12'/>
                            }
                            visible={true}
                            
                          >
                          
                            <h3 className='font-bold text-lg text-brand-dark dark:text-brand-white'>{item.title}</h3>
                            <h6 className='font-medium text-md text-brand-gray dark:text-gray-100'>{item.companyName}</h6>
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
                      </div>
                    )
                  })
                }
              </div>
            </VerticalTimeline>
          </div>

          <div className='text-balance text-center m-4 p-2 col-span-12 items-center justify-center'>
            
            <h5 className='text-md'>
              {appData.linkedInDesp1}
              <span className='p-1'>
                <Link href={socialLinks.linkedin} target='_blank' className='text-blue-600 dark:text-blue-300'>
                  {appData.linkedIn}
                </Link>
              </span>
              {appData.linkedInDesp2}
            </h5>
          </div>

      </section>
    </>
  )
}

export default Experience