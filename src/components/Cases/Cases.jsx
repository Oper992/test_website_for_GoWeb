import * as React from "react";
import style from "./Cases.module.scss";
import { images } from "../../helpers/images";
import FsLightbox from "fslightbox-react";

export const Cases = ({ casesRef }) => {
  const [toggler, setToggler] = React.useState(false);
  const [imageId, setImageId] = React.useState(null);

  const openModal = (e) => {
    setImageId(Number(e.currentTarget.id));
  };

  return (
    <section ref={casesRef}>
      <div className="container">
        <div className={style.cases}>
          <p className={style.beforeTitle}>This is what we do</p>
          <h2 className={style.title}>Business Cases</h2>
          <p className={style.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </p>
          <ul className={style.imagesList}>
            {images.map((image) => {
              return (
                <li key={image.id} className={style.imagesItem}>
                  <picture id={image.id} onClick={() => setToggler(!toggler)} className={style.imagesItem}>
                    <source
                      srcSet={`${image.srcWebp1x} 1x, ${image.srcWebp2x} 2x`}
                      type="image/webp"
                    />
                    <source
                      srcSet={`${image.srcJpg1x} 1x, ${image.srcJpg2x} 2x`}
                      type="image/jpeg"
                    />
                    <img src={image.srcJpg1x} alt={`Case ${image.id}`} />
                  </picture>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <FsLightbox
        toggler={toggler}
        sources={["/images/home/blog.jpg", "/images/cases/cases2@2x.jpg"]}
        key={productIndex}
      />
    </section>
  );
};
