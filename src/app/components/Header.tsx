import Link from "next/link";

function Header() {
  return (
    <header className="container mx-auto border p-4">
      <div className="flex justify-between">
        <div>Photo Showcase</div>
        <nav>
          <ul className="flex space-x-2">
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
              <Link href="/">Search</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
