"use client"
import Link from "next/link";
import Image from 'next/image'

import { Typewriter } from "react-simple-typewriter";
import { ArrowDownTrayIcon,ChatBubbleLeftRightIcon,SparklesIcon } from "@heroicons/react/24/outline";
import { data } from "@/constants/SiteData";
import { appData } from "@/constants/appdata";

const Landing = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-12 gap-0 select-none">
        <div className="col-span-12 md:col-span-6 md:col-start-2 p-4 md:my-4">
          <div className='pill-box'>
            <SparklesIcon className="text-violet-500  dark:text-violet-300 text-[12px] h-[1.5rem] w-[1.5rem] mr-1 "/>
            <h1 className='pill-text'>
              {appData.heroPill}
            </h1>
          </div>

          <div className="text-balance">
            <h2 className="text-2xl">
              Hi there<span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
            </h2>

            <section className="text-lg">
              <h3 className="text-xl mb-4">
                This is <span className=" text-[#7C04FC] dark:text-violet-500 font-semibold">{appData.heroName}</span>
              </h3>

              <Typewriter words={
                  [
                    "Senior Software Engineer @Comviva",
                    "MERN/Java SpringBoot developer",
                    "Sports Enthusiast",
                    "Passionate Book Reader",
                    "Comfort Food Lover",
                  ]
                }
                loop = {true}
                deleteSpeed={50}
                cursorBlinking={true}
                cursor
              />

              <div className="flex flex-col md:flex-row w-full gap-y-4 md:gap-y-5 text-xs mt-4">
                
                  <Link href={data.resumeLink} target="_blank"
                    >
                    <div className=" flex items-center justify-center py-2 hover:bg-gray-300 md:inline-flex md:w-fit border border-gray-700 dark:border-offWhite rounded-3xl md:px-8 md:py-1 md:mx-4
                      dark:hover:bg-slate-600"
                    >
                      <ArrowDownTrayIcon className="h-[1.5rem] w-[1.5rem]  mr-1"/>
                      <p className="">{appData.downloadCV}</p>
                    </div>
                  </Link>

                <Link href={data.meetingLink} target="_blank">
                  <div className="flex items-center justify-center py-2 md:inline-flex md:w-fit rounded-3xl md:px-8 md:py-1 md:mx-4 hover:bg-gray-200 dark:hover:bg-slate-600">
                    <ChatBubbleLeftRightIcon className="h-[1.5rem] w-[1.5rem] mr-1 "/>
                    <p className="">{appData.scheduleMeeting}</p>
                  </div>
                </Link>
              </div>
            </section>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 p-4 md:my-4">
          <Image src='/assets/heroBanner.svg' alt="HeroBanner" width={500} height={500} />
        </div>
      </section>
    </>
  )
}

export default Landing;