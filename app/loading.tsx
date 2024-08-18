import React from 'react'

const Loading = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-brand-logo"></div>
      </div>
    </>
  )
}

export default Loading;

