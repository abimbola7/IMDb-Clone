"use client"

import React, { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error)
    console.log(error,"error message")
  }, [error])
  
  return (
    <div
    className="text-center mt-10"
    >
      <h1>{error}</h1>
      <button  className="hover:text-amber-600" onClick={()=>reset()} >Try Again</button>
    </div>
  )
}
