import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="relative z-10 py-8 px-6 border-t border-white/10 bg-black ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-white/50 font-bold">
          © 2026 Pramukh Kaveti. All rights reserved.
        </p>
        <p className="text-sm text-white/50 font-bold">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer