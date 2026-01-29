import React from "react";
import { Mail, PhoneCall, LucideLocationEdit } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-[#1a1a1a] text-white px-6 md:px-16 lg:px-24 py-20">
      {/* Title */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Get in touch
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-14 max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Let’s talk
          </h2>

          <p className="text-gray-400 leading-relaxed mb-10 max-w-lg">
            I'm currently available to take on new projects, so feel free to send
            me a message about anything you want me to work on. You can contact
            me anytime.
          </p>

          {/* Contact Details */}
          <div className="space-y-5">
            <div className="flex items-center gap-4 text-gray-300">
              <Mail className="w-5 h-5 text-white" />
              <span>yourmail@example.com</span>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <PhoneCall className="w-5 h-5 text-white" />
              <span>+91 ............</span>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <LucideLocationEdit className="w-5 h-5 text-white" />
              <span>India</span>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <form className="flex-1 bg-zinc-900 rounded-2xl p-8 md:p-10 space-y-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Your Message
            </label>
            <textarea
              rows="6"
              placeholder="Enter your message"
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white resize-none focus:outline-none focus:border-white transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Submit now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
