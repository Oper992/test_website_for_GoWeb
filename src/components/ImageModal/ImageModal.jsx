import style from "./ImageModal.module.scss";
import { images } from "../../helpers/images";

export const ImageModal = ({ id, closeModal, nextImage, prevImage }) => {
  return (
    <div className={style.backdrop}>
      <div className={style.image}>
        {images.map((image) => {
          return (
            image.id === id && (
              <picture key={image.id}>
                <source srcSet={image.srcWebp2x} type="image/webp" />
                <source srcSet={image.srcJpg2x} type="image/jpeg" />
                <img src={image.srcJpg1x} alt={`Case ${image.id}`} />
              </picture>
            )
          );
        })}
        <img
          className={style.close}
          src="/images/gallery/close.png"
          alt="Close"
          onClick={closeModal}
        />
        <div className={style.nextArrowContainer}>
          <img
            className={style.nextArrow}
            src="/images/gallery/next.png"
            alt="Close"
            onClick={nextImage}
          />
        </div>
        <div className={style.prevArrowContainer}>
          <img
            className={style.prevArrow}
            src="/images/gallery/prev.png"
            alt="Close"
            onClick={prevImage}
          />
        </div>
      </div>
    </div>
  );
};
