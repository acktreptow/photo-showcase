import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Static Rendering",
  description: "Showcasing static rendering in Next.js through photos",
};

async function StaticPage() {
  const res = await fetch(
    "https://api.unsplash.com/photos/random?client_id=" +
      process.env.UNSPLASH_ACCESS_KEY
  );
  const image = await res.json();

  return (
    <div className="container mx-auto flex-grow">
      <h1>Static Page</h1>
      <p>This is the static page</p>
      <Image
        src={image.urls.regular}
        alt={image.alt_description}
        width={image.width}
        height={image.height}
      />
    </div>
  );
}

export default StaticPage;
