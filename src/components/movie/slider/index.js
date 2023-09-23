import Link from 'next/link';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Skeleton from '../card/skeleton';
import Card from '../card';

export default function Slider(props) {
	const movies = props.movies;
	function renderSlider(){
		let items = []
		for(var i=0; i<7; i++) {
			items.push(<Skeleton className="hi" key={i} dimension={'w-screen h-64'}></Skeleton>)
		}
		return <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4'>{items}</div>
	}

	return (
		<>
			{
				movies.length!==0? <Swiper slidesPerView={6} autoplay={{delay: 2500, disableOnInteraction: false}} breakpoints={{ 260: { slidesPerView: 3 }, 640: { slidesPerView: 4 }, 768: { slidesPerView: 5 }, 1024: { slidesPerView: 6 }, 1280: { slidesPerView: 7 }, 1536: { slidesPerView: 7 }, }} modules={[Autoplay, Pagination]}>
					{movies.map((val) => {
						return <SwiperSlide key={val.id} className='p-2'>
							<Card val={val} size={'normal'}/>
							<Link href={{ pathname: `/detail`, query:`id=${val.id}` }} >
								<div className='p-2 group group-hover:scale-125'>
									<h1 className="truncate overflow-hidden text-sm text-gray-900 font-semibold justify-center">{val.title} {' ('+new Date(val.release_date).getFullYear()+')'}</h1>
									<p className='truncate text-xs text-gray-900 font-normal'>{Date(val.release_date)}</p>
								</div>
							</Link>
						</SwiperSlide>
						})
					}		
				</Swiper> : renderSlider()
			}
		</>
	)
}
