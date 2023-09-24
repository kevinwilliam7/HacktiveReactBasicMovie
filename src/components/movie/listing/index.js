import Link from 'next/link';
import React, { useState } from 'react'
import Card from '../card';
import Skeleton from '../card/skeleton';

export default function Listing(props) {
	const movies = props.movies
    const isLoading = props.isLoading
    const isError = props.isError
    function renderListingSkeleton(){
		let items = []
		for(var i=0; i<21; i++) {
			items.push(<Skeleton className="hi" key={i+'dummy'} dimension={'w-screen h-64'}></Skeleton>)
		}
		return items
	}

    return (
        <>
            {movies.length!==0 ?  
                <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-7 gap-4'>
                    {
                        movies.map((val)=>{
                            return <div key={val.id}>
                                { isLoading !== true 
                                    ? <>
                                        <Card val={val} size={'normal'}/>
                                        <Link href={{ pathname: `/detail`, query:`id=${val.id}` }} >
                                            <div className='p-2 group group-hover:scale-125'>
                                                <h1 className="truncate overflow-hidden text-sm text-gray-900 font-semibold justify-center">{val.title} {' ('+new Date(val.release_date).getFullYear()+')'}</h1>
                                                <p className='truncate text-xs text-gray-900 font-normal'>{Date(val.release_date)}</p>
                                            </div>
                                        </Link>
                                    </>
                                    : renderListingSkeleton()
                                }
                            </div>
                        })                     
                    }
                </div>
                : (isError!==null 
                    ? <div className='relative w-screen'>
                        <h1 className='font-semibold text-3xl p-2'>No results to show</h1>
                        <h1 className='font-semibold text-xl p-2'>Suggestion</h1>
                        <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 p-2'>
                            <li className='pt-2'>Make sure all words are spelled correctly.</li>
                            <li className='pt-2'>Try different keywords.</li>
                            <li className='pt-2'>Try more general keywords.</li>
                        </ul>
                    </div>
                    : <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4'>{renderListingSkeleton()}</div>)
            }
        </>
 
    )
}
