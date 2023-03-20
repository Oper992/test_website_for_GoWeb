import style from "./About.module.scss";
import { Mobile, Tablet, Desktop } from "../../helpers/responsiveComponents";

export const About = ({ aboutRef }) => {
  return (
    <section ref={aboutRef}>
      <div className={style.about}>
        <Mobile>
          <div className={style.peopleImage}>
            <picture>
              <source
                srcset="/images/home/people.webp 1x, /images/home/people@2x.webp 2x"
                type="image/webp"
              />
              <source
                srcset="/images/home/people.jpeg 1x, /images/home/people@2x.jpeg 2x"
                type="image/jpeg"
              />
              <img src="/images/home/people.jpeg" alt="People" />
            </picture>
          </div>
        </Mobile>
        <Tablet>
          <div className={style.peopleImage}>
            <picture>
              <source
                srcset="/images/home/Rectangle.webp 1x, /images/home/Rectangle_2x.webp 2x"
                type="image/webp"
              />
              <source
                srcset="/images/home/Rectangle.jpeg 1x, /images/home/Rectangle@2x.jpeg 2x"
                type="image/jpeg"
              />
              <img src="/images/home/Rectangle.jpeg" alt="People" />
            </picture>
          </div>
        </Tablet>
        <Desktop>
          <div className={style.peopleImage}>
            <picture>
              <source
                srcset="/images/home/peopleDesktop@1x.webp 1x, /images/home/peopleDesktop@2x.webp 2x"
                type="image/webp"
              />
              <source
                srcset="/images/home/peopleDesktop@1x.jpeg 1x, /images/home/peopleDesktop@2x.jpeg 2x"
                type="image/jpeg"
              />
              <img src="/images/home/peopleDesktop@1x.jpeg" alt="People" />
            </picture>
          </div>
        </Desktop>
        <div className={style.description}>
          <p className={style.beforeTitle}>What you are looking for</p>
          <h2 className={style.title}>We provide bespoke solutions</h2>
          <p className={style.afterTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <button type="button" className={style.aboutButton}>
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};
