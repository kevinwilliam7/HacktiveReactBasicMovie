import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';

export default function Card(props) {
    const [isError, setIsError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const val = props.val;
    const size = props.size;
    return (
        <div className='group relative max-w-full rounded-lg overflow-hidden'>
            <Link href={{ pathname: `/detail`, query:`id=${val.id}` }} >
                <div className={`${(isError === val.id || isLoading === val.id) ? `space-y-8 animate-pulse bg-gray-300` : `bg-red-100`} ${size === `large` ? `w-full` : `w-44 h-64`} relative group max-w-full rounded-lg`}>
                    <Image 
                        onError={()=>setIsError(val.id)}
                        onLoad={()=>setIsLoading(val.id)}
                        onLoadingComplete={()=>setIsLoading(null)}
                        className={`${size === `large` ? `object-fit h-44 md:h-64 lg:h-72 xl:h-80 w-full` : `w-44 h-64`} group-hover:scale-125 group-hover:blur-sm rounded-lg`} 
                        src={`https://image.tmdb.org/t/p/original/${size === `large` ? val.backdrop_path : val.poster_path}`} 
                        width={250} 
                        height={250} 
                        alt={(isError === val.id || isLoading === val.id) ? `` : `poster`} 
                    />
                    <div className="group-hover:h-full group-hover:opacity-100 absolute top-0 w-full h-0 flex flex-col justify-center items-center hover:bg-transparent opacity-0 duration-500">
                        <FaPlay className='text-orange-400' size={'30px'}/>
                    </div>
                </div>
            </Link>
        </div>
    )
}
