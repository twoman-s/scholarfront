import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { useState } from "react";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = useState("");
  const handleSearchKeyword = (e) => {
    setSearchKeyword(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search/${searchKeyword}`);
  };
  const handleClick = () => {
    let width = document.body.offsetWidth;
    if (width <= 767) {
      const menu = document.getElementById("nav-menu");
      menu.classList.toggle(`${styles.navOpen}`);
    }
  };
  return (
    <nav className={styles.nav}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Image src="/logo.svg" alt="Scholar" width={120} height={70} />
        </div>
        <div className={styles.navMenu} id="nav-menu">
          <ul className={styles.navList}>
            <Link passHref href="/">
              <li className={styles.navItem} onClick={handleClick}>
                Home
              </li>
            </Link>
            <Link passHref href="/colleges">
              <li className={styles.navItem} onClick={handleClick}>
                Colleges
              </li>
            </Link>
            <Link passHref href="/courses">
              <li className={styles.navItem} onClick={handleClick}>
                Courses
              </li>
            </Link>
            <Link passHref href="/checkeligibility">
              <li
                className={`${styles.navItem} ${styles.navBtn}`}
                onClick={handleClick}
              >
                Check Eligibility
              </li>
            </Link>
          </ul>
          <div className={styles.navSearch}>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                onChange={handleSearchKeyword}
                required
              />
              <button type="submit">
                <i className="fas fa-search" onClick={handleClick}></i>
              </button>
            </form>
          </div>
          <div className={styles.navToggle} onClick={handleClick}>
            <i className="fas fa-chevron-circle-right"></i>
          </div>
        </div>
        <div className={styles.navToggle} onClick={handleClick}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
