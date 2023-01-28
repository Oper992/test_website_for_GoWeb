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

  const scrollTo = (element) => {
    window.scrollBy({
      top: element.current,
      behavior: "smooth",
    });
  };

  return (
    <div ref={hederRef} className={style.header}>
      <div className="container">
        <div className={style.content}>
          <div className={style.logo}>
            <HandySvg className={style.logoIcon} src={OpenBookIcon} />
            <p>
              <span className={style.logoPart}>Finance</span> Ledger
            </p>
          </div>
          <nav className={style.nav}>
            <ul className={style.navList}>
              <li className={style.navItem}>
                <button type="button" className={style.navButton}>
                  Home
                </button>
              </li>
              <li className={style.navItem}>
                <button
                  type="button"
                  className={style.navButton}
                  onClick={scrollTo(refs.aboutRef)}
                >
                  About
                </button>
              </li>
              <li className={style.navItem}>
                <button type="button" className={style.navButton}>
                  Cases
                </button>
              </li>
              <li className={style.navItem}>
                <button type="button" className={style.navButton}>
                  Blog
                </button>
              </li>
              <li className={style.navItem}>
                <button type="button" className={style.navButton}>
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
