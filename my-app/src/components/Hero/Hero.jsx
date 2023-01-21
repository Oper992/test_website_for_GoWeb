import style from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section>
      <div className={style.hero}>
        <div className="container">
          <h1 className={style.heroTitle}>The Sky Is The Limit</h1>
          <p>We provide world class financial assistance</p>
        </div>
      </div>
    </section>
  );
};
