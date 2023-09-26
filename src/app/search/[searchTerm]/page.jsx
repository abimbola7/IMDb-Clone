const API_KEY = process.env.API_KEY;

import Results from '@/components/results';
import React from 'react'


export default async function SearchTerm({params}) {
  console.log(params.searchTerm);
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`)
  if (!res.ok){
    throw new Error("Error fetching data")
  }
  const data = await res.json();
  const results = data.results
  console.log(results)
  return (
    <div>
      {
        results && results.length === 0 && (
          <h1
          className="text-center"
          >No results found</h1>
        )
      }
      {
        results && results.length !== 0 && (
          <Results results={results}/>
        )
      }
    </div>
  )
}
