import style from "./Offer.module.scss";
import peopleImageJpgTablet from "../../images/home/Rectangle.jpg";
import peopleImageJpgRetinaTablet from "../../images/home/Rectangle@2x.jpg";
import peopleImageWebpTablet from "../../images/home/Rectangle.webp";
import peopleImageWebpRetinaTablet from "../../images/home/Rectangle_2x.webp";
import peopleImageJpg from "../../images/home/people.jpg";
import peopleImageJpgRetina from "../../images/home/people@2x.jpg";
import peopleImageWebp from "../../images/home/people.webp";
import peopleImageWebpRetina from "../../images/home/people@2x.webp";
import { Mobile, Tablet, Desktop } from "../../helpers/responsiveComponents";

export const Offer = () => {
  return (
    <section>
      <div className={style.offer}>
        <Mobile>
          <div className={style.peopleImage}>
            <picture>
              <source
                srcset={`${peopleImageWebp} 1x, ${peopleImageWebpRetina} 2x`}
                type="image/webp"
              />
              <source
                srcset={`${peopleImageJpg} 1x, ${peopleImageJpgRetina} 2x`}
                type="image/jpeg"
              />
              <img src={peopleImageJpg} alt="People" />
            </picture>
          </div>
        </Mobile>
        <Tablet>
          <div className={style.peopleImage}>
            <picture>
              <source
                srcset={`${peopleImageWebpTablet} 1x, ${peopleImageWebpRetinaTablet} 2x`}
                type="image/webp"
              />
              <source
                srcset={`${peopleImageJpgTablet} 1x, ${peopleImageJpgRetinaTablet} 2x`}
                type="image/jpeg"
              />
              <img src={peopleImageJpgTablet} alt="People" />
            </picture>
          </div>
        </Tablet>
        <Desktop>
          <div className={style.peopleImage}>
            <picture>
              <source
                srcset={`${peopleImageWebp} 1x, ${peopleImageWebpRetina} 2x`}
                type="image/webp"
              />
              <source
                srcset={`${peopleImageJpg} 1x, ${peopleImageJpgRetina} 2x`}
                type="image/jpeg"
              />
              <img src={peopleImageJpg} alt="People" />
            </picture>
          </div>
        </Desktop>
        <div className={style.description}>
          <p className={style.preTitle}>What you are looking for</p>
          <h2 className={style.title}>We provide bespoke solutions</h2>
          <p className={style.postTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <button type="button" className={style.offerButton}>
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};
