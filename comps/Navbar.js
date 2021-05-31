import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <h1>Logo</h1>
        </Link>
      </div>
      <div className="list">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/ninjas/">
          <a>Ninja Listing</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
