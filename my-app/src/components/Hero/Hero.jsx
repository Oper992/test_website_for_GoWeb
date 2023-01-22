import style from "./Hero.module.scss";
import iconArrow from "../../images/hero/fa-solid_angle-right.svg";
import { HandySvg } from "handy-svg";

export const Hero = () => {
  return (
    <section>
      <div className={style.hero}>
        <div className="container">
          <h1 className={style.heroTitle}>The Sky Is The Limit</h1>
          <p className={style.heroPostTitle}>
            We provide world class financial assistance
          </p>
          <button type="button" className={style.heroButton}>
            <HandySvg className={style.iconHero} src={iconArrow} width="9" height="18" />
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};
