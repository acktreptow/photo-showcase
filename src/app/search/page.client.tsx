"use client";

import Container from "../components/Container";
import TextBox from "../components/TextBox";
import Title from "../components/Title";

function SearchPageClient() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchQuery = formData.get("searchQuery")?.toString().trim();

    if (searchQuery) {
      alert(searchQuery);
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
        <button type="submit" className="border">
          Search
        </button>
      </form>
    </Container>
  );
}

export default SearchPageClient;
