import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroText = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".singleLine > div", {
        y: 200,
        ease: "power4.out",
        delay: 0.4,
        duration: 1.6,
        stagger: { amount: 0.35 },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const monoStyle = {
    fontFamily: "Major Mono Display, monospace",
  };

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen bg-black flex items-center justify-center px-4"
    >
      <div className="w-full max-w-6xl flex flex-col items-center justify-center gap-2 sm:gap-3">
        {/* Line 1 */}
        <div className="singleLine w-full overflow-hidden flex justify-end">
          <div className="text-white leading-none font-semibold tracking-tight text-[11vw] sm:text-[9vw] md:text-[7vw] lg:text-[5.6vw]">
            <span style={monoStyle} className="text-zinc-400">
              “
            </span>
            C<span style={monoStyle} className="text-zinc-400">o</span>DE
            <span style={monoStyle} className="text-zinc-400">R</span>,
          </div>
        </div>

        {/* Line 2 */}
        <div className="singleLine w-full overflow-hidden flex justify-center sm:justify-start">
          <div className="text-white leading-none font-semibold tracking-tight text-[11vw] sm:text-[9vw] md:text-[7vw] lg:text-[5.6vw]">
            DESI<span style={monoStyle} className="text-zinc-400">G</span>N{" "}
            <span style={monoStyle} className="text-zinc-400">A</span>DDICT,
          </div>
        </div>

        {/* Line 3 */}
        <div className="singleLine w-full overflow-hidden flex justify-center">
          <div className="text-white leading-none font-semibold tracking-tight text-[11vw] sm:text-[9vw] md:text-[7vw] lg:text-[5.6vw]">
            <span style={monoStyle} className="text-zinc-400">A</span>BST
            <span style={monoStyle} className="text-zinc-400">RA</span>CT
          </div>
        </div>

        {/* Line 4 */}
        <div className="singleLine w-full overflow-hidden flex justify-center sm:justify-end">
          <div className="text-white leading-none font-semibold tracking-tight text-[11vw] sm:text-[9vw] md:text-[7vw] lg:text-[5.6vw]">
            T<span style={monoStyle} className="text-zinc-400">H</span>INKE
            <span style={monoStyle} className="text-zinc-400">R.”</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroText;
