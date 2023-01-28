import style from "./Cases.module.scss";

export const Cases = () => {
  return (
    <section>
      <div className="container">
        <div className={style.cases}>
          <p className={style.beforeTitle}>This is what we do</p>
          <h2 className={style.title}>Business Cases</h2>
          <p className={style.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </p>
          <ul className={style.imagesList}>
            <li className={style.imagesItem}>
              <picture >
                <source
                  srcset="/images/cases/cases1.webp 1x, /images/cases/cases1@2x.webp 2x"
                  type="image/webp"
                />
                <source
                  srcset="/images/cases/cases1.jpg 1x, /images/cases/cases1@2x.jpg 2x"
                  type="image/jpeg"
                />
                <img src="/images/cases/cases1.jpg" alt="Case 1" />
              </picture>
            </li>
            <li className={style.imagesItem}>
              <picture>
                <source
                  srcset="/images/cases/cases2.webp 1x, /images/cases/cases1@2x.webp 2x"
                  type="image/webp"
                />
                <source
                  srcset="/images/cases/cases2.jpg 1x, /images/cases/cases2@2x.jpg 2x"
                  type="image/jpeg"
                />
                <img src="/images/cases/cases2.jpg" alt="Case 2" />
              </picture>
            </li>
            <li className={style.imagesItem}>
              <picture>
                <source
                  srcset="/images/cases/cases3.webp 1x, /images/cases/cases3@2x.webp 2x"
                  type="image/webp"
                />
                <source
                  srcset="/images/cases/cases3.jpg 1x, /images/cases/cases3@2x.jpg 2x"
                  type="image/jpeg"
                />
                <img src="/images/cases/cases3.jpg" alt="Case 3" />
              </picture>
            </li>
            <li className={style.imagesItem}>
              <picture>
                <source
                  srcset="/images/cases/cases4.webp 1x, /images/cases/cases4@2x.webp 2x"
                  type="image/webp"
                />
                <source
                  srcset="/images/cases/cases4.jpg 1x, /images/cases/cases4@2x.jpg 2x"
                  type="image/jpeg"
                />
                <img src="/images/cases/cases4.jpg" alt="Case 4" />
              </picture>
            </li>
            <li className={style.imagesItem}>
              <picture>
                <source
                  srcset="/images/cases/cases5.webp 1x, /images/cases/cases5@2x.webp 2x"
                  type="image/webp"
                />
                <source
                  srcset="/images/cases/cases5.jpg 1x, /images/cases/cases5@2x.jpg 2x"
                  type="image/jpeg"
                />
                <img src="/images/cases/cases5.jpg" alt="Case 5" />
              </picture>
            </li>
            <li className={style.imagesItem}>
              <picture>
                <source
                  srcset="/images/cases/cases6.webp 1x, /images/cases/cases6@2x.webp 2x"
                  type="image/webp"
                />
                <source
                  srcset="/images/cases/cases6.jpg 1x, /images/cases/cases6@2x.jpg 2x"
                  type="image/jpeg"
                />
                <img src="/images/cases/cases6.jpg" alt="Case 6" />
              </picture>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
