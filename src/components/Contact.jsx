import React from "react";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
} from "react-icons/md";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
    <section id="contact" className="min-h-screen px-8 py-32">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-6xl tracking-wide font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Let's work together
        </h1>
        <p className="text-gray-500 tracking-wide text-lg leading-relaxed mt-6">
          Have a project in mind? I'd love to hear about it.
          <br />
          Send me a message and let's create something extraordinary.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-2 gap-32">
        <div className="">
          <h2 className="mb-6 font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-2xl">Send a message</h2>
          <form className="space-y-6">
          {/* First name: */}
          <div>
            <label htmlFor="name" className="block text-lg text-gray-800 mb-3">Name</label>
            <input type="text" placeholder="Hiren Siyodia" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-700 placeholder-gray-500 focus:border-blue-400 shadow-md transition"/><br />
            </div>
            {/* Email */}
            <div>
            <label htmlFor="email" className="block text-lg text-gray-800 mb-3">Email</label>
            <input id="email" type="email" placeholder="hirensiyodia@gmail.com" className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-700 placeholder-gray-500 focus:border-blue-500 shadow-md transition"/><br />
            </div>
            <div>
            <label htmlFor="subject" className="block text-lg text-gray-800 mb-3">Subject</label>
            <input id="subject" type="text" placeholder="Project collaboration" className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-700 shadow-md placeholder-gray-500 focus:border-blue-500 transition"/><br />
            </div>
            <div>
            <label for="message" className="block text-lg text-gray-800 mb-3">Your Message</label>
            <textarea id="message" rows="6"
              placeholder="Write your thoughts here..."
              className='w-full px-4 py-3 rounded-xl border border-gray-200
                text-gray-700 placeholder-gray-500
                focus:outline-none focus:border-blue-400
                shadow-md transition resize-none'
            ></textarea>
            </div>
            <button type="submit" className="px-5 py-2 rounded-lg bg-blue-600 text-gray-200 hover:bg-blue-500 transition tracking-wider">             Send Message</button>
          </form>
        </div>
        <div>
          <h2 className="mb-6 font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-2xl">
            Contact information
          </h2>
          <div className="flex items-center bg-gray-100 rounded-2xl p-3 mb-7">
            <div className="w-16 h-16 rounded-xl px-1 bg-blue-100 flex justify-center items-center">
              <MdEmail className="text-blue-500 text-2xl"/>
            </div>
            <div className="p-2">
              <p className="text-gray-500 text-md mb-1">Email</p>
              <p className="text-gray-800 text-lg font-semibold">hello@ariastudios.com</p>
            </div>
          </div>

          <div className="flex items-center bg-gray-100 rounded-2xl p-3 mb-7">
            <div className="w-16 h-16 rounded-xl px-1 bg-blue-100 flex justify-center items-center">
              <MdPhone className="text-blue-500 text-2xl"/>
            </div>
            <div className="p-2">
              <p className="text-gray-500 text-md mb-1">Number</p>
              <p className="text-gray-800 text-lg font-semibold">+91 9876543210</p>
            </div>
          </div>

          <div className="flex items-center bg-gray-100 rounded-2xl p-3 mb-7">
            <div className="w-16 h-16 rounded-xl px-1 bg-blue-100 flex justify-center items-center">
              <MdLocationOn className="text-blue-500 text-2xl"/>
            </div>
            <div className="p-2">
              <p className="text-gray-500 text-md mb-1">Location</p>
              <p className="text-gray-800 text-lg font-semibold">Mumbai, India</p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="mb-2 font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-2xl">
                Connect with me
            </h2>
            <p className="text-gray-500 tracking-wider py-2">
                Follow my creative journey and stay updated with my latest
              work
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Contact;
