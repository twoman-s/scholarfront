import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "./../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Scholar | Home</title>
        <meta
          name="description"
          content="Scholar!! Get your scholarship now.."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homeBanner}>
        <Image src="/homebanner.jpg" layout="fill" objectFit="cover" />
        <div className={styles.bannerDetails}>
          <h2>Get your scholarship today</h2>
          <p>We help you to get your dream course at your dream college</p>
          <div className={styles.bannerBtns}>
            <Link passHref href="/colleges">
              <a>Colleges</a>
            </Link>
            <Link passHref href="/courses">
              <a>Courses</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
