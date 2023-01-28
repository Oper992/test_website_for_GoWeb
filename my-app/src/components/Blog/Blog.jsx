import { Mobile, Tablet, Desktop } from "../../helpers/responsiveComponents";
import style from "./Blog.module.scss";

export const Blog = () => {
  return (
    <section>
      <div className={style.blog}>
        <Mobile>
          <div className={style.blogImage}>
            <picture>
              <source
                srcset="/images/home/blog.webp 1x, /images/home/blog@2x.webp 2x"
                type="image/webp"
              />
              <source
                srcset="/images/home/blog.jpg 1x, /images/home/blog@2x.jpg 2x"
                type="image/jpeg"
              />
              <img src="/images/home/blog@2x.jpg" alt="People" />
            </picture>
          </div>
          <div className={style.description}>
            <p className={style.beforeTitle}>April 16 2020</p>
            <h2 className={style.title}>Blog Post One</h2>
            <p className={style.afterTitle}>
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
            <p className={style.beforeTitle}>April 16 2020</p>
            <h2 className={style.title}>Blog Post One</h2>
            <p className={style.afterTitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate, ipsum dignissimos quae laudantium asperiores nam
              aliquid impedit harum illum dolore explicabo ab dolores itaque
              rerum temporibus doloribus iste maiores deleniti?
            </p>
            <button type="button" className={style.offerButton}>
              Read Our Blog
            </button>
          </div>
          <div className={style.blogImage}>
            <picture>
              <source
                srcset="/images/home/BlogTablet.webp 1x, /images/home/BlogTablet@2x.webp 2x"
                type="image/webp"
              />
              <source
                srcset="/images/home/BlogTablet.jpg 1x, /images/home/BlogTablet@2x.jpg 2x"
                type="image/jpeg"
              />
              <img src="/images/home/BlogTablet.jpg" alt="People" />
            </picture>
          </div>
        </Tablet>
        <Desktop>
          <div className={style.description}>
            <p className={style.beforeTitle}>April 16 2020</p>
            <h2 className={style.title}>Blog Post One</h2>
            <p className={style.afterTitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate, ipsum dignissimos quae laudantium asperiores nam
              aliquid impedit harum illum dolore explicabo ab dolores itaque
              rerum temporibus doloribus iste maiores deleniti?
            </p>
            <button type="button" className={style.blogButton}>
              Read Our Blog
            </button>
          </div>
          <div className={style.blogImage}>
          <picture>
              <source
                srcset="/images/home/blog.webp 1x, /images/home/blog@2x.webp 2x"
                type="image/webp"
              />
              <source
                srcset="/images/home/blog.jpg 1x, /images/home/blog@2x.jpg 2x"
                type="image/jpeg"
              />
              <img src="/images/home/blog@2x.jpg" alt="People" />
            </picture>
          </div>
        </Desktop>
      </div>
    </section>
  );
};
