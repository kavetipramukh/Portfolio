import React, { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Toast = ({ message, show, onClose }) => {
  React.useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
      {message}
    </div>
  );
};

const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "2571455a-a7c9-4483-81d1-eb6cfdb48a9d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setShowToast(true);
      event.target.reset();
    }
  };



  return (
    <section id="contact" className="w-full bg-black text-white px-6 md:px-16 lg:px-24 py-20">
      {/* Title */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Get in touch
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-14 max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="flex-1 p-10 ">
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
              <span>pramukh.kavetii@gmail.com</span>
            </div>

            {/* <div className="flex items-center gap-4 text-gray-300">
              <PhoneCall className="w-5 h-5 text-white" />
              <span>+91 ............</span>
            </div> */}

            {/* <div className="flex items-center gap-4 text-gray-300">
              <LucideLocationEdit className="w-5 h-5 text-white" />
              <span>India</span>
            </div> */}
            <div className="flex gap-3">
              <a href="https://github.com/kavetipramukh" className="text-sm text-gray-400 hover:text-white transition">
                <Github
                  className="w-5 h-5 text-gray-400 hover:text-white transition hover:border-b"  />
              </a>
              <a href="https://www.linkedin.com/in/kavetipramukh/" className="">
                <Linkedin className="w-5 h-5 text-gray-400 ml-4 hover:text-white transition hover:border-b" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <form onSubmit={onSubmit} className="flex-1  rounded-2xl p-8 md:p-10 space-y-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Your Message
            </label>
            <textarea
              rows="6"
              name="message"
              placeholder="Enter your message"
              required
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
      
      <Toast 
        message="Thanks for reaching out!" 
        show={showToast} 
        onClose={() => setShowToast(false)} 
      />
    </section>
  );
};

export default Contact;
