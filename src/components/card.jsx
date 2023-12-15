import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiThumbsUp } from "react-icons/fi"

export default function Card({result}) {
  return (
    <div
    className='m-2 transition-shadow duration-200 rounded-lg cursor-pointer sm:border sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md sm:border-slate-400 group'
    >
      <Link 
      href={`/movie/${result.id}`}
      >
        <Image
        src={`https://image.tmdb.org/t/p/original/${result.backdrop_path||result.poster_path}`}
        alt="poster"
        width={500}
        height={300}
        className="transition-opacity duration-200 sm:rounded-t-lg group-hover:opacity-80"
        placeholder='blur'
        blurDataURL='/spinner.svg'
        style={
          {
            maxWidth : '100%',
            height : 'auto'
          }
        }
        />
        <div
        className='p-2'
        >
          <p
          className='line-clamp-3'
          >{result.overview}</p>
          <h2 
          className="text-lg font-bold truncate">
            {result.title || result.name}
          </h2>
          <p
          className='flex items-center'
          >{result.release_date || result.first_air_date} 
            <FiThumbsUp className="h-5 ml-3 mr-1"/>
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  )
}
