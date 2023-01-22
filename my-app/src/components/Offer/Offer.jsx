import style from "./Offer.module.scss";
import peopleImageJpg from '../../images/home/people.jpg'
import peopleImageJpgRetina from '../../images/home/people@2x.jpg'
import peopleImageWebp from '../../images/home/people.webp'
import peopleImageWebpRetina from '../../images/home/people@2x.webp'

export const Offer = () => {
  return (
    <section className={style.offer}>
      <picture>
        <source srcset={`${peopleImageWebp} 1x, ${peopleImageWebpRetina} 2x" type="image/webp`} />
        <source srcset={`${peopleImageJpg} 1x, ${peopleImageJpgRetina} 2x`} type="image/jpeg" />
        <img src={peopleImageJpg} alt="People" />
      </picture>
      <div className="container">
        <p className={style.preTitle}>What you are looking for</p>
        <h2 className={style.title}>We provide bespoke solutions</h2>
        <p className={style.postTitle}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button type="button" className={style.offerButton}>
          Read More
        </button>
      </div>
    </section>
  );
};
