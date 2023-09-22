/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from 'react';
import Slider from '@/components/movie/slider';
import Carousel from '@/components/movie/carousel';
import 'swiper/css';
import 'swiper/css/pagination';

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

	return (
		<div>
			<Carousel movies={upComingMovies}/>
			<div className='max-w-screen-xl items-center mx-auto'>
				<h1 className='mb-5 font-bold text-2xl'>Now Playing</h1>
				<Slider movies={nowPlayingMovies}/>
			</div>
			<div className='max-w-screen-xl items-center mx-auto'>
				<h1 className='mb-5 font-bold text-2xl'>Popular Movies</h1>
				<Slider movies={popularMovies}/>
			</div>
			<div className='max-w-screen-xl items-center mx-auto'>
				<h1 className='mb-5 font-bold text-2xl'>Top Rated Movies</h1>
				<Slider movies={topRatedMovies}/>
			</div>
			{/* <Listing title={'Top Rated Movies'} movies={topRatedMovies}/> */}
		</div>
	)
}