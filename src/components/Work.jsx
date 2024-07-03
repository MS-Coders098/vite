import { motion } from 'framer-motion'
import { Power4 } from 'gsap/all'
import React, { useState } from 'react'

const Work = () => {
    const [sets, setSets] = useState([
        {
            heading: "Pixelflakes",
            subheading: "Architectural Marketing Agency",
            video: "https://download-video.akamaized.net/v3-1/playback/bfac2114-1cd7-4a50-8b21-ec941cbfb811/1f289d51?__token__=st=1710655525~exp=1710669925~acl=%2Fv3-1%2Fplayback%2Fbfac2114-1cd7-4a50-8b21-ec941cbfb811%2F1f289d51%2A~hmac=bef390f2aa4061aaac19c764ba8ba093ef4739f993c50abd746db7e9507309bb&r=dXMtd2VzdDE%3D",
            image: "https://a.storyblok.com/f/133769/2880x3588/5c50befb8e/pixel-flakes-hero.jpg/m/1300x1620/filters:format(webp):quality(70)"
        },
        {
            heading: "Rino & Pelle",
            subheading: "Effortless chic lifestyle",
            video: "https://download-video.akamaized.net/v3-1/playback/66710880-7060-4d65-965e-38a29da54c52/5ac47112?__token__=st=1710656503~exp=1710670903~acl=%2Fv3-1%2Fplayback%2F66710880-7060-4d65-965e-38a29da54c52%2F5ac47112%2A~hmac=aff1ddc9a0e75ba09315b6f8d3c07ca3d5b50f3ffa5124769fec686e0aeaa08a&r=dXMtY2VudHJhbDE%3D",
            image: "https://a.storyblok.com/f/133769/2500x3113/78edf86efd/rino-pelle-hero.jpg/m/1300x1619/filters:format(webp):quality(70)"
        },
        {
            heading: "Aebele Interior",
            subheading: "Luxurious design experience",
            video: "https://download-video.akamaized.net/v3-1/playback/57423169-59cb-4b8a-ad09-3bd812a12ee7/4ce94964?__token__=st=1710656747~exp=1710671147~acl=%2Fv3-1%2Fplayback%2F57423169-59cb-4b8a-ad09-3bd812a12ee7%2F4ce94964%2A~hmac=f7212737435f61a084e24f465edd3294d40aa1b163456acdc6688268bdc56d8f&r=dXMtd2VzdDE%3D",
            image: "https://a.storyblok.com/f/133769/1606x2000/09a30057bd/aebele-interiors-hero.jpg/m/1300x1619/filters:format(webp):quality(70)"
        },
        {
            heading: "Pixelflakes",
            subheading: "Architectural Marketing Agency",
            video: "https://download-video.akamaized.net/v3-1/playback/bfac2114-1cd7-4a50-8b21-ec941cbfb811/1f289d51?__token__=st=1710655525~exp=1710669925~acl=%2Fv3-1%2Fplayback%2Fbfac2114-1cd7-4a50-8b21-ec941cbfb811%2F1f289d51%2A~hmac=bef390f2aa4061aaac19c764ba8ba093ef4739f993c50abd746db7e9507309bb&r=dXMtd2VzdDE%3D",
            image: "https://a.storyblok.com/f/133769/2880x3588/5c50befb8e/pixel-flakes-hero.jpg/m/1300x1620/filters:format(webp):quality(70)"
        }
    ])

    return (
        <div className='w-full relative'>

            <div className="max-w-[1274px] py-20 mx-auto px-5 sm:px-10">

                <div id="featured" className='flex gap-3'>
                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                    <h3>Featured Projects</h3>
                </div>

                <h1 className='text-5xl my-6 sm:text-[10rem] sm:leading-none sm: tracking-tight sm:font-semibold overflow-hidden'><motion.span initial={{rotate: 90, y:"40%", opacity: 0}} whileInView={{rotate: 0, y:0, opacity: 1}} transition={{ ease: Power4.easeInOut, duration: .8}} viewport={{once: true}} className='origin-left inline-block'>Work</motion.span></h1>

                <p className='leading-2 text-md'>Highlights of cases that we passionately built with forward-thinking clients and friends over the years.</p>

                <div id="elems" className='mt-10 sm:flex sm:flex-wrap sm:gap-2'>
                    {sets.map((item, index) => {
                        return <div key={index} id="elem" className='w-full mt-10 sm:w-[48%]'>
                            <div id="video" className='w-full h-[104vw] sm:h-96 relative overflow-hidden'>

                                <motion.img initial={{opacity: 1}} whileHover={{opacity: 0}} data-scroll data-scroll-speed="-.2" className='w-full h-full sm:absolute sm:top-1 sm:left-1 sm:z-[2] object-cover hidden sm:block' src={item.image} alt="" />

                                <video className='block z-[1] w-full h-full scale-[1.3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' autoPlay loop muted src={item.video}></video>

                            </div>
                            <div className='mt-3'>
                                <h2 className='font-semibold'>{item.heading}</h2>
                                <h3 className='opacity-40'>{item.subheading}</h3>
                            </div>
                        </div>
                    })}

                </div>

            </div>
        </div>
    )
}

export default Work