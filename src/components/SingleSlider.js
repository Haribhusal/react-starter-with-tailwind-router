import React from 'react'

const SingleSlider = () => {
  return (
    <div className='h-[100%] w-full relative'>
        <img src='https://picsum.photos/id/11/1000/460' className='w-full'/>
        <div className="content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <h3 className='md:text-5xl sm:text-3xl font-bold text-white mb-3 drop-shadow'>Work or Study in Korea or Japan</h3>
            <p className='text-white'>At Univa, We will help you to get your visa</p>
        </div>
        <div className="blur absolute top-0 left-0 right-0 bottom-0 h-full w-full bg-black opacity-20 z-10">
        </div>
    </div>
  )
}

export default SingleSlider