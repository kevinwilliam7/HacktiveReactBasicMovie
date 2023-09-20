'use client'
import Carousel from '@/components/carousel';
import Navbar from '@/components/layout/navbar';
import { useEffect, useState } from 'react';
import data from '@/assets/json/top_rated_movies.json';
import { FaBeer, FaPlay, FaStar } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

export default function HomeScreen() {
	const [topRatedMovies, setTopRatedMovies] = useState([]);
	const [searchMovies, setSearchMovies] = useState([]);

	const fetchTopRatedMovies = async () => {
		// const res = await fetch(process.env.API_URL+'/3/movie/top_rated?language=en-US&page=1', {
		// 	headers: {Authorization: 'Bearer '+process.env.API_KEY}
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
					<h1 className='mb-10 font-bold text-2xl'>Top Rated Movies</h1>
					<div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-7 gap-4'>
						{
							topRatedMovies.length !== 0 ? topRatedMovies.map((val)=>{
								var posterPath = "https://image.tmdb.org/t/p/original/"+val.poster_path;
								return <div key={val.id}>
									<div className='group relative max-w-full rounded-lg overflow-hidden'>
										<Link href={{pathname: '/detail', query: val.id}}>
											<div className="w-44 bg-red-100 relative group max-w-full rounded-lg">
												<Image className='group-hover:scale-125 group-hover:blur-sm rounded-lg' src={posterPath} width={250} height={250} alt='poster' />
												<div className='top-0 right-0 group-hover:opacity-100 opacity-0 absolute grid grid-cols-2 bg-gray-500 p-1 rounded-l-md content-center gap-1'>
													<FaStar className='text-white' size={'16px'}/>
													<h1 className='text-white text-md font-semibold text-center'>{val.vote_average}</h1>
												</div>
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
							}) : 'tidak ada'
						}
					</div>
				</div>
			</div>
		</div>
	)
}