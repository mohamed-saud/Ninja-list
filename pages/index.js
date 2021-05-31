import Head from "next/head";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <haed>
        <title>Wlecome |Home</title>
      </haed>
      <div className="app">
        <h1 className={styles.title}>Hello</h1>
        <p className={styles.text}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution
        </p>
        <p className={styles.text}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution
        </p>
        <Link href="ninjas">
          <a className={styles.btn}>See Ninja Lesting</a>
        </Link>
      </div>
    </>
  );
}
