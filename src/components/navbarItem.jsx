"use client"

import Link from 'next/link'
import React from 'react'
import { useSearchParams } from "next/navigation"

export default function NavbarItem({title,param}) {
  const search = useSearchParams();
  const genre = search.get("genre");
  console.log(genre);
  return (
    <div>
      <Link
      className={`m-4 cursor-pointer hover:text-amber-600 font-semibold p-2 ${genre && genre === param && 'underline underline-offset-8 decoration-4 decoration-amber-600 rounded-lg' }`}
      href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  )
}
