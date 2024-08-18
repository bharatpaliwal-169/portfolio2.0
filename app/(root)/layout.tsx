import React from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const layout = ({children}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className='bg-AliceBlue text-RichBlack dark:bg-DarkSlateGray dark:text-offWhite antialiased'>
      <Navbar />
        {children}
      <Footer />
    </main>
  )
}

export default layout;