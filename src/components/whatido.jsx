import React, { useEffect, useRef } from 'react';
import whatidonobg from "../assets/whatidonobg.png";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactLenis, useLenis } from "lenis/react";
import outro from '../assets/outro.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function WhatIDo() {
  const rootRef = useRef(null);

  useEffect(() => {
    /** TEXT REVEAL */
    gsap.utils.toArray('.animate-text').forEach((el) => {
      el.setAttribute('data-text', el.textContent.trim());

      ScrollTrigger.create({
        trigger: el,
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: 1,
        onUpdate: (self) => {
          const clipValue = Math.max(0, 100 - self.progress * 100);
          el.style.setProperty('--clip-value', `${clipValue}%`);
        },
      });
    });

    /** SERVICES HORIZONTAL */
    ScrollTrigger.create({
      trigger: '.services',
      start: 'top bottom',
      end: 'top top',
      scrub: 1,
      onUpdate: (self) => {
        const headers = document.querySelectorAll('.services-header');
        gsap.set(headers[0], { x: `${100 - self.progress * 100}%` });
        gsap.set(headers[1], { x: `${-100 + self.progress * 100}%` });
        gsap.set(headers[2], { x: `${100 - self.progress * 100}%` });
      },
    });

    /** SERVICES PIN + SCALE */
    ScrollTrigger.create({
      trigger: '.services',
      start: 'top top',
      end: `+=${window.innerHeight * 2}`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const headers = document.querySelectorAll('.services-header');

        if (self.progress <= 0.5) {
          const yProgress = self.progress / 0.5;
          gsap.set(headers[0], { y: `${yProgress * 100}%` });
          gsap.set(headers[2], { y: `${yProgress * -100}%` });
        } else {
          gsap.set(headers[0], { y: '100%' });
          gsap.set(headers[2], { y: '-100%' });

          const scaleProgress = (self.progress - 0.5) / 0.5;
          const minScale = window.innerWidth <= 1000 ? 0.3 : 0.1;
          const scale = 1 - scaleProgress * (1 - minScale);

          headers.forEach((h) => gsap.set(h, { scale }));
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main
      ref={rootRef}
      className="bg-[#1a1a1a] font-manrope text-white "
    >
      {/* HERO */}
      {/* <section className="relative h-[100svh] p-8 flex items-center justify-center overflow-hidden">
        <div className="w-[300px] aspect-[5/7] overflow-hidden">
          <img src={hero} className="w-full h-full object-cover" />
        </div>
      </section> */}

      {/* ABOUT */}
      <section className="relative h-[100svh] p-8 flex lg:top-60 items-center justify-center">
        <h1 className="animate-text relative w-[60%] mx-auto text-[#4f4f4f] text-[4rem] font-black leading-tight tracking-[-0.15rem] text-center max-[1000px]:text-[2rem] max-[1000px]:w-full">
          I create websites and digital experiences that value clarity above excess. Through minimal form and pricise detail. I aim to build work that lasts and offers a quiet sense of order.</h1>
      </section>

      {/* SERVICES */}
      <section className="services relative h-[100svh] lg:top-70 flex flex-col justify-center overflow-hidden">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="services-header w-full px-8 bg-[#1a1a1a] will-change-transform"
          >
            <img src={whatidonobg} className="object-contain w-full" />
          </div>
        ))}
      </section>

      {/* SERVICES COPY */}
      <section className="relative px-8 pb-[35svh] text-center">
        <h1 className=" relative mt-[-400px] w-[60%] lg:top-70 mx-auto text-white/75 text-[4rem] font-black leading-tight tracking-[-0.15rem] max-[1000px]:text-[2rem] max-[1000px]:w-full">
          FREELANCING <br /> Machine Learning <br /> Artificial Intelligence <br /> Web Development <br /> Problem Solving <br /> UI UX          
        </h1>
      </section>

      {/* OUTRO */}
      {/* <section className="relative h-[100svh] p-8 flex items-center justify-center overflow-hidden">
        <div className="w-[300px] aspect-[5/7] overflow-hidden">
          <img src={outro} className="w-full h-full object-cover" />
        </div>
      </section> */}
    </main>
  );
}
