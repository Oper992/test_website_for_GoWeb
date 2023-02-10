import { HandySvg } from "handy-svg";
import OpenBookIcon from "../../images/header/fa-solid_book-open.svg";
import style from "./Header.module.scss";
import { useEffect, useRef } from "react";

export const Header = ({ refs }) => {
  const hederRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let windowRelativeTop =
        document.documentElement.getBoundingClientRect().top;
      let windowInnerWidth = window.innerWidth;

      if (windowInnerWidth < 768) {
        windowRelativeTop < -120
          ? hederRef.current.classList.add(style.headerScroll)
          : hederRef.current.classList.remove(style.headerScroll);
      } else {
        windowRelativeTop < -70
          ? hederRef.current.classList.add(style.headerScroll)
          : hederRef.current.classList.remove(style.headerScroll);
      }
    });
  }, []);

  const scrollTo = (e) => {
    e.preventDefault();
    // console.log(hederRef.current);
    if (
      e.target.textContent === "Home" ||
      e.target.textContent === "Finance Ledger"
    ) {
      refs.homeRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (e.target.textContent === "About") {
      refs.aboutRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (e.target.textContent === "Cases") {
      refs.casesRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (e.target.textContent === "Blog") {
      refs.blogRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (e.target.textContent === "Contact") {
      refs.contactRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={hederRef} className={style.header}>
      <div className="container">
        <div className={style.content}>
          <a href="" className={style.logo} onClick={scrollTo}>
            <HandySvg className={style.logoIcon} src={OpenBookIcon} />
            <span className={style.logoPart}>Finance</span> Ledger
          </a>
          <nav className={style.nav}>
            <ul className={style.navList}>
              <li className={style.navItem}>
                <a href="" className={style.navButton} onClick={scrollTo}>
                  Home
                </a>
              </li>
              <li className={style.navItem}>
                <a href="" className={style.navButton} onClick={scrollTo}>
                  About
                </a>
              </li>
              <li className={style.navItem}>
                <a href="" className={style.navButton} onClick={scrollTo}>
                  Cases
                </a>
              </li>
              <li className={style.navItem}>
                <a href="" className={style.navButton} onClick={scrollTo}>
                  Blog
                </a>
              </li>
              <li className={style.navItem}>
                <a href="" className={style.navButton} onClick={scrollTo}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
