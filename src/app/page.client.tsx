"use client";

import Image from "next/image";
import homepageImg from "../../public/images/homepage-photo.png";
import { ChangeEvent, useState } from "react";
import Container from "./components/Container";
import Title from "./components/Title";
import TextBox from "./components/TextBox";
import Span from "./components/Span";

function HomepageClient(): JSX.Element {
  const [selectedPage, setSelectedPage] = useState<string>("");
  const [hidden, setHidden] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedPage) {
      window.location.href = `/${selectedPage}`;
    }
  };

  const pages = [
    { name: "Static", urlPath: "static"},
    { name: "Dynamic", urlPath: "dynamic" },
    { name: "ISR", urlPath: "isr" },
    { name: "Dogs", urlPath: "topics/dogs" },
    { name: "Search", urlPath: "search" },
  ];

  return (
    <Container>
      <Title title="Photo Showcase" />
      <TextBox>
        <p className="mb-3 text-center">
          Photo Showcase is a Next.js app that fetches and caches data
          differently depending on the page visited.
        </p>
        <ul className="list-disc ml-5">
          <li className="mb-1">
            The <Span page="static" /> fetches and caches the Unsplash API data
            at build time.
          </li>
          <li className="mb-1">
            The <Span page="dynamic" /> fetches the API data at runtime and
            doesn&#39;t cache it.
          </li>
          <li className="mb-1">
            The <Span page="isr" /> splits the difference between the
            static/dynamic methods.
          </li>
          <li className="mb-3">
            The <Span page="dogs" /> fetches/caches the dog images at build
            time, but all other topics are fetched/cached at runtime.
          </li>
        </ul>
      </TextBox>
      <form onSubmit={handleSubmit} className="text-xl mb-10 lg:tracking-wide">
        <select
          value={selectedPage}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setSelectedPage(e.target.value);
            setHidden(true);
          }}
          className="block mx-auto border-4 border-gray-500 rounded-lg p-2 mb-5 hover:border-teal-900 transition-colors duration-200 text-gray-800 shadow-md focus:outline-none"
        >
          <option value="" className={`${hidden ? "hidden" : ""}`}>
            Select Showcase
          </option>
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
        className="rounded-lg mx-auto shadow-lg mb-5 md:w-3/4 lg:mb-10"
      />
    </Container>
  );
}
export default HomepageClient;
