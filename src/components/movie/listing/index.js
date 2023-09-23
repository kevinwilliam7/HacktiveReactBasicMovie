import Link from 'next/link';
import React, { useState } from 'react'
import Card from '../card';

export default function Listing(props) {
	const movies = props.movies;
    return (
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-7 gap-4'>
            {movies.map((val)=>{
                return <div key={val.id}>
                    <div className='group relative max-w-full rounded-lg overflow-hidden'>
                        <Card dimension={`w-44 h-64`} val={val}/>
                    </div>
                    <Link href={{ pathname: `/detail`, query:`id=${val.id}` }} >
                        <div className='p-2 group group-hover:scale-125'>
                            <h1 className="truncate overflow-hidden text-sm text-gray-900 font-semibold justify-center">{val.title} {' ('+new Date(val.release_date).getFullYear()+')'}</h1>
                            <p className='truncate text-xs text-gray-900 font-normal'>{Date(val.release_date)}</p>
                        </div>
                    </Link>
                </div>
            })}
        </div>
    )
}
