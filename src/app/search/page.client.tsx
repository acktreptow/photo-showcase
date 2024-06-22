"use client";

import Container from "../components/Container";
import TextBox from "../components/TextBox";
import Title from "../components/Title";
import { useState } from "react";
import { UnsplashImage } from "../types/UnsplashImage";
import Image from "next/image";

function SearchPageClient() {
  const [searchResults, setSearchResults] = useState<UnsplashImage[] | null>(
    null
  );
  const [searchResultsLoading, setSearchResultsLoading] =
    useState<boolean>(false);
  const [searchResultsError, setSearchResultsError] = useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchQuery = formData.get("searchQuery")?.toString().trim();

    if (searchQuery) {
      try {
        setSearchResults(null);
        setSearchResultsError(false);
        setSearchResultsLoading(true);

        const res = await fetch(`/api/search?query=${searchQuery}`);
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchQuery">Search Query: </label>
        <input
          type="text"
          id="searchQuery"
          name="searchQuery"
          placeholder="puppies, pizza etc"
          className="border"
        />
        <button
          type="submit"
          className="border"
          disabled={searchResultsLoading}
        >
          Search
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
