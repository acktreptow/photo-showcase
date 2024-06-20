import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { UnsplashImage } from "../types/UnsplashImage";
import Container from "../components/Container";
import Title from "../components/Title";
import TextBox from "../components/TextBox";
import Span from "../components/Span";

export const metadata: Metadata = {
  title: "Dynamic Rendering",
  description: "Showcasing dynamic rendering in Next.js through photos",
};
export const revalidate = 5;

async function IsrPage(): Promise<JSX.Element> {
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
    <Container>
      <Title title="ISR Page" />
      <TextBox>
        <p className="mb-5">
          The <Span page="incremental static regeneration" /> is a hybrid of the
          static/dynamic methods. The page is generated statically, but it can
          regenerate after 5 seconds to fetch a new image from the Unsplash API.
        </p>
        <p className="mb-5">
          A page refresh is however needed to see the new image because it
          can&#39;t update content without a new request.
        </p>
        <p>
          Doing so will also not cause the full page to regenerate, only dynamic
          parts such as the image and its data. There will be no change if the
          refresh occurs within 5 seconds.
        </p>
      </TextBox>
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
            "None provided"
          )}
        </p>
      </div>
    </Container>
  );
}

export default IsrPage;
