import { HandySvg } from "handy-svg";
import OpenBookIcon from "../../images/images/header/fa-solid_book-open.svg";
import style from "./Header.module.css"

export const Header = () => {
  return (
    <header>
      <div className={style.header}>
        <HandySvg src={OpenBookIcon} width="40" height="35" className={style.headerSvg}/>
        <h1 className={style.logo}>
          <span className={style.logoPart}>Finance</span> Ledger
        </h1>
        <nav>
          <ul className={style.navList}>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Cases</button>
            </li>
            <li>
              <button>Blog</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
