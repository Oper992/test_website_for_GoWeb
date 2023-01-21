import { HandySvg } from "handy-svg";
import OpenBookIcon from "../../images/images/header/fa-solid_book-open.svg";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <div className="container">
      <div className={style.header}>
        <div className={style.headerSvg}>
          <HandySvg src={OpenBookIcon} width="40" height="35" />
        </div>
        <p className={style.logo}>
          <span className={style.logoPart}>Finance</span> Ledger
        </p>
        <nav>
          <ul className={style.navList}>
            <li className={style.navItem}>
              <button className={style.navButton}>Home</button>
            </li>
            <li className={style.navItem}>
              <button className={style.navButton}>About</button>
            </li>
            <li className={style.navItem}>
              <button className={style.navButton}>Cases</button>
            </li>
            <li className={style.navItem}>
              <button className={style.navButton}>Blog</button>
            </li>
            <li className={style.navItem}>
              <button className={style.navButton}>Contact</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
