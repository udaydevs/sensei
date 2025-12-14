"use client"
import Features from "@/components/items/features"
import Footer from "@/components/items/footer"
import Hero from "@/components/items/hero"
import Navbar from "@/components/items/navbar"
import Testimonials from "@/components/items/testimonials"

export default function Page(){
  return(
    <>
      <div className="relative">
        <Navbar/>
        <Hero/>
        <Features/>
        <Testimonials/>
        <Footer/>
      </div>
    </>
  )
}