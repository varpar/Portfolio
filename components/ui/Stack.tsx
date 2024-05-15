import Image from 'next/image'
import React from 'react'

type Props = {}

const Stack = (props: Props) => {
  return (
    <div className=' grid pt-20'> 
     <h1 className='md:text-7xl sm:text-6xl text-5xl md:text-center mb-6 p-4 underline underline-offset-2 decoration-yellow-400'>Tech-Stack</h1>
      <div className='grid grid-rows-3 lg::w-[40%] md:w-[60%] w-[90%] mx-auto gap-6'>

        <div className='row-span-1 grid grid-cols-5 items-center'>

        <Image 
        src="/next.png"
        height={32}
        width={32}
        alt=''
        className='col-span-1 flex mx-auto'
        />

<Image 
        src="/next.png"
        height={32}
        width={32}
        alt=''
        className='col-span-1  flex mx-auto'
        />
        <Image 
        src="/next.png"
        height={32}
        width={32}
        alt=''
        className='col-span-1 flex mx-auto'
        />
        <Image 
        src="/next.png"
        height={32}
        width={32}
        alt=''
        className='col-span-1 flex mx-auto'
        />
        <Image 
        src="/next.png"
        height={32}
        width={32}
        alt=''
        className='col-span-1 flex mx-auto'
        />

        </div>

        <div className='row-span-1 grid grid-cols-5 items-center'>

<Image 
src="/next.png"
height={32}
width={32}
alt=''
className='col-span-1 flex mx-auto'
/>

<Image 
src="/next.png"
height={32}
width={32}
alt=''
className='col-span-1  flex mx-auto'
/>
<Image 
src="/next.png"
height={32}
width={32}
alt=''
className='col-span-1 flex mx-auto'
/>
<Image 
src="/next.png"
height={32}
width={32}
alt=''
className='col-span-1 flex mx-auto'
/>
<Image 
src="/next.png"
height={32}
width={32}
alt=''
className='col-span-1 flex mx-auto'
/>

</div>

<div className='row-span-1 grid grid-cols-5 items-center'>

        <Image 
        src="/next.png"
        height={32}
        width={32}
        alt=''
        className='col-span-1 flex mx-auto'
        />

<Image 
        src="/next.png"
        height={32}
        width={32}
        alt=''
        className='col-span-1  flex mx-auto'
        />
        <Image 
        src="/next.png"
        height={32}
        width={32}
        alt=''
        className='col-span-1 flex mx-auto'
        />
        <Image 
        src="/next.png"
        height={32}
        width={32}
        alt=''
        className='col-span-1 flex mx-auto'
        />
        <Image 
        src="/next.png"
        height={32}
        width={32}
        alt=''
        className='col-span-1 flex mx-auto'
        />

        </div>

      </div>
    </div>

  )
}

export default Stack