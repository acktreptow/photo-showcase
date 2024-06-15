import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
        width={250}
        height={250}
        className="mx-auto rounded-lg shadow-lg mb-5"
      />
      <div className="text-center text-lg cursor mb-5 text-sky-500 font-semibold underline">
        <Link href={image.links.download} target="_blank" className="text-lg">
          <span>Download Original Photo</span>
        </Link>
      </div>
      <div className="border-2 border-gray-200 rounded-lg shadow-md p-4">
        <h2 className="text-center font-bold text-xl mb-3">
          Photo Information
        </h2>
        <p className="text-lg">
          Taken by: {image.user.name} ({image.user.username})
        </p>
        <p className="text-lg">
          Description:{" "}
          {image.description === null ? "None provided." : image.description}
        </p>
        <p className="text-lg">
          Location taken: {image.location.city}, {image.location.country}
        </p>
        <p className="text-lg">
          Portfolio:{" "}
          <Link href={image.user.portfolio_url} target="_blank">
            {image.user.portfolio_url}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default StaticPage;
