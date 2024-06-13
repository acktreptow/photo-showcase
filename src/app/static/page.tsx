import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Static Rendering",
  description: "Showcasing static rendering in Next.js through photos",
};

function StaticPage() {
  return (
    <div className="container mx-auto flex-grow">
      <h1>Static Page</h1>
      <p>This is the static page</p>
    </div>
  );
}

export default StaticPage;
