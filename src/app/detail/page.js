'use client';
import Navbar from '@/components/layout/navbar';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FaPlay, FaStar, FaTag } from 'react-icons/fa';
export const dynamic='force-dynamic';
// import data from '@/assets/json/detail_movies.json';
// import data1 from '@/assets/json/similar_movies.json';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import Slider from '@/components/movie/slider';

export default function Detail(props) {
	const [detailMovies, setDetailMovies] = useState(null);
	const [similarMovies, setSimilarMovies] = useState([]);
	console.log(props);

	const fetchDetail = async () => {
		const res = await fetch(process.env.API_URL+`/3/movie/${'1008042'}?language=en-US&page=1`, {headers: {Authorization: 'Bearer '+process.env.API_KEY}});
		const data = await res.json();
		setDetailMovies(data);
	}

	const fetchSimilar = async () => {
		const res = await fetch(process.env.API_URL+`/3/movie/${'1008042'}/similar?language=en-US&page=1`, {headers: {Authorization: 'Bearer '+process.env.API_KEY}});
		const data = await res.json();
		setSimilarMovies(data.results);
	}

	useEffect(() => {
		fetchDetail();
		fetchSimilar();
	}, []);

	return (
		<div>
			<Navbar/>
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				{detailMovies!==null 
					? <div>
						<div className='group relative max-w-full rounded-lg overflow-hidden mb-5 group cursor-pointer'>
							<Image className='w-screen max-h-96 object-cover group-hover:scale-110 duration-1000' src={'https://image.tmdb.org/t/p/original'+detailMovies.backdrop_path} width={500} height={500} alt="backdrop_path" />
							<div className="h-full absolute top-0 w-full flex flex-col justify-center items-center">
								<div className='rounded-full group-hover:bg-opacity-70 w-16 h-16 flex items-center justify-center bg-opacity-0 bg-gray-500'>
									<FaPlay className='text-orange-400' size={'30px'}/>
								</div>
							</div>
						</div>
						<div className='grid grid-cols-12 gap-4'>
							<div className="col-span-4 md:col-span-3 sm:col-span-4 lg:col-span-2 xl:col-span-2 w-44relative group max-w-full rounded-lg">
								<Image className='rounded-lg' src={'https://image.tmdb.org/t/p/original'+detailMovies.poster_path} width={250} height={250} alt='poster' />
							</div>
							<div className='col-span-8 md:col-span-9 sm:col-span-8 lg:col-span-10 xl:col-span-10'>
								<h1 className='font-bold text-lg sm:text-xl md:text-xl xl:text-xl 2xl:text-2xl mb-2'>{detailMovies.title} {' ('+new Date(detailMovies.release_date).getFullYear()+')'}</h1>
								<h2 className='font-medium text-md mb-2'>{detailMovies.tagline}</h2>
								<div className='flex mb-4'>
									<div className='flex-none w-28 text-xs font-bold'>May 03, 2023</div>
									<div className='flex-none w-20 text-xs'>USA</div>
									<div className='flex-none w-20 text-xs'>{detailMovies.runtime} Min</div>
								</div>
								<div className='hidden xs:block sm:block md:block lg:block xl:block'>
									<hr className='mb-2'></hr>
									<div className='flex md:flex xl:flex gap-4 mb-4'>
										<div className='p-5 bg-gray-100 font-semibold text-xl'>
											{detailMovies.vote_average}
										</div>
										<div className='grid grid-rows-2'>
											<div className='flex'>
												{
													[1,2,3,4,5,6,7,8,9,10].map((val) => {
														if(val <= parseInt(val.vote_average)) {
															return <div key={val} className='p-1'><FaStar className={'text-yellow-500'}/></div>
														} else {
															return <div key={val} className='p-1'><FaStar className={'text-black'}/></div>
														}
													})
												}
											</div>
											<div className='text-md font-normal'>{detailMovies.vote_count} Votes</div>
										</div>
									</div>
									<hr className='mb-2'></hr>
								</div>
								<div className='flex'>
									{detailMovies.genres.map((val) => {
										return <div key={val.id}><Link href="{}" className='flex-none pt-2 pr-2 pb-2 text-sm font-semibold hover:text-blue-500'>
											{val.name}
										</Link></div>
									})}
								</div>
							</div>
						</div>
						<div className='pt-5 font-normal text-md mb-5'>{detailMovies.overview}</div>
					</div>
					: 'null'}
				<Slider title={'Similar Movies'} movies={similarMovies}/>
			</div>
		</div>
	)
} 
