'use client';
import { gsap } from 'gsap';
import { useLayoutEffect, useRef, useState } from 'react';
import { ScrollTrigger, TextPlugin } from 'gsap/all';

export default function Coucher() {
  const [render, setRender] = useState(0);
  const tl = gsap.timeline();

  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);

  function time() {
    let a = 0;
    setInterval(function () {
      a = a + Math.floor(Math.random() * 10);

      if (a < 100) {
        // @ts-ignore
        document.querySelector('#loader h1').innerHTML = a + '%';
      } else {
        a = 100;
        // @ts-ignore
        document.querySelector('#loader h1').innerHTML = a + '%';
      }

      console.log(a);
    }, 150);
  }

  useLayoutEffect(() => {
    // tl.to("#loader h1",
    //   {
    //     scale: 1.5,
    //     delay: 1,
    //     onStart: time()
    //   }
    // )
    // tl.to('#loader', {
    //   y: '-100vh',
    //   delay: 1,
    //   duration: 1.5
    // })
    tl.to('#home h1', {
      transform: 'translateX(-100%)',
      fontWeight: '100',
      scrollTrigger: {
        trigger: '#home',
        scroller: 'body',
        markers: true,
        start: 'top 0',
        end: 'top -100%',
        scrub: 3,
        pin: true,
      },
    });
  }, [render]);

  return (
    <>
      <div
        id='loader'
        className='h-screen bg-slate-400 font-sans font-semibold flex justify-center items-center'
      >
        <h1 className='text-4xl' id='counter'>
          0%
        </h1>
      </div>
      <div className='h-screen w-full  flex items-center' id='home'>
        <h1 className='text-[500px] whitespace-nowrap extrabold  '>
          WE BUILD BRANDS!
        </h1>
      </div>
    </>
  );
}
