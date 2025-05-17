import React from "react";
import { ArrowLeft, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom"; // assuming you're using react-router

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 bg-gray-100">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
        🚧 Blog Loading...
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-6">
        We're brewing some amazing stories, ideas, and inspiration for you.
        <br />
        Until then, let's stay connected!
      </p>

      <a
        href="/contact"
        className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition font-semibold"
      >
        Contact Us
      </a>

      <div className="flex gap-6 mt-6">
        <a
          href="https://www.instagram.com/papi.created_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition"
        >
          <Instagram size={28} />
        </a>
        {/* <a
          href="https://www.twitter.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition"
        >
          <Twitter size={28} />
        </a> */}
      </div>

      <Link
        to="/"
        className="mt-10 flex items-center text-gray-600 hover:text-black transition font-semibold"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Home
      </Link>
    </div>
  );
};

export default Blog;
