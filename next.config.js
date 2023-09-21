/** @type {import('next').NextConfig} */
const nextConfig = {  
  reactStrictMode: false,
  images: {
    domains: ["image.tmdb.org"],
  },
  env: {
    API_URL: 'https://api.themoviedb.org',
    API_KEY: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzRlMTU4NGYyNDcwMDE0MWU3MGE5YjNkYjc3MDcxNCIsInN1YiI6IjYwYjRlYmU2YTA2NjQ1MDA2ZTdiZWI0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TStROR4q0r9ekaZxnus7X7ozB73Fk9ECVY4iHRC3hN4'
  }
}

module.exports = nextConfig
