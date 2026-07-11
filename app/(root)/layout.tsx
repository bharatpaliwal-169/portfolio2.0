import React from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const layout = ({children}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className='app-frame antialiased'>
      {/* <Navbar /> */}
        {children}
      <Footer />
    </main>
  )
}

export default layout;
