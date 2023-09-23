import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaPlay } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Skeleton from '../card/skeleton';
import Card from '../card';

export default function Slider(props) {
	const movies = props.movies;

	return (
		<Swiper slidesPerView={6} autoplay={{delay: 2500, disableOnInteraction: false}} breakpoints={{ 260: { slidesPerView: 3 }, 640: { slidesPerView: 4 }, 768: { slidesPerView: 5 }, 1024: { slidesPerView: 6 }, 1280: { slidesPerView: 7 }, 1536: { slidesPerView: 7 },
		}} modules={[Autoplay, Pagination]}>
			{movies.length !== 0 ? movies.map((val) => {
				return <SwiperSlide key={val.id} className='p-2'>
					<div className='group relative max-w-full rounded-lg overflow-hidden'>
						<Card dimension={`w-44 h-64`} val={val}/>
					</div>
					<Link href={{ pathname: `/detail`, query:`id=${val.id}` }} >
						<div className='p-2 group group-hover:scale-125'>
							<h1 className="truncate overflow-hidden text-sm text-gray-900 font-semibold justify-center">{val.title} {' ('+new Date(val.release_date).getFullYear()+')'}</h1>
							<p className='truncate text-xs text-gray-900 font-normal'>{Date(val.release_date)}</p>
						</div>
					</Link>
				</SwiperSlide>
				}) : <div>
					<SwiperSlide className='p-2'><Skeleton dimension={'w-44 h-64'}/></SwiperSlide>
					<SwiperSlide className='p-2'><Skeleton dimension={'w-44 h-64'}/></SwiperSlide>
					<SwiperSlide className='p-2'><Skeleton dimension={'w-44 h-64'}/></SwiperSlide>
					<SwiperSlide className='p-2'><Skeleton dimension={'w-44 h-64'}/></SwiperSlide>
					<SwiperSlide className='p-2'><Skeleton dimension={'w-44 h-64'}/></SwiperSlide>
					<SwiperSlide className='p-2'><Skeleton dimension={'w-44 h-64'}/></SwiperSlide>
					<SwiperSlide className='p-2'><Skeleton dimension={'w-44 h-64'}/></SwiperSlide>
				</div>
			}		
		</Swiper>
	)
}
