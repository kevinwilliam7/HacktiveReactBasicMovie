import Skeleton from '@/components/skeleton/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaPlay } from 'react-icons/fa';

export default function Listing(props) {
    const title = props.title;
	const movies = props.movies;
 
    return (
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <div>
                <h1 className='mb-5 font-bold text-2xl'>{title}</h1>
                <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-7 gap-4'>
                    {
                        movies.length !== 0 ? movies.map((val)=>{
                            var posterPath = "https://image.tmdb.org/t/p/original/"+val.poster_path;
                            return <div key={val.id}>
                                <div className='group relative max-w-full rounded-lg overflow-hidden'>
                                    <Link href={{pathname: '/detail', query: val.id}}>
                                        <div className="w-44 bg-red-100 relative group max-w-full rounded-lg">
                                            <Image className='group-hover:scale-125 group-hover:blur-sm rounded-lg' src={posterPath} width={250} height={250} alt='poster' />
                                            <div className="group-hover:h-full group-hover:opacity-100 absolute top-0 w-full h-0 flex flex-col justify-center items-center hover:bg-transparent opacity-0 duration-500">
                                                <FaPlay className='text-orange-400' size={'30px'}/>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <Link href={{pathname: '/detail', query: val.id}}>
                                    <div className='p-2 group group-hover:scale-125'>
                                        <h1 className="truncate overflow-hidden text-sm text-gray-900 font-semibold justify-center">{val.title} {' ('+new Date(val.release_date).getFullYear()+')'}</h1>
                                        <p className='truncate text-xs text-gray-900 font-normal'>{Date(val.release_date)}</p>
                                    </div>
                                </Link>
                            </div>
                        }) : <div>
                            <Skeleton dimension={'w-44 h-64'}/>
                            <Skeleton dimension={'w-44 h-64'}/>
                            <Skeleton dimension={'w-44 h-64'}/>
                            <Skeleton dimension={'w-44 h-64'}/>
                            <Skeleton dimension={'w-44 h-64'}/>
                            <Skeleton dimension={'w-44 h-64'}/>
                            <Skeleton dimension={'w-44 h-64'}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
