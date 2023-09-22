import Skeleton from '@/components/skeleton/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaPlay } from 'react-icons/fa';

export default function Listing(props) {
    const title = props.title;
	const movies = props.movies;
 
    return (
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div>
                <h1 className='mb-5 font-bold text-2xl'>{title}</h1>
                <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-7 gap-4'>
                    {
                        movies.length !== 0 ? movies.map((val)=>{
                            var posterPath = "https://image.tmdb.org/t/p/original/"+val.poster_path;
                            return <div key={val.id}>
                                <div className='group relative max-w-full rounded-lg overflow-hidden'>
                                    <Link href={{ pathname: `/detail`, query:`id=${val.id}` }} >
                                        <div className="w-44 h-64 bg-red-100 relative group max-w-full rounded-lg">
                                            <Image className='group-hover:scale-125 group-hover:blur-sm rounded-lg h-64 w-44' src={posterPath} width={250} height={250} alt='poster' />
                                            <div className="group-hover:h-full group-hover:opacity-100 absolute top-0 w-full h-0 flex flex-col justify-center items-center hover:bg-transparent opacity-0 duration-500">
                                                <FaPlay className='text-orange-400' size={'30px'}/>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <Link href={{ pathname: `/detail`, query:`id=${val.id}` }} >
                                    <div className='p-2 group group-hover:scale-125'>
                                        <h1 className="truncate overflow-hidden text-sm text-gray-900 font-semibold justify-center">{val.title} {' ('+new Date(val.release_date).getFullYear()+')'}</h1>
                                        <p className='truncate text-xs text-gray-900 font-normal'>{Date(val.release_date)}</p>
                                    </div>
                                </Link>
                            </div>
                        }) : <div className='justify-center'>
                                <div role="status">
                                    <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}
