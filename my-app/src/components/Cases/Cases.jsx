import style from "./Cases.module.scss";
import cases1Jpg from "../../images/cases/cases1.jpg";
import cases1JpgRetina from "../../images/cases/cases1@2x.jpg";
import cases1Webp from "../../images/cases/cases1.webp";
import cases1WebpRetina from "../../images/cases/cases1@2x.webp";
import cases2Jpg from "../../images/cases/cases2.jpg";
import cases2JpgRetina from "../../images/cases/cases2@2x.jpg";
import cases2Webp from "../../images/cases/cases2.webp";
import cases2WebpRetina from "../../images/cases/cases2@2x.webp";
import cases3Jpg from "../../images/cases/cases3.jpg";
import cases3JpgRetina from "../../images/cases/cases3@2x.jpg";
import cases3Webp from "../../images/cases/cases3.webp";
import cases3WebpRetina from "../../images/cases/cases3@2x.webp";
import cases4Jpg from "../../images/cases/cases4.jpg";
import cases4JpgRetina from "../../images/cases/cases4@2x.jpg";
import cases4Webp from "../../images/cases/cases4.webp";
import cases4WebpRetina from "../../images/cases/cases4@2x.webp";
import cases5Jpg from "../../images/cases/cases5.jpg";
import cases5JpgRetina from "../../images/cases/cases5@2x.jpg";
import cases5Webp from "../../images/cases/cases5.webp";
import cases5WebpRetina from "../../images/cases/cases5@2x.webp";
import cases6Jpg from "../../images/cases/cases6.jpg";
import cases6JpgRetina from "../../images/cases/cases6@2x.jpg";
import cases6Webp from "../../images/cases/cases6.webp";
import cases6WebpRetina from "../../images/cases/cases6@2x.webp";

export const Cases = () => {
  return (
    <section>
      <div className="container">
        <div className={style.cases}>
          <p className={style.preTitle}>This is what we do</p>
          <h2 className={style.title}>Business Cases</h2>
          <p className={style.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </p>
          <ul className={style.imagesList}>
            <li className={style.imagesItem}>
              <picture>
                <source
                  srcset={`${cases1Webp} 1x, ${cases1WebpRetina} 2x`}
                  type="image/webp"
                />
                <source
                  srcset={`${cases1Jpg} 1x, ${cases1JpgRetina} 2x`}
                  type="image/jpeg"
                />
                <img src={cases1Jpg} alt="People" />
              </picture>
            </li>
            <li className={style.imagesItem}>
              <picture>
                <source
                  srcset={`${cases2Webp} 1x, ${cases2WebpRetina} 2x`}
                  type="image/webp"
                />
                <source
                  srcset={`${cases2Jpg} 1x, ${cases2JpgRetina} 2x`}
                  type="image/jpeg"
                />
                <img src={cases2Jpg} alt="People" />
              </picture>
            </li>
            <li className={style.imagesItem}>
              <picture>
                <source
                  srcset={`${cases3Webp} 1x, ${cases3WebpRetina} 2x`}
                  type="image/webp"
                />
                <source
                  srcset={`${cases3Jpg} 1x, ${cases3JpgRetina} 2x`}
                  type="image/jpeg"
                />
                <img src={cases3Jpg} alt="People" />
              </picture>
            </li>
            <li className={style.imagesItem}>
              <picture>
                <source
                  srcset={`${cases4Webp} 1x, ${cases4WebpRetina} 2x`}
                  type="image/webp"
                />
                <source
                  srcset={`${cases4Jpg} 1x, ${cases4JpgRetina} 2x`}
                  type="image/jpeg"
                />
                <img src={cases4Jpg} alt="People" />
              </picture>
            </li>
            <li className={style.imagesItem}>
              <picture>
                <source
                  srcset={`${cases5Webp} 1x, ${cases5WebpRetina} 2x`}
                  type="image/webp"
                />
                <source
                  srcset={`${cases5Jpg} 1x, ${cases5JpgRetina} 2x`}
                  type="image/jpeg"
                />
                <img src={cases5Jpg} alt="People" />
              </picture>
            </li>
            <li className={style.imagesItem}>
              <picture>
                <source
                  srcset={`${cases6Webp} 1x, ${cases6WebpRetina} 2x`}
                  type="image/webp"
                />
                <source
                  srcset={`${cases6Jpg} 1x, ${cases6JpgRetina} 2x`}
                  type="image/jpeg"
                />
                <img src={cases6Jpg} alt="People" />
              </picture>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
