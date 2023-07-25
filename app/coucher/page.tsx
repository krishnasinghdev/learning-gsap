"use client"
import Image from 'next/image'
import { gsap } from 'gsap'
import { useLayoutEffect, useRef, useState } from 'react'
import { ScrollTrigger, TextPlugin } from 'gsap/all'

export default function Coucher() {
  const [render, setRender] = useState(0)
  const tl = gsap.timeline()
  const textRef = useRef(null)

  gsap.registerPlugin(TextPlugin)
  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    tl.from('#navbar img, #navbar a ', { y: '-200', duration: 2, opacity: 0, stagger: 0.5 })

    tl.from('#hero h1, #hero div img', { x: '-200', duration: 1, opacity: 0, stagger: 0.3 })

    tl.from('#mainimg', { scale: 0.3, opacity: 0, duration: 1, })
    tl.to("#message", {
      duration: 10, text: "Does my snehil Liked this ?",
      scrollTrigger: {
        trigger: '#card',
        scroller: 'body',
        // markers: true,
        start: "top 50%",
      }
    });

    gsap.from('#card div', {
      scale: 0, duration: 1, opacity: 0, stagger: 0.3,
      scrollTrigger: {
        trigger: '#card',
        scroller: 'body',
        // markers: true,
        start: "top 50%",
      }
    })

    // tl.from('#message', { x: '-400', duration: 3, opacity: 0, stagger: 0.5 })
    // gsap.to("#message", { duration: 2, text: "thank you for waiting", delay: 1 });
    // gsap.to(textRef.current, {
    //   duration: 1.5,
    //   delay: 2,
    //   text: 'Hello, GSAP TextPlugin!',
    // });
  }, [render])



  return (
    <main className='bg-black text-white uppercase px-8 h-full' key={render}>
      {/* NAVBAR */}
      <nav id='navbar' className='flex justify-between border-b-2 border-cyan-400 items-center '>
        <Image src='/google.png' width={120} height={50} alt='google' />
        <div className='flex justify-between gap-6'>
          <a href='#'>Service</a>
          <a href='#'>About us</a>
          <a href='#'>Cases</a>
        </div>
        <a>Signup</a>
      </nav>

      {/* HERO */}
      <section id='hero' className='flex justify-between px-8 py-20 gap-8'>
        <div className='flex flex-col justify-center gap-4'>
          <h1 className='text-8xl'>Unlimited</h1>
          <h1 className='text-8xl'>Pretentious</h1>
          <div className='flex gap-4 border-b-2 border-cyan-400 pb-6'>
            <Image src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80' width={90} height={90} alt='user' className='rounded-full  border-4 border-black' />
            <Image src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80' width={90} height={90} alt='user' className='rounded-full -ml-8 border-4 border-black' />
            <Image src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80' width={90} height={90} alt='user' className='rounded-full -ml-8 border-4 border-black' />
            <h1 className='text-8xl'> Ideas</h1>
          </div>
          <div className="flex justify-between mt-4">
            <h1>Our Solutions</h1>
            <h1>We Provide the  full <br />funnel approach</h1>
          </div>
        </div>
        <Image src='https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80' width={500} height={500} alt='hero' id='mainimg' className='rounded-lg' />
      </section>

      {/* SERVICES */}
      <h1 className='text-7xl text-center text-cyan-400'>Know More About us</h1>
      <section className='grid grid-cols-3 justify-between gap-6 px-8 py-16' id='card'>
        <div className='flex flex-col justify-center gap-4 border border-cyan-400 text-center p-4 rounded-md'>
          <h1 className='text-3xl'>Services</h1>
          <div className='text-sm'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta id sequi temporibus sit possimus quam aut, eaque consectetur culpa, harum aspernatur? Aut veritatis quaerat, iusto mollitia nulla suscipit a ex eius voluptatibus autem iste nam exercitationem iure aspernatur
          </div>
        </div>
        <div className='flex flex-col justify-center gap-4 border border-cyan-400 text-center p-4 rounded-md'>
          <h1 className='text-3xl'>Information</h1>
          <div className='text-sm'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta id sequi temporibus sit possimus quam aut, eaque consectetur culpa, harum aspernatur? Aut veritatis quaerat, iusto mollitia nulla suscipit a ex eius voluptatibus autem iste nam exercitationem iure aspernatur
          </div>
        </div>
        <div className='flex flex-col justify-center gap-4 border border-cyan-400 text-center p-4 rounded-md'>
          <h1 className='text-3xl'>Address</h1>
          <div className='text-sm'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta id sequi temporibus sit possimus quam aut, eaque consectetur culpa, harum aspernatur? Aut veritatis quaerat, iusto mollitia nulla suscipit a ex eius voluptatibus autem iste nam exercitationem iure aspernatur
          </div>
        </div>

      </section>
      <button onClick={() => setRender(prev => prev + 1)} className='fixed bottom-2 right-2 z-10 px-4 py-2 text-white uppercase bg-red-400 shadow-md rounded-xl mb-8'>Refresh</button>

      <h1 ref={textRef} className='text-7xl text-center text-cyan-400 mt-9' id='message'></h1>
      {/* <h1 ref={textRef} className='text-7xl text-center text-cyan-400 mt-9' id='message'>Does my snehil Liked this?</h1> */}
      <h1 className='text-2xl text-center text-white py-9'>This is Gsap magic</h1>

    </main>
  )
}
