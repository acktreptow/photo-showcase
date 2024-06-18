import { Metadata } from "next";
import HomepageClient from "./page.client";

export const metadata: Metadata = {
  title: "Homepage | Photo Showcase",
  description:
    "Showcasing photos through various fetching and caching strategies",
};

function Homepage() {
  return <HomepageClient />;
}

export default Homepage;
