import Image from "next/image";
import { UnsplashImage } from "../../types/UnsplashImage";

async function TopicPage({ params: { topic } }: any) {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&count=12&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );

  const images = await res.json();

  return (
    <div className="container mx-auto bg-white flex-grow p-4">
      <h1 className="text-2xl text-center font-bold mt-4 md:mt-3 mb-5 lg:text-4xl lg:mt-8 lg:mb-10 capitalize">
        {topic}
      </h1>
      <p className="bg-teal-700 rounded-lg text-zinc-100 p-3 mb-7 text-lg md:w-3/4 lg:p-5 lg:mb-10  md:mx-auto">
        This is the <span className="font-semibold">static page</span> because
        it fetches and caches the Unsplash API data at build time. You as the
        user will therefore always see the same image regardless of refresh.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 border">
        {images.map((image: any) => (
          <Image
            src={image.urls.regular}
            width={200}
            height={200}
            alt={image.description}
            key={image.urls.raw}
            className="w-full h-full object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default TopicPage;
