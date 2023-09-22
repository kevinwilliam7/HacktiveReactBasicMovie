/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import Listing from '@/components/movie/listing';

export default function SearchScreen() {
	const searchParams = useSearchParams()
	const [searchMovies, setSearchMovies] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchSearchMovies = async () => {
		setLoading(true);
		const res = await fetch(process.env.API_URL+`/3/search/movie?query=${searchParams.get('query')}&include_adult=false&language=en-US&page=1`, {headers: {Authorization: 'Bearer '+process.env.API_KEY}});
		const data = await res.json();
		setSearchMovies(data.results);
		setLoading(false);
	}

	useEffect(()=>{
		fetchSearchMovies()
	}, [searchMovies]);

	console.log(searchMovies);

	return (
		<div>
			<Listing loading={loading} title={`Search Query: ${searchParams.get('query')}`} movies={searchMovies}/>
		</div>
	)
}
