import { Metadata } from "next";
import Image from "next/image";
import { UnsplashImage } from "../../types/UnsplashImage";
import Container from "@/app/components/Container";
import Title from "@/app/components/Title";
import TextBox from "@/app/components/TextBox";

type TopicParams = {
  params: { topic: string };
};

export function generateMetadata({ params: { topic } }: TopicParams): Metadata {
  return {
    title: `${topic[0].toUpperCase()}${topic.slice(1)}`,
    description: `Showcasing photos of ${topic} from Unsplash`,
  };
}

async function TopicPage({
  params: { topic },
}: TopicParams): Promise<JSX.Element> {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&count=12&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );

  const images = await res.json();

  return (
    <Container>
      <Title title={topic} />
      <TextBox>
        <p className="mb-5">
          This is the{" "}
          <span className="font-semibold underline">topics page</span> because
          it uses the topic parameter to fetch images from the Unsplash API.
          While the dog images are static because they were fetched and cached
          at build time, other topics will be dynamic.
        </p>
        <p>
          Replace dogs with another topic in the URL to see images of that
          topic. These will be fetched and rendered on first access and then
          cached for subsequent visits (the photos will not change on refresh).
        </p>
      </TextBox>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:p-5 lg:p-10">
        {images.map((image: UnsplashImage) => (
          <Image
            src={image.urls.regular}
            width={200}
            height={200}
            alt={image.alt_description}
            key={image.urls.raw}
            className="w-full h-full object-cover rounded-lg"
          />
        ))}
      </div>
    </Container>
  );
}

export default TopicPage;
