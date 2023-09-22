/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import Listing from '@/components/movie/listing';

export default function SearchScreen() {
	const searchParams = useSearchParams()
	const [searchMovies, setSearchMovies] = useState([]);

	const fetchSearchMovies = async () => {
		const res = await fetch(process.env.API_URL+`/3/search/movie?query=${searchParams.get('query')}&include_adult=false&language=en-US&page=1`, {headers: {Authorization: 'Bearer '+process.env.API_KEY}});
		const data = await res.json();
		setSearchMovies(data.results);
	}

	useEffect(()=>{
		fetchSearchMovies()
	}, [searchMovies]);

	console.log(searchMovies);

	return (
		<div>
			<Listing title={`Search Query: ${searchParams.get('query')}`} movies={searchMovies}/>
		</div>
	)
}
