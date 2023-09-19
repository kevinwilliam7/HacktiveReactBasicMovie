'use client'
import Carousel from '@/components/carousel';
import Navbar from '@/components/layout/navbar';
import { useEffect, useState } from 'react';
import data from '@/assets/json/top_rated_movies.json';
import { FaBeer, FaPlay, FaStar } from "react-icons/fa";
import Image from 'next/image';
import { IconContext } from 'react-icons';

export default function HomeScreen() {
	const [topRatedMovies, setTopRatedMovies] = useState([]);
	const [searchMovies, setSearchMovies] = useState([]);

	const fetchTopRatedMovies = async () => {
		// const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', {
		// 	headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzRlMTU4NGYyNDcwMDE0MWU3MGE5YjNkYjc3MDcxNCIsInN1YiI6IjYwYjRlYmU2YTA2NjQ1MDA2ZTdiZWI0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TStROR4q0r9ekaZxnus7X7ozB73Fk9ECVY4iHRC3hN4'}
		// });
		// const data = await res.json();
		setTopRatedMovies(data.results);
	}

	useEffect(() => {
		fetchTopRatedMovies();
	}, []);

	return (
		<div>
			<Navbar/>
			<Carousel/>
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<div>
					<h1 className='mb-10 font-bold text-3xl'>Top Rated Movies</h1>
					<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-4'>
						{
							topRatedMovies.length !== 0 ? topRatedMovies.map((val)=>{
								var posterPath = "https://image.tmdb.org/t/p/original/"+val.poster_path;
								return <div className='group relative max-w-full rounded-lg overflow-hidden shadow-sm bg-blue-300' key={val.id}>
									<a href={'/home'}>
										<div class="w-64 bg-red-100 relative group">
											<Image className='group-hover:scale-125 group-hover:blur-sm' src={posterPath} width={250} height={250} alt='poster' />
											<div className='top-0 right-0 group-hover:opacity-75 opacity-0 absolute'>
												rating
											</div>
											<div className='w-1 h-1/2 pb-5 pt-5 pl-5 pr-20 opacity-0 group-hover:opacity-75 bottom-0 absolute bg-gray-400 min-w-full'>
												<h1 className="text-ellipsis overflow-hidden text-lg text-gray-900 font-bold justify-center text-center">{val.original_title} {' ('+new Date(val.release_date).getFullYear()+')'}</h1>
											</div>
											<div className="group-hover:h-full group-hover:opacity-100 absolute top-0 w-full h-0 flex flex-col justify-center items-center hover:bg-transparent opacity-0 duration-500">
												<IconContext.Provider value={{ color: 'orange', size: '50px' }}>
													<div>
														<FaPlay />
													</div>
												</IconContext.Provider>
											</div>
										</div>
									</a>
								</div>
							}) : 'tidak ada'
						}
					</div>
				</div>
			</div>
		</div>
	)
}