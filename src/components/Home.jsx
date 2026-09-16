import React from "react";
import { Link } from "react-router-dom";
import Featured from "./Featured";
import Footer from "./Footer";


const Home = () => {
  return (
    <>
    <section id="home" className="min-h-screen pt-24 flex items-center justify-center
  bg-gradient-to-b
  from-blue-200
  via-green-50
  to-white">
      <div className="text-center max-w-5xl">
        {/* Badge */}
        <div className="inline-block mb-8">
          <span className="px-5 py-3 rounded-full border border-blue-300 bg-blue-100/50 text-blue-600">
            ✨ Digital Artist & Designer
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-7xl font-bold text-gray-900 lending-tight">
          Crafting visual stories
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            that inspire
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Transforming ideas into captivating digital experiences through art,
          design, and creative vision. Every project is a journey into
          imagination.
        </p>
        <div className="mt-10 flex justify-center gap-5">
          <Link
            to="/portfolio"
            className="px-4 py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            View My Work →
          </Link>
          <Link
            to="/contact"
            className="px-4 py-4 bg-white text-gray-900 rounded-lg font-semibold border border-gray-200 hover:bg-gray-100 transition"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
    <Featured/>
    <Footer/>
    </>
  );
};

export default Home;
