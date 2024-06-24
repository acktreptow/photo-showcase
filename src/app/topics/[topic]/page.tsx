import { Metadata } from "next";
import Image from "next/image";
import { UnsplashImage } from "../../types/UnsplashImage";
import Container from "@/app/components/Container";
import Title from "@/app/components/Title";
import TextBox from "@/app/components/TextBox";
import Span from "@/app/components/Span";

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
          The <Span page="topics" /> uses the topic parameter to fetch 12
          related from the Unsplash API. While the dog photos are static
          because they were fetched/cached at build time, other topics are
          dynamic.
        </p>
        <p>
          Try it yourself! Replace dogs with a new topic in the URL to see
          photos of that topic. These are fetched/rendered on first access, then
          cached for subsequent visits (photos won&#39;t change on refresh).
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
