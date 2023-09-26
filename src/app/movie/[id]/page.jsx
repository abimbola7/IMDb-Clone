import Image from 'next/image';
import React from 'react'
const API_KEY = process.env.API_KEY

async function getMovie(movieId) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
  return await res.json();
}

export default async function MoviePage({params}) {
  const movieId = params.id;
  const movie = await getMovie(movieId)
  console.log(movie)
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center  max-w-6xl mx-auto content-center md:space-x-6">
      <Image
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path||movie.poster_path}`}
        alt="the movie poster is not available"
        width={500}
        height={300}
        className="rounded-lg "
        placeholder='blur'
        blurDataURL='/spinner.svg'
        style={
          {
            maxWidth : '100%',
            height : '100%'
          }
        }
        />
        <div
        className='p-2'
        >
          <h2
          className="mb-3 font-bold text-lg"
          >{movie.title || movie.name}</h2>
          <p className='text-lg mb-3'>
            <span className='font-semibold mr-1'>Overview:</span>
            {movie.overview}
          </p>
          <p>
            <span className="font-semibold mr-1">
              Date Released:
            </span>
            {movie.release_date}
          </p>
          <p>
            <span className="font-semibold mr-1">
              Rating:
            </span>
            {movie.vote_average.toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  )
}
