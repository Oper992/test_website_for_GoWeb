import style from "./Team.module.scss";

export const Team = () => {
  return (
    <section>
      <div className={style.team}>
        <div className="container">
          <p className={style.beforeTitle}>Who we are</p>
          <h2 className={style.title}>Our Professional Team</h2>
          <p className={style.afterTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </p>
          <ul className={style.teamList}>
            <li className={style.teamItem}>
              <picture className={style.teamImage}>
                <source
                  srcset="/images/team/person1.webp 1x, /images/team/person1@2x.webp 2x"
                  type="image/webp"
                />
                <source
                  srcset="/images/team/person1.jpg 1x, /images/team/person1@2x.jpg 2x"
                  type="image/jpeg"
                />
                <img src="/images/team/person1.jpg" alt="Person 1" />
              </picture>
              <h3 className={style.personTitle}>John Doe</h3>
              <p className={style.personDescription}>President</p>
            </li>
            <li className={style.teamItem}>
              <picture className={style.teamImage}>
                <source
                  srcset="/images/team/person2.webp 1x, /images/team/person2@2x.webp 2x"
                  type="image/webp"
                />
                <source
                  srcset="/images/team/person2.jpg 1x, /images/team/person2@2x.jpg 2x"
                  type="image/jpeg"
                />
                <img src="/images/team/person2.jpg" alt="Person 2" />
              </picture>
              <h3 className={style.personTitle}>Jane Doe</h3>
              <p className={style.personDescription}>Vice President</p>
            </li>
            <li className={style.teamItem}>
              <picture className={style.teamImage}>
                <source
                  srcset="/images/team/person3.webp 1x, /images/team/person3@2x.webp 2x"
                  type="image/webp"
                />
                <source
                  srcset="/images/team/person3.jpg 1x, /images/team/person3@2x.jpg 2x"
                  type="image/jpeg"
                />
                <img src="/images/team/person3.jpg" alt="Person 3" />
              </picture>
              <h3 className={style.personTitle}>Steve Smith</h3>
              <p className={style.personDescription}>Marketing Head</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
