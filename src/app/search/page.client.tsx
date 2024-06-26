"use client";

import Image from "next/image";
import { useState } from "react";
import { UnsplashImage } from "../types/UnsplashImage";
import Container from "../components/Container";
import TextBox from "../components/TextBox";
import Title from "../components/Title";
import Span from "../components/Span";

function SearchPageClient(): JSX.Element {
  const [searchResults, setSearchResults] = useState<UnsplashImage[] | null>(
    null
  );
  const [searchResultsLoading, setSearchResultsLoading] =
    useState<boolean>(false);
  const [searchResultsError, setSearchResultsError] = useState<boolean>(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchQuery = formData.get("searchQuery")?.toString().trim();

    if (searchQuery) {
      try {
        setSearchResults(null);
        setSearchResultsError(false);
        setSearchResultsLoading(true);

        const res: Response = await fetch(`/api/search?query=${searchQuery}`);
        const images: UnsplashImage[] = await res.json();
        setSearchResults(images);
      } catch (error) {
        console.error(error);
        setSearchResultsError(true);
      } finally {
        setSearchResultsLoading(false);
      }
    }
  }

  return (
    <Container>
      <Title title="Search Page" />
      <TextBox>
        <p className="mb-5">
          The <Span page="search" /> is the only page that fetches data
          client-side because user input is needed to render photos. This
          happens dynamically as the app can&#39;t know your word at build time.
        </p>
        <p>
          However, the GET request to the Unsplash API is sent via a
          server-based Next.js API route handler. Otherwise my credentials
          granting Unsplash access would leak in the page source of your device
          (the client).
        </p>
      </TextBox>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center text-xl lg:tracking-wide"
      >
        <label htmlFor="searchQuery" className="font-semibold mb-1">
          Your Search Query:{" "}
        </label>
        <input
          type="text"
          id="searchQuery"
          name="searchQuery"
          placeholder="puppies, pancakes etc"
          className="block mx-auto border-4 border-gray-500 rounded-lg p-2 mb-5 hover:border-teal-900 transition-colors duration-200 text-gray-800 shadow-md focus:outline-none"
        />
        <button
          type="submit"
          className="block mx-auto border p-4 mb-10 bg-teal-700 text-white rounded-full hover:bg-teal-900 transition-colors duration-200 shadow-md shadow-teal-700"
          disabled={searchResultsLoading}
        >
          View Your Photo Showcase
        </button>
      </form>

      <div className="text-center text-lg">
        {searchResultsLoading && (
          <div className="flex items-center justify-center space-x-3">
            <div className="border-t-transparent border-solid animate-spin rounded-full border-teal-700 border-4 h-12 w-12"></div>
            <p>Loading...</p>
          </div>
        )}
        {searchResultsError && (
          <p>There was a server-side error. Please try your query again.</p>
        )}
        {searchResults?.length === 0 && (
          <p>
            No photos found with that search query. Please try a different word.
          </p>
        )}
      </div>

      {searchResults && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:p-5 lg:p-10">
          {searchResults.slice(0, 6).map((image: UnsplashImage) => (
            <Image
              src={image.urls.regular}
              width={200}
              height={200}
              alt={image.alt_description}
              key={image.urls.raw}
              className="w-full h-full object-cover rounded-lg"
            />
          ))}
        </div>
      )}
    </Container>
  );
}

export default SearchPageClient;
