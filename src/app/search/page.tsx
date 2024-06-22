import SearchPageClient from "./page.client";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search",
  description: "Showcasing dynamic rendering in Next.js through photos",
};

function SearchPage(): JSX.Element {
  return (
    <div>
      <SearchPageClient />
    </div>
  );
}

export default SearchPage;