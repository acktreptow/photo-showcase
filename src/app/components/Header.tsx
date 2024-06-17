import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo.png";

function Header() {
  return (
    <header className="container mx-auto border p-4 bg-teal-700 text-zinc-100 text-lg">
      <div className="flex justify-between items-center">
        <div>
          <Link href="/">
            <Image
              src={logo}
              alt="Photo Showcase logo"
              className="w-12 rounded-sm ml-2"
            />
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-3 mr-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/static">Static</Link>
            </li>
            <li>
              <Link href="/dynamic">Dynamic</Link>
            </li>
            <li>
              <Link href="/topics/dogs">Dogs</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
