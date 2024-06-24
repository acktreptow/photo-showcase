import SearchPageClient from "./page.client";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search",
  description: "Showcasing client-side fetching in Next.js through photos",
};

function SearchPage(): JSX.Element {
  return <SearchPageClient />;
}

export default SearchPage;
