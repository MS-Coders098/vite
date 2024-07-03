import { motion } from 'framer-motion'
import gsap, { Power4, ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'

const PlayReel = () => {
    const elem = useRef(null);
    const videodiv = useRef(null);
    const headingRef = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(videodiv.current, {
            scrollTrigger: {
                trigger: elem.current,
                top: "0 0",
                pin: true,
                markers: true,
                scrub: 1.5
            },
            width: "100%",
            height: "100%",
            ease: Power4.easeInOut
        })

        gsap.to(headingRef.current, {
            scrollTrigger: {
                trigger: "#overlay",
                pin: true,
                markers: true,
                scrub: 1.5,
                top: "0 0"
            },
            gap: "2vw"
        })
    })

    return (
        <div ref={elem} className='w-full h-screen overflow-hidden relative bg-black'>
            <div ref={videodiv} className="w-36 sm:w-96 bg-red-300 aspect-video absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <video autoPlay muted loop className='w-full z-20 scale-[2] h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' src="https://player.vimeo.com/video/161442811?title=0&portrait=0&byline=0&muted=1"></video>
            </div>
            <div id="overlay" className='w-full absolute h-full text-white flex py-[73px] flex-col justify-between'>
                <div className='w-full flex items-center justify-center gap-3 '>
                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                    <h3 className='text-sm'>Work in motion</h3>
                </div>
                <h1 ref={headingRef} className='w-full flex justify-center items-center sm:gap-[22rem] gap-32'>
                    <div className='text-3xl sm:text-7xl font-light'>Play</div>
                    <div className='text-3xl sm:text-7xl font-light'>Reel</div>
                </h1>
                <p className='text-center px-10 text-xs'>Our work is best experienced in motion. Don’t forget to put on your headphones.</p>
            </div>
        </div>
    )
}

export default PlayReel