import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
    <div className='md:grid hidden md:grid-cols-2 md:grid-rows-1  grid-rows-2  z-[999] items-center w-full justify-normal bg-white text-black'>
        <div className='md:h-[80vh] h-[55vh] grid sm:justify-center sm:items-center col-span-1 row-span-1 border-r border-r-1 overflow-hidden'>
            <Image
                src="/duck.png"
                width={1024}
                height={1024}
                alt=''
                className='w-full h-full object-cover z-[999]'
                />
        </div>
        <div className='md:h-[80vh] h-[60vh] grid md:justify-center md:items-center col-span-1 md:pr-24 p-4 md:row-span-0 row-span-1 z-[999]'>
            <div>
            <p className='text-5xl md:text-6xl lg:text-7xl mb-4 relative text-black underline-offset-2 decoration-red-500 underline' >About me
</p>
            <p className='mb-6'>I'm a full-stack developer with a keen interest in machine learning, backed by two years of professional experience. When I'm not immersed in code, you'll often find me indulging in my hobby of 3D modeling. My approach to development is simple yet effective: create solutions that are not only functional but also visually appealing, aiming to bring joy and utility to users. I'm the developer you want on your team if you're looking to craft products that make users exclaim, 'This is exactly what I need!'</p>
             <a href="mailto:varunparmarwork@gmail.com" className='border-2 border-black p-4 px-6 my-8 rounded-md hover:bg-black hover:text-white duration-200'>Let's Talk</a>
            </div>
        </div>
    </div>


    <div className='flex flex-col md:hidden'>
    <div className='max-h-[50vh] z-[999] overflow-hidden'>
            <Image
                src="/duck.png"
                width={1024}
                height={1024}
                alt=''
                className='w-full h-full object-cover z-[999]'
                />
        </div>

        <div className='md:justify-center md:items-center col-span-1 md:pr-24 p-4 md:row-span-0 row-span-1 z-[999]'>
            <div>
            <p className='text-5xl md:text-6xl lg:text-7xl mb-4 relative text-black underline-offset-2 decoration-red-500 underline' >About me
</p>
            <p className='mb-6'>I'm a full-stack developer with a keen interest in machine learning, backed by two years of professional experience. When I'm not immersed in code, you'll often find me indulging in my hobby of 3D modeling. My approach to development is simple yet effective: create solutions that are not only functional but also visually appealing, aiming to bring joy and utility to users. I'm the developer you want on your team if you're looking to craft products that make users exclaim, 'This is exactly what I need!'</p>
             <a href="mailto:varunparmarwork@gmail.com" className='border-2 border-black p-4 px-6 my-8 rounded-md hover:bg-black hover:text-white duration-200'>Let's Talk</a>
            </div>
        </div>
    </div>
                </>
  )
}

export default About