import React from 'react'

const Spread = () => {
    return (
        <div className='w-full bg-white py-20 sm:py-[15rem]'>
            <div className="mx-auto max-w-screen-xl sm:px-10 px-5">
                <div id="svg" className='flex items-center justify-center gap-2'>
                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                    <h1>In the media</h1>
                </div>
                <div id='text' className='mt-10 text-center'>
                    <h1 className='text-5xl sm:text-[10rem] sm:tracking-tight tracking-tighter capitalize font-semibold'>Spread</h1>
                    <h1 className='text-5xl sm:text-[10rem] sm:tracking-tight tracking-tighter capitalize font-semibold'>The News</h1>
                    <p className='mx-auto mt-7 w-2/3 sm:mt-16 sm:text-2xl sm:w-2/5 text-md'>Find out more about our work on these leading design and technology platforms.</p>
                    <a href="#" className='border-b-[1px] sm:mt-10 sm:text-lg  border-zinc-900 inline-block mt-3 mb-4'>Brows all news</a>
                </div>
            </div>
        </div>
    )
}

export default Spread