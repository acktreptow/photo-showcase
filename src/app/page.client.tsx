"use client";

import Image from "next/image";
import homepageImg from "../../public/images/homepage-photo.png";
import { ChangeEvent, useState } from "react";
import Container from "./components/Container";
import Title from "./components/Title";
import TextBox from "./components/TextBox";
import Span from "./components/Span";
import linksData from "../app/data/links.json";
import { PageLink } from "../app/types/PageLink";

function HomepageClient(): JSX.Element {
  const [selectedPage, setSelectedPage] = useState<string>("");
  const [hidden, setHidden] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedPage) {
      window.location.href = `${selectedPage}`;
    }
  };

  return (
    <Container>
      <Title title="Photo Showcase" />
      <TextBox>
        <p className="mb-3 text-center">
          Photo Showcase is a Next.js app that fetches and caches Unsplash
          photos differently depending on the page.
        </p>
        <ul className="list-disc ml-5">
          <li className="mb-1">
            The <Span page="static" /> fetches and caches Unsplash API data at
            build time.
          </li>
          <li className="mb-1">
            The <Span page="dynamic" /> fetches the data at runtime and
            doesn&#39;t cache it.
          </li>
          <li className="mb-1">
            The <Span page="isr" /> splits the difference between the
            static/dynamic methods.
          </li>
          <li className="mb-1">
            The <Span page="dogs" /> fetches/caches dog photos at build time,
            but all other topics are fetched/cached at runtime.
          </li>
          <li className="mb-3">
            The <Span page="search" /> uses client-side fetching and a
            server-side API route handler because user input is necessary to
            render a photo.
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
          {linksData
            .filter((link: PageLink) => link.name !== "Home")
            .map((link: PageLink) => (
              <option key={link.name} value={link.urlPath}>
                {link.name}
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
