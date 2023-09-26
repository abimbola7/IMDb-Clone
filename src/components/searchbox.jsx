"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';


export default function SearchBox() {
  const router = useRouter()
  const [ search, setSearch ] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      return;
    } 
    router.push(`/search/${search}`)
  };
  return (
    <form
    onSubmit={handleSubmit}
    className="flex max-w-6xl mx-auto justify-between px-5"
    >
      <input
      value={search}
      type="text"
      onChange={(e)=>setSearch(e.target.value)}
      placeholder="Search keywords..."
      className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
      />
      <button
      disabled={!search}
      type="submit"
      className="text-amber-500 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  )
}
