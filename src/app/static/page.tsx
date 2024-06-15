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
    <div className="container mx-auto flex-grow">
      <h1>Static Page</h1>
      <p className=" mb-10">This is the static page</p>
      <Image
        src={image.urls.regular}
        alt={image.alt_description}
        width={400}
        height={400}
        className="mx-auto rounded-lg shadow-lg"
      />
      <div>
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
