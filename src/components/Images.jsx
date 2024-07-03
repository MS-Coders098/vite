import React from 'react'

const Images = () => {
  return (
    <div className='w-full h-[70vh] sm:h-screen bg-white flex justify-center items-center overflow-hidden'>
        <div className="w-[40%] sm:w-[20%] sm:h-[70%] h-1/2  relative">
            <div className="w-20 h-[6.5rem] sm:w-40 sm:h-[15rem] -right-1/3  top-6 absolute">
                <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/350x497/filters:format(webp):quality(70)" alt="" />
            </div>
            <div className="absolute w-28 sm:w-[20rem] aspect-video -left-2/3 sm:-left-2/3 top-1/3">
                <video autoPlay muted loop src="../../public/home-news-diesel-be-a-follower.mp4"></video>
            </div>
            <div className="absolute aspect-video w-[8rem] sm:w-[16rem] -left-[72%] -bottom-10">
                <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/350x235/filters:format(webp):quality(70)" alt="" />
            </div>
            <div className="absolute w-[8.5rem] aspect-[1.5/1] -right-[70%] sm:-right-[20%] sm:-bottom-[10%] -bottom-[40%]">
                <video autoPlay muted loop src="../../public/news-rino-pelle.mp4"></video>
            </div>
            <img className='w-full h-full object-cover /2 /4 -x-1/2 -y-1/2 63%] ' src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/350x598/filters:format(webp):quality(70)" alt="" />
        </div>
    </div>
  )
}

export default Images