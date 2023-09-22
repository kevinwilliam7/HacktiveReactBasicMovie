/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Navbar from '@/components/layout/navbar';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import Slider from '@/components/movie/slider';
import Carousel from '@/components/movie/carousel';
import Listing from '@/components/movie/listing';

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
			<Navbar/>
			<Carousel movies={upComingMovies}/>
			<Slider title={'Now Playing'} movies={nowPlayingMovies}/>
			<Slider title={'Popular Movies'} movies={popularMovies}/>
			<Slider title={'Top Rated Movies'} movies={topRatedMovies}/>
			{/* <Listing title={'Top Rated Movies'} movies={topRatedMovies}/> */}
		</div>
	)
}