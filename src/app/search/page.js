/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import Listing from '@/components/movie/listing';

export default function SearchScreen() {
	const searchParams = useSearchParams();
	const queryParam = searchParams.get('query');
	const [pages, setPages] = useState(1);
	const [searchMovies, setSearchMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(null);

	const fetchSearchMovies = async () => {
		try{
			setIsError(null);
			setIsLoading(true);
			const res = await fetch(process.env.API_URL+`/3/search/movie?query=${queryParam}&include_adult=false&language=en-US&page=${pages}`, 
				{headers: {Authorization: 'Bearer '+process.env.API_KEY
			}})
			const data = await res.json()
			setSearchMovies(prevItems => [...prevItems, ...data.results]);
			setPages(prevPages => prevPages + 1);
		} catch (err) {
			setIsError('err');
		} finally {
			setIsLoading(false);
		}
	}

	const handleScroll = () => {
		if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
		  return;
		}
		fetchSearchMovies();
	};

	useEffect(()=>{
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [isLoading, queryParam]);
	return (
		<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
			<h1 className='mb-5 font-bold text-2xl'>{`Search Results Found: ${searchParams.get('query')}`}</h1>
			{
				<Listing movies={searchMovies} isLoading={isLoading} isError={isError}/>
			}
		</div>
	)
}
