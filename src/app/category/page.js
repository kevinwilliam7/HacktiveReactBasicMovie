/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import Listing from '@/components/movie/listing';

export default function CategoryScreen() {
	const searchParams = useSearchParams();
	const typeParam = searchParams.get('type');
	const [pages, setPages] = useState(1);
	const [searchMovies, setSearchMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(null);

	const fetchSearchMovies = async () => {
		try{
			setIsError(null);
			setIsLoading(true);
			const res = await fetch(process.env.API_URL+`/3/movie/${typeParam}?language=en-US&page=${pages}`, 
				{headers: {Authorization: 'Bearer '+process.env.API_KEY
			}})
			const data = await res.json()
			if(data.results.length!==0) {
				setSearchMovies(prevItems => [...prevItems, ...data.results]);
				setPages(prevPages => prevPages + 1);
			}
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
	}, [isLoading, typeParam, pages]);

	useEffect(()=>{
		fetchSearchMovies();
	}, [])

	return (
		<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
			<h1 className='mb-5 font-bold text-2xl'>{`${searchParams.get('type')==='now_playing' ? 'Now Playing Movies' : searchParams.get('type')==='popular' ? 'Popular Movies' : 'Top Rated Movies'}`}</h1>
			{
				<Listing movies={searchMovies} isLoading={isLoading} isError={isError}/>
			}
		</div>
	)
}
