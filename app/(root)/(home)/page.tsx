import Image from "next/image";
const Landing = () => {
  return (
    <>
      <section className="min-h-screen flex items-center my-4 py-2 border ">
        <div className="flex lg:flex-grow items-center border">
          <div className='pill-box'>
            <h1 className='pill-text'>
              Software & Technology Enthusiast
            </h1>
          </div>

        </div>

        <div className="flex items-center border">
          <Image src="/assets/hero-bg.svg"  alt="hero-bg" height={500} width = {500} />
        </div>
      </section>
    </>
  )
}

export default Landing;