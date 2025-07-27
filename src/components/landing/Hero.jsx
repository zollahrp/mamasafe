"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <Image
        src="/img/hero.jpg"
        alt="Gambar Ibu Hamil"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="absolute inset-0 z-20 flex items-end">
        <div className="max-w-screen-2xl mx-auto w-full px-8 lg:px-20 pb-20 text-white">
          <h1 className="text-2xl md:text-4xl font-bold leading-snug mb-2">
            Temani Perjalanan Kehamilanmu, <br />
            Setiap Langkah Lebih Tenang
          </h1>
          <p className="text-sm md:text-base max-w-md mb-12">
            Pantau kehamilan, konsultasi dengan ahli, dan rasakan dukungan komunitas semua dalam satu aplikasi yang ramah untuk semua.
          </p>
        </div>
      </div>

      <div className="absolute z-20 bottom-6 left-1/2 -translate-x-1/2">
        <ChevronDown className="w-6 h-6 animate-bounce text-white" />
      </div>
    </section>
  )
}
