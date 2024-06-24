import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/app/components/Container";
import Title from "@/app/components/Title";
import TextBox from "@/app/components/TextBox";
import Image from "next/image";
import homepageImg from "../../public/images/homepage-photo.png";

export const metadata: Metadata = {
  title: "404 Not Found",
  description:
    "Oops! The page you're looking for doesn't exist. Please navigate to another page.",
};

export default function NotFound(): JSX.Element {
  return (
    <Container>
      <Title title="404 Not Found" />
      <TextBox>
        <p className="text-center lg:text-start">
          This page doesn&#39;t exist. Please navigate to another page by
          clicking a link in the header or using the button below.
        </p>
      </TextBox>
      <Link href="/">
        <button className="block mx-auto border p-4 mb-10 bg-teal-700 text-white rounded-full hover:bg-teal-900 transition-colors duration-200 shadow-md shadow-teal-700">
          Return To Homepage
        </button>
      </Link>
      <Image
        src={homepageImg}
        alt="A man taking photos in nature"
        className="rounded-lg mx-auto shadow-lg mb-5 md:w-3/4 lg:mb-10"
      />
    </Container>
  );
}
