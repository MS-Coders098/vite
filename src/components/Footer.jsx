import React from 'react'

const Footer = () => {
  return (
    <div className='w-full overflow-hidden min-h-[150vh] bg-black text-zinc-400'>
      <div id="upper-part" className='flex justify-center items-center py-[10rem]'>
        <div id="content" className='w-[45rem]'>
          <h1 className='text-[10rem] tracking-tighter leading-none'>Our</h1>
          <h1 className='text-[10rem] tracking-tighter leading-none'>Story</h1>
          <p className='text-3xl pt-24 '>The story behind Exo Ape is one of exploration, creativity and curiosity.</p>
        </div>
        <div id="video">
          <video autoPlay muted loop src="../../public/news-rino-pelle.mp4" className='opacity-50 w-[30rem]'></video>
        </div>
      </div>

      <div id="line" className='relative w-[81%] left-[10rem]'>
        <hr className='text-center' />
      </div>

      <div id="lower-part" className='flex justify-center py-12'>

          <ul className='flex flex-col  items-center w-full'>
            <li>Willem II Singel 8</li>
            <li>6041 HS, Roermond</li>
            <li>The Netherlands</li>
            <li>hello@exoape.com</li>
          </ul>

          <ul className='flex flex-col items-center w-full'>
            <li>Work</li>
            <li>Studio</li>
            <li>News</li>
            <li>Contact</li>
          </ul>

          <ul className='flex flex-col  items-center w-full'>
            <li>Behance</li>
            <li>Dribbble</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>

        <a href="#">Our Story</a>
      </div>
    </div>
  )
}

export default Footer