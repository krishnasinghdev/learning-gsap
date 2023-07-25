"use client"
import React, { useLayoutEffect, useState } from 'react'
import { gsap } from "gsap";

export default function Gsap() {
  const [render, setRender] = useState(0)

  useLayoutEffect(() => {
    // gsap.fromTo("#box", { x: 0, opacity: 0 }, {
    //   x: 500, background: 'red', opacity: 1, duration: 3, rotate: 180, skewX: 30, yoyo: true, repeat: 1
    // });

    // let tl = gsap.timeline()
    // tl.to("#box", { x: 900, scale: 0, duration: 2, opacity: 0 })
    gsap.registerEffect({
      name: "explode",
      effect: (targets: gsap.TweenTarget, config: { duration: number; }) => {
        return gsap.to(targets, { duration: config.duration, opacity: 0 });
      },
      defaults: { duration: 2 },
      extendTimeline: true,
    });
    gsap.effects.explode("#box", {
      direction: "up",
      duration: 3
    })

  }, [render])

  return (
    <div className='bg-slate-200 min-h-screen pt-2' key={render}>
      <button onClick={() => setRender(prev => prev + 1)} className='mx-auto block px-4 py-2 text-white uppercase bg-red-400 shadow-md rounded-xl mb-8'>Refresh</button>


      <div id="box" className='bg-yellow-200 p-12 inline-block rounded-md'>Box</div>
    </div>
  )
}  
