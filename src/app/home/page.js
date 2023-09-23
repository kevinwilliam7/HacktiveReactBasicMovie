/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from 'react';
import Slider from '@/components/movie/slider';
import Carousel from '@/components/movie/carousel';
import 'swiper/css';
import 'swiper/css/pagination';
import Skeleton from '@/components/movie/card/skeleton';
import Link from 'next/link';

export default function HomeScreen() {
	const [topRatedMovies, setTopRatedMovies] = useState([]);
	const [upComingMovies, setUpComingMovies] = useState([]);
	const [popularMovies, setPopularMovies] = useState([]);
	const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

	const fetchTopRatedMovies = async () => {
		const res = await fetch(`${process.env.API_URL}/3/movie/top_rated?language=en-US&page=1`, {headers: {Authorization: 'Bearer '+process.env.API_KEY}});
		const data = await res.json();
		setTopRatedMovies(data.results);
	}

	const fetchUpComingMovies = async () => {
		const res = await fetch(`${process.env.API_URL}/3/movie/upcoming?language=en-US&page=1`, {headers: {Authorization: 'Bearer '+process.env.API_KEY}});
		const data = await res.json();
		setUpComingMovies(data.results);
	}

	const fetchPopularMovies = async () => {
		const res = await fetch(`${process.env.API_URL}/3/movie/popular?language=en-US&page=1`, {headers: {Authorization: 'Bearer '+process.env.API_KEY}});
		const data = await res.json();
		setPopularMovies(data.results);
	}

	const fetchNowPlayingMovies = async () => {
		const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, {headers: {Authorization: 'Bearer '+process.env.API_KEY}});
		const data = await res.json();
		setNowPlayingMovies(data.results);
	}

	useEffect(() => {
		fetchTopRatedMovies();
		fetchPopularMovies();
		fetchUpComingMovies();
		fetchNowPlayingMovies();
	}, []);

	function renderCarousel(){
		let items = []
		for(var i=0; i<2; i++) {
			items.push(<Skeleton key={i} dimension={'w-screen h-96'}></Skeleton>)
		}
		return <div className='grid grid-cols-2 gap-4'>{items}</div>
	}

	return (
		<div>
			<div className='max-w-screen-xl items-center mx-auto'>
				{upComingMovies.length!==0 
					? <Carousel movies={upComingMovies}/> 
					: renderCarousel()
				}
			</div>
			<div className='max-w-screen-xl items-center mx-auto'>
				<div className='grid grid-cols-2 justify-between'>
					<h1 className='p-4 font-bold text-2xl'>Now Playing</h1>
					<h1 className='p-4 font-semibold text-lg text-end text-orange-600 hover:orange-blue-900 '>
						<Link className='bg-orange-100 px-4 py-2 rounded-lg hover:bg-orange-300' href={'/'}>See All</Link>
					</h1>
				</div>
				<Slider movies={nowPlayingMovies}/> 
			</div>
			<div className='max-w-screen-xl items-center mx-auto'>
			<div className='grid grid-cols-2 justify-between'>
					<h1 className='p-4 font-bold text-2xl'>Popular Movies</h1>
					<h1 className='p-4 font-semibold text-lg text-end text-orange-600 hover:orange-blue-900 '>
						<Link className='bg-orange-100 px-4 py-2 rounded-lg hover:bg-orange-300' href={'/'}>See All</Link>
					</h1>
				</div>
				<Slider movies={popularMovies}/> 
			</div>
			<div className='max-w-screen-xl items-center mx-auto'>
			<div className='grid grid-cols-2 justify-between'>
					<h1 className='p-4 font-bold text-2xl'>Top Rated Movies</h1>
					<h1 className='p-4 font-semibold text-lg text-end text-orange-600 hover:orange-blue-900 '>
						<Link className='bg-orange-100 px-4 py-2 rounded-lg hover:bg-orange-300' href={'/'}>See All</Link>
					</h1>
				</div>
				<Slider movies={topRatedMovies}/> 
			</div>
		</div>
	)
}