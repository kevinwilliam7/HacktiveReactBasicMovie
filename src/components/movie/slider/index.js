import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Skeleton from '@/components/skeleton/card';
import { FaPlay } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

export default function Slider(props) {
	const movies = props.movies;

	return (
		<Swiper slidesPerView={6} autoplay={{delay: 2500, disableOnInteraction: false}} breakpoints={{ 260: { slidesPerView: 3 }, 640: { slidesPerView: 4 }, 768: { slidesPerView: 5 }, 1024: { slidesPerView: 6 }, 1280: { slidesPerView: 7 }, 1536: { slidesPerView: 7 },
		}} modules={[Autoplay, Pagination]}>
			{movies.length !== 0 ? movies.map((val) => {
				return <SwiperSlide key={val.id} className='p-2'>
					<div className='group relative max-w-full rounded-lg overflow-hidden'>
						<Link href={{ pathname: `/detail`, query:`id=${val.id}` }} >
							<div className="bg-red-100 w-44 h-64 relative group max-w-full rounded-lg">
								<Image className='group-hover:scale-125 group-hover:blur-sm rounded-lg h-64 w-44' src={`https://image.tmdb.org/t/p/original/${val.poster_path}`} width={250} height={250} alt='poster' />
								<div className="group-hover:h-full group-hover:opacity-100 absolute top-0 w-full h-0 flex flex-col justify-center items-center hover:bg-transparent opacity-0 duration-500">
									<FaPlay className='text-orange-400' size={'30px'}/>
								</div>
							</div>
						</Link>
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
