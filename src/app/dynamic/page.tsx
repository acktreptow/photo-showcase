import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dynamic Rendering",
  description: "Showcasing dynamic rendering in Next.js through photos",
};

function DynamicPage() {
  return (
    <div className="container mx-auto flex-grow">
      <h1>Dynamic Page</h1>
      <p>This is the dynamic page</p>
    </div>
  );
}

export default DynamicPage;
