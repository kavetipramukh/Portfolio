import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function GlassNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 right-6 md:left-1/2 md:right-auto z-50 md:w-[92%] max-w-6xl md:-translate-x-1/2 rounded-2xl
      transition-all duration-300
      ${scrolled
        ? "bg-white/10 backdrop-blur-md shadow-lg"
        : "bg-white/10 backdrop-blur-md"}
      border border-white/20`}
    >
      <div className="flex items-center justify-end md:justify-center px-6 py-4">
        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-white/80">
          {["Home", "About", "Work", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/20 px-6 py-4 backdrop-blur-xl">
          <ul className="flex flex-col gap-4 text-white/80">
            {["Home", "Work", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block hover:text-white transition"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
