'use client'
import Link from 'next/link';
import {useRouter} from 'next/navigation'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()
    const router = useRouter()
    console.log(pathname)

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                    <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Kevin</span><span className="self-center text-2xl font-bold whitespace-nowrap text-orange-600 dark:text-orange-400">&nbsp;Movies</span>
                </a>
                <div className="flex md:order-2">
                    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-700 rounded-lg text-sm p-2.5 mr-1" >
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <form onSubmit={(e)=>{
                            if(pathname!=='/search') {
                                e.preventDefault(); router.push(`search?query=${e.target.query.value}`);
                            }
                        }}>
                            <input type="text" name="query" id="query" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 dark:focus:ring-orange-700 dark:focus:border-orange-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search..."></input>
                        </form>
                    </div>
                    <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:ring-1 focus:border-orange-500 focus:ring-orange-500 dark:focus:border-orange-700 dark:focus:ring-orange-700 dark:text-gray-400 dark:hover:bg-gray-700" aria-controls="navbar-search" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <div className="relative mt-3 md:hidden">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <form onSubmit={(e)=>{
                            e.preventDefault(); 
                            router.push(`search?query=${e.target.searchnavbar.value}`)
                        }}>
                            <input type="text" name="searchnavbar" id="searchnavbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 dark:focus:ring-orange-700 dark:focus:border-orange-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search..."></input>
                        </form>
                    </div>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="/" className={`${pathname==='/' ? `md:text-orange-700 md:dark:text-orange-500` : `text-gray-900`} block py-2 pl-3 pr-4 rounded md:bg-transparent`} aria-current="page">Home</a>
                        </li>
                        <li className='group'>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className={`${pathname==='/category' ? `md:text-orange-700 md:dark:text-orange-500` : `text-gray-900`} flex items-center justify-between w-full py-2 pl-3  md:dark:hover:text-orange-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}>
                                Category 
                                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>
                            <div id="dropdownNavbar" className="z-10 font-normal absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-2 text-sm hidden group-hover:block text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <Link href={{ pathname: `/category`, query:`type=${'now_playing'}` }} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Now Playing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={{ pathname: `/category`, query:`type=${'popular'}` }} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Popular Movies
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={{ pathname: `/category`, query:`type=${'top_rated'}` }} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Top Rated Movies
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
