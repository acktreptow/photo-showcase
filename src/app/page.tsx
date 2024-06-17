"use client";

import Image from "next/image";
import homepageImg from "../../public/images/homepage-photo.png";
import { useState } from "react";

function Homepage() {
  const pages = [
    { name: "Static", urlPath: "/static" },
    { name: "Dynamic", urlPath: "/dynamic" },
  ];

  return (
    <main className="bg-white container mx-auto flex-grow p-4">
      <h1 className="text-4xl text-center my-10 font-bold">Photo Showcase</h1>
      <p className="bg-teal-700 text-center rounded-lg text-zinc-100 p-3 mb-5 text-lg md:w-3/4 lg:p-5 lg:mb-10 md:mx-auto">
        Photo Showcase is a Next.js application that fetches and caches data
        differently depending on the page you visit. There is both static and
        dynamic data fetching. The dynamic page fetches data at runtime, while
        the static page fetches data at build time.
      </p>
      <Image
        src={homepageImg}
        alt="A man taking photos in nature"
        className="rounded-lg md:w-3/4 mx-auto shadow-lg mb-10"
      />
      <p className="font-semibold text-center text-2xl mb-5">
        Enjoy the showcase!
      </p>
      <form>
        <select>
          <option>Pick a Page</option>
          {pages.map((page) => (
            <option key={page.name}>{page.name}</option>
          ))}
        </select>
        <button type="submit">Go to Page</button>
      </form>
    </main>
  );
}
export default Homepage;
