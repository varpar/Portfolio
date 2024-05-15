import Image from 'next/image'
import React from 'react'

type Props = {}

const Stack = (props: Props) => {
  return (
    <div className=' grid pt-20'> 
     <h1 className='lg:text-7xl md:text-6xl text-5xl md:text-center mb-6 p-4 underline underline-offset-2 decoration-yellow-400'>Tech-Stack</h1>
      <div className='grid grid-rows-3 lg::w-[40%] md:w-[60%] w-[90%] mx-auto gap-6'>

        <div className='row-span-1 grid grid-cols-5 items-center'>

        <Image 
        src="/next.png"
        height={512}
        width={512}
        alt=''
        className='col-span-1 flex mx-auto w-12'
        />

<Image 
        src="/React.webp"
        height={512}
        width={512}
        alt=''
        className='col-span-1  flex mx-auto w-12'
        />
        <Image 
        src="/tailwind.png"
        height={512}
        width={512}
        alt=''
        className='col-span-1 flex mx-auto w-12'
        />
        <Image 
        src="/prima.svg"
        height={512}
        width={512}
        alt=''
        className='col-span-1 flex mx-auto w-12'
        />
        <Image 
        src="/ts.png"
        height={512}
        width={512}
        alt=''
        className='col-span-1 flex mx-auto w-12'
        />

        </div>

        <div className='row-span-1 grid grid-cols-5 items-center'>

<Image 
src="/c.png"
height={512}
width={512}
alt=''
className='col-span-1 flex mx-auto w-12'
/>

<Image 
src="/pg.png"
height={512}
width={512}
alt=''
className='col-span-1 flex mx-auto w-12'
/>
<Image 
src="/c++.png"
height={512}
width={512}
alt=''
className='col-span-1  flex mx-auto w-12'
/>
<Image 
src="/py.png"
height={512}
width={512}
alt=''
className='col-span-1 flex mx-auto w-12'
/>
<Image 
src="/opencv.png"
height={512}
width={512}
alt=''
className='col-span-1 flex mx-auto w-12'
/>

</div>

<div className='row-span-1 grid grid-cols-5 items-center'>

        <Image 
        src="/tensorflow.png"
        height={512}
        width={512}
        alt=''
        className='col-span-1 flex mx-auto w-12'
        />

<Image 
        src="/blen.png"
        height={512}
        width={512}
        alt=''
        className='col-span-1  flex mx-auto w-12'
        />
        <Image 
        src="/git.png"
        height={512}
        width={512}
        alt=''
        className='col-span-1 flex mx-auto w-14'
        />
        <Image 
        src="/gh.png"
        height={512}
        width={512}
        alt=''
        className='col-span-1 flex mx-auto w-28'
        />
        <Image 
        src="/figma.png"
        height={512}
        width={512}
        alt=''
        className='col-span-1 flex mx-auto w-8'
        />

        </div>

      </div>
    </div>

  )
}

export default Stack