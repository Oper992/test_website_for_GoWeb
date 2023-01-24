import { Mobile, Tablet, Desktop } from "../../helpers/responsiveComponents";
import style from "./Blog.module.scss";
import blogImageJpg from "../../images/home/blog.jpg";
import blogImageJpgRetina from "../../images/home/blog@2x.jpg";
import blogImageWebp from "../../images/home/blog.webp";
import blogImageWebpRetina from "../../images/home/blog@2x.webp";
import blogImageJpgTablet from "../../images/home/BlogTablet.jpg";
import blogImageJpgTabletRetina from "../../images/home/BlogTablet@2x.jpg";
import blogImageWebpTablet from "../../images/home/BlogTablet.webp";
import blogImageWebpTabletRetina from "../../images/home/BlogTablet@2x.webp";

export const Blog = () => {
  return (
    <section>
      <div className={style.blog}>
        <Mobile>
          <div className={style.peopleImage}>
            <picture>
              <source
                srcset={`${blogImageWebp} 1x, ${blogImageWebpRetina} 2x`}
                type="image/webp"
              />
              <source
                srcset={`${blogImageJpg} 1x, ${blogImageJpgRetina} 2x`}
                type="image/jpeg"
              />
              <img src={blogImageJpg} alt="People" />
            </picture>
          </div>
          <div className={style.description}>
            <p className={style.preTitle}>April 16 2020</p>
            <h2 className={style.title}>Blog Post One</h2>
            <p className={style.postTitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate, ipsum dignissimos quae laudantium asperiores nam
              aliquid impedit harum illum dolore explicabo ab dolores itaque
              rerum temporibus doloribus iste maiores deleniti?
            </p>
            <button type="button" className={style.offerButton}>
              Read Our Blog
            </button>
          </div>
        </Mobile>
        <Tablet>
          <div className={style.description}>
            <p className={style.preTitle}>April 16 2020</p>
            <h2 className={style.title}>Blog Post One</h2>
            <p className={style.postTitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate, ipsum dignissimos quae laudantium asperiores nam
              aliquid impedit harum illum dolore explicabo ab dolores itaque
              rerum temporibus doloribus iste maiores deleniti?
            </p>
            <button type="button" className={style.offerButton}>
              Read Our Blog
            </button>
          </div>
          <div className={style.peopleImage}>
            <picture>
              <source
                srcset={`${blogImageWebpTablet} 1x, ${blogImageWebpTabletRetina} 2x`}
                type="image/webp"
              />
              <source
                srcset={`${blogImageJpgTablet} 1x, ${blogImageJpgTabletRetina} 2x`}
                type="image/jpeg"
              />
              <img src={blogImageJpgTablet} alt="People" />
            </picture>
          </div>
        </Tablet>
        <Desktop>
          <div className={style.description}>
            <p className={style.preTitle}>April 16 2020</p>
            <h2 className={style.title}>Blog Post One</h2>
            <p className={style.postTitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate, ipsum dignissimos quae laudantium asperiores nam
              aliquid impedit harum illum dolore explicabo ab dolores itaque
              rerum temporibus doloribus iste maiores deleniti?
            </p>
            <button type="button" className={style.offerButton}>
              Read Our Blog
            </button>
          </div>
          <div className={style.peopleImage}>
            <picture>
              <source
                srcset={`${blogImageWebp} 1x, ${blogImageWebpRetina} 2x`}
                type="image/webp"
              />
              <source
                srcset={`${blogImageJpg} 1x, ${blogImageJpgRetina} 2x`}
                type="image/jpeg"
              />
              <img src={blogImageJpg} alt="People" />
            </picture>
          </div>
        </Desktop>
      </div>
    </section>
  );
};
