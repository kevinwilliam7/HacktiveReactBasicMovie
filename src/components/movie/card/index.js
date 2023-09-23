import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';

export default function Card(props) {
    const [isError, setIsError] = useState(null);
    const val = props.val;
    const dimension = props.dimension;
    return (
        <div className='group relative max-w-full rounded-lg overflow-hidden'>
            <Link href={{ pathname: `/detail`, query:`id=${val.id}` }} >
                <div className={`${isError === val.id ? `animate-pulse bg-gray-300` : `bg-red-100`} ${dimension} relative group max-w-full rounded-lg`}>
                    <Image onError={()=>setIsError(val.id)} className='group-hover:scale-125 group-hover:blur-sm rounded-lg h-64 w-44' src={`https://image.tmdb.org/t/p/original/${val.poster_path}`} width={250} height={250} alt='poster' />
                    <div className="group-hover:h-full group-hover:opacity-100 absolute top-0 w-full h-0 flex flex-col justify-center items-center hover:bg-transparent opacity-0 duration-500">
                        <FaPlay className='text-orange-400' size={'30px'}/>
                    </div>
                </div>
            </Link>
        </div>
    )
}
