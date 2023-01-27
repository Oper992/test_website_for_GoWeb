import { HandySvg } from "handy-svg";
import OpenBookIcon from "../../images/header/fa-solid_book-open.svg";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={style.header}>
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
    </div>
  );
};
