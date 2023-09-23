import Link from 'next/link';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Skeleton from '../card/skeleton';
import Card from '../card';

export default function Carousel(props) {
	const movies = props.movies;
	function renderCarousel(){
		let items = []
		for(var i=0; i<2; i++) {
			items.push(<Skeleton key={i} dimension={'w-screen h-96'}></Skeleton>)
		}
		return <div className='grid grid-cols-2 gap-4'>{items}</div>
	}

	return (
		<>
			{
				movies.length!==0? 
				<div className='max-w-screen-xl items-center mx-auto'>
					<Swiper slidesPerView={2} autoplay={{delay: 2500, disableOnInteraction: false}} modules={[Autoplay, Pagination]} breakpoints={{ 260: { slidesPerView: 1 }, 640: { slidesPerView: 2 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 2 }, 1280: { slidesPerView: 2 }, 1536: { slidesPerView: 2 }}}>
						{movies.map((val) => {
							return <SwiperSlide key={val.id} className='p-2'>
								<Card val={val} size={'large'}/>
								<Link href={{ pathname: `/detail`, query:`id=${val.id}` }} >
									<div className='p-2 group group-hover:scale-125'>
									<h1 className="truncate overflow-hidden text-sm text-gray-900 font-semibold justify-center">{val.title} {' ('+new Date(val.release_date).getFullYear()+')'}</h1>
									<p className='truncate text-xs text-gray-900 font-normal'>{Date(val.release_date)}</p>
									</div>
								</Link>
							</SwiperSlide>
						})}		
					</Swiper>
				</div> : renderCarousel()
			}
		</>
	)
}
