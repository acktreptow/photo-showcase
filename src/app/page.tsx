"use client";

import Image from "next/image";
import homepageImg from "../../public/images/homepage-photo.png";
import { useState } from "react";

function Homepage() {
  const [selectedPage, setSelectedPage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (selectedPage) {
      window.location.href = `/${selectedPage}`;
    }
  };

  const pages = [
    { name: "Static", urlPath: "static" },
    { name: "Dynamic", urlPath: "dynamic" },
    { name: "Dogs", urlPath: "topics/dogs" },
  ];

  return (
    <main className="bg-white container mx-auto flex-grow p-4">
      <h1 className="text-4xl font-bold mt-5 mb-10 text-center lg:my-10 lg:text-6xl">
        Photo Showcase
      </h1>
      <p className="bg-teal-700 text-center rounded-lg text-zinc-100 p-3 mb-10 text-lg md:w-3/4 lg:p-5 md:mx-auto">
        Photo Showcase is a Next.js application that fetches and caches data
        differently depending on the page you visit. There is both static and
        dynamic data fetching. The dynamic page fetches data at runtime, while
        the static page fetches data at build time.
      </p>
      <form onSubmit={handleSubmit} className="text-xl mb-10 lg:tracking-wide">
        <select
          value={selectedPage}
          onChange={(e) => setSelectedPage(e.target.value)}
          className="block mx-auto border-4 border-gray-500 rounded-lg p-2 mb-3 hover:border-playstation transition-colors duration-200 text-gray-800 shadow-md focus:outline-none"
        >
          <option value="">Select Showcase</option>
          {pages.map((page) => (
            <option key={page.name} value={page.urlPath}>
              {page.name}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="block mx-auto border p-4 mb-5 bg-teal-700 text-white rounded-full hover:bg-teal-900 transition-colors duration-200 shadow-md shadow-teal-700"
        >
          Go To Selected Showcase
        </button>
      </form>
      <Image
        src={homepageImg}
        alt="A man taking photos in nature"
        className="rounded-lg md:w-3/4 mx-auto shadow-lg"
      />
    </main>
  );
}
export default Homepage;
