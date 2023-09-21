'use client'
import Navbar from '@/components/layout/navbar';
import { useEffect, useState } from 'react';
import data from '@/assets/json/top_rated_movies.json';
import { FaPlay } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

export default function HomeScreen() {
	const [topRatedMovies, setTopRatedMovies] = useState([]);
	const [popularMovies, setPopularMovies] = useState([]);
	const [searchMovies, setSearchMovies] = useState([]);

	const fetchTopRatedMovies = async () => {
		// const res = await fetch(process.env.API_URL+'/3/movie/top_rated?language=en-US&page=1', {
		// 	headers: {Authorization: 'Bearer '+process.env.API_KEY}
		// });
		// const data = await res.json();
		setTopRatedMovies(data.results);
	}

	const fetchPopularMovies = async () => {
		setPopularMovies(data.results);
	}

	useEffect(() => {
		fetchTopRatedMovies();
		fetchPopularMovies();
	}, []);

	return (
		<div>
			<Navbar/>
			<div className='max-w-screen-xl p-4 items-center mx-auto'>
				<Swiper slidesPerView={2} autoplay={{delay: 2500, disableOnInteraction: false}} modules={[Autoplay, Pagination]}>
					{
						topRatedMovies.length !== 0 ? topRatedMovies.map((val) => {
							return <SwiperSlide key={val.id} className='p-2'>
								<div className='group relative max-w-full rounded-lg overflow-hidden'>
									<Link href={{pathname: '/detail', query: val.id}}>
										<div className="w-full bg-red-100 relative group max-w-full rounded-lg">
											<Image className='group-hover:scale-125 rounded-lg object-fit h-44 md:h-64 lg:h-72 xl:h-80 w-full' src={"https://image.tmdb.org/t/p/original/"+val.backdrop_path} width={250} height={250} alt='poster' />
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
							</SwiperSlide>
						}) : 'null'
					}		
				</Swiper>
			</div>
			<div className='max-w-screen-xl p-4 items-center mx-auto'>
				<h1 className='mb-5 font-bold text-2xl'>Popular Movies</h1>
				<Swiper slidesPerView={6} autoplay={{delay: 2500, disableOnInteraction: false}} breakpoints={{
					260: { slidesPerView: 3 },
					640: { slidesPerView: 4 },
					768: { slidesPerView: 5 },
					1024: { slidesPerView: 6 },
					1280: { slidesPerView: 7 },
					1536: { slidesPerView: 7 },
				}} modules={[Autoplay, Pagination]}>
					{
						topRatedMovies.length !== 0 ? topRatedMovies.map((val) => {
							var posterPath = "https://image.tmdb.org/t/p/original/"+val.poster_path;
							return <SwiperSlide key={val.id} className='p-2'>
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
							</SwiperSlide>
						}) : 'null'
					}		
				</Swiper>
			</div>
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<div>
					<h1 className='mb-5 font-bold text-2xl'>Top Rated Movies</h1>
					<div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-7 gap-4'>
						{
							topRatedMovies.length !== 0 ? topRatedMovies.map((val)=>{
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
							}) : 'tidak ada'
						}
					</div>
				</div>
			</div>
		</div>
	)
}