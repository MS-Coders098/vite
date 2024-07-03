import { motion } from 'framer-motion'
import { Power4 } from 'gsap/all'
import React from 'react'

const Landing = () => {
    return (
        <div className='w-full sm:h-[250vh] h-[150vh] relative flex flex-col flex-wrap'>

            <div id="picture" className='w-full h-full overflow-hidden'>
                <img data-scroll data-scroll-speed="-1" className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1920x2716/filters:format(webp):quality(70)" alt="" />
            </div>

            <div className='w-full absolute top-0'>
                <div id="text" className='h-full max-w-screen-2xl mx-auto sm:px-10 px-5 text-white'>
                    <div id="para" className='mt-72 sm:mt-[30rem] text-wrap'>
                        {["Global digital design studio partnering with", "brands and businesses that create exceptional", "experiences where people live, work, and unwind.", "live, work and unwind"].map((item, index) => {

                            return <p key={index} className='text-md sm:text-2xl overflow-hidden'>
                                <motion.span initial={{ rotate: 90, y: "100%" }} animate={{ rotate: 0, y: 0 }} transition={{ ease: Power4.easeInOut, duration: 1.5, delay: index * .15 }} className='inline-block origin-left'>{item}</motion.span>
                            </p>

                        })}
                    </div>

                    <div id="heading" className='mt-5 sm:mt-10'>
                        {["Digital", "Design", "Experience"].map((item, index) => {
                            return <h1 className='text-6xl overflow-hidden tracking-tighter py-10 -my-20 sm:text-[13rem]'><motion.span initial={{ rotate: 90, y: "100%" }} animate={{ rotate: 0, y: 0 }} transition={{ ease: Power4.easeInOut, duration: 1.5, delay: 1+index*.2 }} className='inline-block origin-left'>{item}</motion.span></h1>
                        })}

                    </div>

                    <div id="para2" className='mt-20 sm:w-1/3 '>
                        <p className='sm:text-xl text-wrap'>We help experience-driven companies thrive by making their audience feel the refined intricacies of their brand and product in the digital space. Unforgettable journeys start with a click.</p>
                        <a href="#" className='border-b-[.3px] sm:text-xl sm:border-b-[1px] border-zinc-200 pb-1 inline-block mt-10'>The Studio</a>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Landing