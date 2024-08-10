"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from 'next/image'
import Link from 'next/link'


import {data} from "@/constants/SiteData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [darkMode,setDarkMode] = useState(true);

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setDarkMode(!darkMode)
    setTheme(!darkMode ? "light" : "dark");
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return(
    <>
      <header className='px-24 mx-auto p-2 navbar-trans'>
        <nav className="flex items-center justify-between flex-wrap">
          {/* brand */}
          <div className="flex items-center flex-shrink-0 mr-3 lg:mr-16">
            <Link href="/">
              <h1 className="font-extrabold text-[32px] text-brand-dark dark:text-brand-light">BP.</h1>
            </Link>
          </div>

          {/* ham button */}
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
            >
              <svg
                className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>

              <svg
                className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>

            </button>
          </div>

          {/* links */}
          <div
            className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
          >
            <div className="text-sm lg:flex-grow lg:items-center">
              <span className="inline-block mx-[12%]"></span>
              {
                data.navLinksMap.map(item => {
                  return(
                    <Link href={item._url} className="nav-links capitalize" key={item.name}>
                      {item.name}
                    </Link>
                  )
                })
              }

            </div>

            {/* login/signup */}
            <div className='inline-flex items-center'>
              <button className='ms-8 rounded-full hover:shadow-lg dark:hover:shadow-lg' onClick={handleThemeChange}>
                {!darkMode ? 
                  <Image src="/assets/moon.svg" alt="dark" className='p-2 h-12 w-12 hover:bg-slate-600 rounded-full' width={12} height={12} />
                  :
                  <Image src="/assets/sun.svg" alt="light" className='p-2 h-12 w-12 hover:bg-indigo-300 rounded-full' width={12} height={12} />
                }
              </button>              
              <Image src="/assets/Avatar.svg" alt="avatar" className="mx-2 object-cover w-12 h-12 rounded-full" width={24} height={24} />
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
export default Navbar;