import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { UnsplashImage } from "../types/UnsplashImage";

export const metadata: Metadata = {
  title: "Static Rendering",
  description: "Showcasing static rendering in Next.js through photos",
};

async function StaticPage(): Promise<JSX.Element> {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  const image: UnsplashImage = await res.json();

  let locationData = "";
  if (image.location.city === null && image.location.country === null) {
    locationData = "Unknown";
  } else if (image.location.city !== null && image.location.country === null) {
    locationData = image.location.city;
  } else if (image.location.city === null && image.location.country !== null) {
    locationData = image.location.country;
  } else {
    locationData = `${image.location.city}, ${image.location.country}`;
  }

  return (
    <div className="container mx-auto bg-white flex-grow p-4">
      <h1 className="text-4xl font-bold mt-5 mb-7 text-center lg:text-6xl lg:my-10">
        Static Page
      </h1>
      <div className="bg-teal-700 rounded-lg text-zinc-100 p-3 mb-7 text-lg md:mx-auto md:w-3/4 lg:p-5 lg:mb-10 lg:text-xl">
        <p>
          This is the{" "}
          <span className="font-semibold underline">static page</span> because
          it fetches and caches the Unsplash API data at build time. You as the
          user will therefore always see the same image regardless of refresh.
        </p>
      </div>
      <Image
        src={image.urls.regular}
        alt={image.alt_description}
        width={256}
        height={512}
        className="mx-auto rounded-lg shadow-lg mb-5 w-64 md:w-80 lg:w-96"
      />
      <div className="text-center text-lg cursor mb-10 text-sky-500 font-semibold underline">
        <Link
          href={image.links.download}
          target="_blank"
          className="text-lg lg:text-xl"
        >
          Download Original Photo
        </Link>
      </div>
      <div className="border-2 border-gray-200 rounded-lg shadow-md p-4 mb-5 md:w-3/4 md:mx-auto md:text-center lg:mb-10">
        <h2 className="text-center font-bold text-xl mb-3 lg:text-2xl">
          Photo Information
        </h2>
        <p className="text-lg lg:text-xl">
          Taken By: <span className="capitalize">{image.user.name}</span> (
          {image.user.username})
        </p>
        <p className="text-lg lg:text-xl">
          Description:{" "}
          {image.description === null
            ? image.alt_description.charAt(0).toUpperCase() +
              image.alt_description.slice(1)
            : image.description.charAt(0).toUpperCase() +
              image.description.slice(1)}
        </p>
        <p className="text-lg lg:text-xl">Location Taken: {locationData}</p>
        <p className="text-lg lg:text-xl">
          Portfolio:{" "}
          {image.user.portfolio_url ? (
            <Link href={image.user.portfolio_url} target="_blank">
              {image.user.portfolio_url}
            </Link>
          ) : (
            "None Provided"
          )}
        </p>
      </div>
    </div>
  );
}

export default StaticPage;
