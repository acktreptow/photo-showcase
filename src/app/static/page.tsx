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
  console.log(image);

  return (
    <div className="container mx-auto flex-grow p-4">
      <h1 className="text-2xl text-center font-bold my-3">Static Page</h1>
      <p className="mb-5 text-lg">
        This is the static page because it fetches and caches the Unsplash API
        data at build time. You as the user will therefore always see the same
        image regardless of refreshing.
      </p>
      <Image
        src={image.urls.regular}
        alt={image.alt_description}
        width={300}
        height={300}
        className="mx-auto rounded-lg shadow-lg mb-5"
      />
      <div className="text-lg">
        <p>Name: {image.user.name}</p>
        <p>
          Description: {image.description === null ? "N/A" : image.description}
        </p>
        <p>
          Location taken: {image.location.city}, {image.location.country}
        </p>
      </div>
    </div>
  );
}

export default StaticPage;
