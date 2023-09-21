import React from 'react'

export default function Skeleton(props) {
  return (
    <div className='group relative max-w-full rounded-lg overflow-hidden'>
        <div className={`${props.dimension} bg-gray-300 animate-pulse relative group max-w-full rounded-lg`}>
            <div className="group-hover:h-full group-hover:opacity-100 absolute top-0 w-full h-0 flex flex-col justify-center items-center hover:bg-transparent opacity-0 duration-500">

            </div>
        </div>
        <div className='p-2'>
        </div>
    </div>
  )
}
