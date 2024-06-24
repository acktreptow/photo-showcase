import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import linksData from "../data/links.json";
import { PageLink } from "../types/PageLink";

function Header(): JSX.Element {
  return (
    <header className="container mx-auto p-4 bg-teal-700 text-zinc-100 flex justify-between items-center">
      <div>
        <Link href="/">
          <Image
            src={logo}
            alt="Photo Showcase logo"
            className="w-12 rounded-md ml-2 md:ml-5 lg:ml-10"
          />
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-3 font-semibold text-lg md:space-x-4 md:mr-5 lg:space-x-5 lg:mr-10 lg:text-xl">
          {linksData.map((link: PageLink) => (
            <li
              key={link.name}
              className={`hover:text-zinc-300 hover:underline ${
                link.name === "Home" ? "hidden md:flex" : ""
              }`}
            >
              <Link href={link.urlPath}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
