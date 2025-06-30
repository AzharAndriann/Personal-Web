"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ScrollToTop ()
{
  const [ isVisible, setIsVisible ] = useState( false )

  // Mendeteksi posisi scroll untuk menampilkan/menyembunyikan tombol
  useEffect( () =>
  {
    const toggleVisibility = () =>
    {
      if ( window.pageYOffset > 500 )
      {
        setIsVisible( true ) // Tampilkan tombol jika scroll > 300px
      } else
      {
        setIsVisible( false ) // Sembunyikan tombol jika scroll < 300px
      }
    }

    window.addEventListener( "scroll", toggleVisibility )
    return () => window.removeEventListener( "scroll", toggleVisibility )
  }, [] )

  // Fungsi untuk scroll ke atas
  const scrollToTop = () =>
  {
    window.scrollTo( {
      top: 0,
      behavior: "smooth", // Animasi smooth saat scroll ke atas
    } )
  }

  return (
    <>
      { isVisible && (
        <Button
          onClick={ scrollToTop }
          className="fixed bottom-8 right-8 z-50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 w-12 h-12"
          size="icon"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-14 w-h-14" />
        </Button>
      ) }
    </>
  )
}
