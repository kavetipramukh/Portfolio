import React, { useRef } from "react";
import { assets } from "../assets/assets";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ReactLenis, useLenis } from "lenis/react";

// gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const container = useRef(null);
  // const lenis = useLenis();

  const cardsData = [
    {
      title: "Frontend project",
      copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Geo based app",
      copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "E-commerce website",
      copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  const bgColors = [
    "bg-[#c3abff]",
    "bg-[#ffb261]",
    "bg-[#fed35b]",
    // "bg-[#1e1e1e] text-white",
  ];

  // 🔗 Lenis + ScrollTrigger sync
  // React.useEffect(() => {
  //   if (!lenis) return;

  //   lenis.on("scroll", ScrollTrigger.update);
  // }, [lenis]);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".card");

      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;

        ScrollTrigger.create({
          trigger: card,
          start: "top 35%",
          endTrigger: cards[cards.length - 1],
          end: "top 35%",
          pin: true,
          scrub: 1,
          pinSpacing: false,
        });
      });
    },
    { scope: container }
  );

  return (
    
      <section ref={container} className="flex flex-col">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="card relative h-[300px]"
          >
            <div
              className={`card-inner relative w-full h-full p-8 flex gap-16 ${bgColors[index]}`}
            >
              <div className="flex-3">
                <h1 className="text-6xl font-semibold leading-none mb-10">
                  {card.title}
                </h1>
                <p className="">{card.copy}</p>
              </div>

              <div className=" flex-1 aspect-video rounded-xl overflow-hidden">
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


