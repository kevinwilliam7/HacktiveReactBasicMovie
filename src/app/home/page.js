'use client'
import Navbar from '@/components/layout/navbar';
import { useEffect, useState } from 'react';
import { FaPlay } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import Slider from '@/components/movie/slider';
import Carousel from '@/components/movie/carousel';
import Listing from '@/components/movie/listing';

export default function HomeScreen() {
	const [topRatedMovies, setTopRatedMovies] = useState([]);
	const [upComingMovies, setUpComingMovies] = useState([]);
	const [popularMovies, setPopularMovies] = useState([]);
	const [searchMovies, setSearchMovies] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');

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

	const fetchSearchMovies = async () => {
		const res = await fetch(`${process.env.API_URL}/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`, {headers: {Authorization: 'Bearer '+process.env.API_KEY}});
		const data = await res.json();
		setPopularMovies(data.results);
	}

	useEffect(() => {
		fetchTopRatedMovies();
		fetchPopularMovies();
		fetchUpComingMovies();
		fetchSearchMovies();
	}, []);

	return (
		<div>
			<Navbar/>
			<Carousel movies={upComingMovies}/>
			<Slider title={'Upcoming Movies'} movies={upComingMovies}/>
			<Slider title={'Popular Movies'} movies={popularMovies}/>
			<Listing title={'Top Rated Movies'} movies={topRatedMovies}/>
		</div>
	)
}