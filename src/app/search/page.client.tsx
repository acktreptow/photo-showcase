"use client";

import Container from "../components/Container";
import TextBox from "../components/TextBox";
import Title from "../components/Title";
import { useState } from "react";
import { UnsplashImage } from "../types/UnsplashImage";
import Image from "next/image";

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
        <p>This title is rendered client side.</p>
      </TextBox>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center text-xl lg:tracking-wide"
      >
        <label htmlFor="searchQuery" className="font-semibold mb-1">
          Search Query:{" "}
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
          className="block mx-auto border p-4 mb-5 bg-teal-700 text-white rounded-full hover:bg-teal-900 transition-colors duration-200 shadow-md shadow-teal-700"
          disabled={searchResultsLoading}
        >
          View Your Photo Showcase
        </button>
      </form>

      <div>
        {searchResultsLoading && <p>Loading...</p>}
        {searchResultsError && (
          <p>There was an error. Please try your query again.</p>
        )}
        {searchResults?.length === 0 && (
          <p>No results found. Please try a different query.</p>
        )}
      </div>

      {searchResults && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:p-5 lg:p-10">
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
