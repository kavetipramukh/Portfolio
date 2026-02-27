import React, { useRef } from "react";
import { assets } from "../assets/assets";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, SquareArrowOutUpRight } from "lucide-react";


const Projects = () => {
  const container = useRef(null);

  const cardsData = [
    {
      title: "PingUp — Social Media Platform",
      copy: "A full-stack social media app with real-time chat, posts & stories, follow system, and secure authentication. Built with Clerk, Inngest, and ImageKit for scalable workflows and optimized media delivery.",
      github: "https://github.com/kavetipramukh/PingUp",
      live: "",
      stack: ["React.js", "Clerk", "Inngest", "ImageKit", "Tailwind CSS", "MongoDB"],
    },
    {
      title: "Hruday Photography — Freelance project",
      copy: "Built a modern portfolio website for Hruday Photography with a clean gallery layout, mobile-first design, and optimized image loading to showcase work professionally and drive client inquiries.",
      github: "https://github.com/kavetipramukh/hruday-samala-photography",
      live: "https://hrudaysamala-photography.vercel.app/",
      stack: ["React.js", "Tailwind CSS", "Vercel"],
    },
    {
      title: "Medify - Medical Center Finder and Booking App",
      copy: "Medify is a user-friendly web app that helps users find nearby medical centers, view details, and book appointments. Built with React.js and Tailwind CSS, it offers a seamless experience for managing healthcare needs.",
      github: "https://github.com/kavetipramukh/Medify",
      live: "https://medify-pramukh.netlify.app/",
      stack: ["React.js", "Tailwind CSS", "Netlify"],
    },
  ];

  const bgColors = [
    "bg-[#c3abff]",
    "bg-[#474646] text-white",
    "bg-[#fed35b]",
  ];

  // useGSAP(
  //   () => {
  //     const cards = gsap.utils.toArray(".card");

  //     cards.forEach((card, index) => {
  //       if (index === cards.length - 1) return;

  //       ScrollTrigger.create({
  //         trigger: card,
  //         start: "top 35%",
  //         endTrigger: cards[cards.length - 1],
  //         end: "top 35%",
  //         pin: true,
  //         scrub: 1,
  //         pinSpacing: false,
  //         invalidateOnRefresh: true,
  //       });
  //     });
  //   },
  //   { scope: container }
  // );

  

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".card");

      ScrollTrigger.matchMedia({
        // 🖥 DESKTOP (pin stack)
        "(min-width: 769px)": () => {
          cards.forEach((card, index) => {
            if (index === cards.length - 1) return;

            ScrollTrigger.create({
              trigger: card,
              start: "top 35%",
              endTrigger: cards[cards.length - 1],
              end: "top 35%",
              pin: true,
              pinSpacing: false,
              // anticipatePin: 1, // 👈 smoother after other pinned sections
            });
          });
        },

        // 📱 MOBILE (smooth scroll)
        "(max-width: 768px)": () => {
          cards.forEach((card) => {
            gsap.from(card, {
              opacity: 0,
              y: 40,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                once: true,
              },
            });
          });
        },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="flex flex-col">
      {cardsData.map((card, index) => (
        <div key={index} className="card relative h-[300px]">
          <div
            className={`card-inner relative w-full h-full p-8 flex gap-16 ${bgColors[index]}`}
          >
            <div className="flex-[3] flex flex-col">
              <h1 className="text-md font-semibold leading-none mb-3 lg:text-2xl xl:text-4xl">
                {card.title}
              </h1>
              <p className="text-sm xl:text-xl">{card.copy}</p>
              {/* <p className="text-sm mt-2">{card.stack.map((tech) => (<span key={tech} className="inline-block bg-black text-white px-2 py-1 rounded-md mr-2 mb-2 text-xs">{tech}</span>))}</p> */}
              <div className="mt-2 gap-2 flex-wrap mb-1 hidden sm:flex">
                {card.stack.map((tech) => (
                  <span key={tech} className={`inline-block lg:px-2 py-1 text-sm underline underline-offset-4 decoration-1 decoration-${bgColors[index].split(' ')[0].replace('bg-', '')}/50`}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 flex-wrap mt-auto overflow-hidden">
                <a href={card.github} alt="GitHub repository" title="GitHub" target="_blank" rel="noopener noreferrer" className="px-3 py-3 bg-white/40 hover:bg-white/70 text-black/80 rounded-md inline-flex items-center gap-2"><span className="hidden lg:inline">GitHub</span>
                  <Github className="w-5 h-5" />
                  
                </a>
                <a href={card.live} title="Live Demo" target="_blank" rel="noopener noreferrer" className="px-3 py-3 bg-white/40 hover:bg-white/70 text-black/80 rounded-md inline-flex items-center gap-2"><span className="hidden lg:inline">Live Demo</span>
                  <SquareArrowOutUpRight className="w-5 h-5" />
                  
                </a>
              </div>
            </div>

            <div className="flex-1 aspect-video rounded-xl overflow-hidden lg:block hidden">
              <img
                src={assets[`card_${index + 1}`]}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
