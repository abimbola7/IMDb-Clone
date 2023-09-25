"use client"

import { MdLightMode } from "react-icons/md"
import { BsFillMoonFill } from "react-icons/bs"
import { useTheme } from "next-themes"

import React, { useEffect, useState } from 'react'

export default function DarkModeSwitch() {
  const { systemTheme ,theme , setTheme }  = useTheme();
  const [mounted, setMounted] = useState(false)
  const currentTheme = theme === "system" ? systemTheme : theme
  useEffect(() => {
    setMounted(true);
  }, [])
  
  return (
    <>
      {
        mounted && (currentTheme === 'dark' ? (
          <MdLightMode
          className="cursor-pointer text-xl hover:text-amber-500"
          onClick={()=>setTheme('light')}
          />
        ) : (
          <BsFillMoonFill
          className="cursor-pointer text-xl hover:text-amber-500"
          onClick={()=>setTheme('dark')}
          />
        ))
      }
    </>
  )
}
