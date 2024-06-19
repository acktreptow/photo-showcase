import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { UnsplashImage } from "../types/UnsplashImage";
import Container from "../components/Container";
import Title from "../components/Title";

export const metadata: Metadata = {
  title: "Dynamic Rendering",
  description: "Showcasing dynamic rendering in Next.js through photos",
};

async function DynamicPage(): Promise<JSX.Element> {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
    { cache: "no-cache" }
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
    <Container>
      <Title title="Dynamic Page" />
      <div className="bg-teal-700 rounded-lg text-zinc-100 p-3 mb-7 text-lg md:mx-auto md:w-3/4 lg:p-5 lg:mb-10 lg:text-xl">
        <p>
          This is the{" "}
          <span className="font-semibold underline">dynamic page</span> because
          it doesn&#39;t cache the image that is fetched from the Unsplash API.
          You as the user will therefore always see a new image with every
          refresh.
        </p>
      </div>
      <Image
        src={image.urls.regular}
        alt={image.alt_description}
        width={256}
        height={512}
        className="mx-auto rounded-lg shadow-lg mb-5 w-64 md:w-80 lg:w-96"
      />
      <div className="text-center text-lg cursor mb-7 text-sky-500 font-semibold underline lg:mb-10">
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
    </Container>
  );
}

export default DynamicPage;
