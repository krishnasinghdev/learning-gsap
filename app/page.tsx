import Image from 'next/image'
import Gsap from './gsap'
import Button from '@/components/button'

export default function Home() {
  return (
    <main className="">
      <h1 className='text-black text-xl text-center font-semibold  bg-red-300 py-2 px-4'>Hello Krishna <br /> You are learning GSAP</h1>
      <Gsap />
    </main>
  )
}
