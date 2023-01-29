import style from "./Footer.module.scss";
import { HandySvg } from "handy-svg";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <ul className={style.socialIconsList}>
        <li className={style.socialIconsItem}>
          <HandySvg src="/images/social/facebook.svg" width="35" height="35" />
        </li>
        <li className={style.socialIconsItem}>
          <HandySvg src="/images/social/twitter.svg" width="35" height="35" />
        </li>
        <li className={style.socialIconsItem}>
          <HandySvg src="/images/social/youtube.svg" width="40" height="28" />
        </li>
        <li className={style.socialIconsItem}>
          <HandySvg src="/images/social/linkedin.svg" width="31" height="35" />
        </li>
      </ul>
      <p className={style.info}>Copyright © 2021 - FinanceLedger</p>
    </div>
  );
};
