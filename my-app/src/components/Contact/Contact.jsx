import style from "./Contact.module.scss";

export const Contact = () => {
  return (
    <section>
      <div>
        <picture className={style.teamImage}>
          <source
            srcset="/images/home/contact.webp 1x, /images/home/contact@2x.webp 2x"
            type="image/webp"
          />
          <source
            srcset="/images/home/contact.jpg 1x, /images/home/contact@2x.jpg 2x"
            type="image/jpeg"
          />
          <img src="/images/home/contact.jpg" alt="Steve Smith" />
        </picture>
        <div className={style.contactForm}>
          <h2 className={style.title}>Request Callback</h2>
          <form autocomplete="off">
            <label>
              <input type="text" name="name" placeholder="Enter your name" />
            </label>
            <label>
              <input
                type="password"
                name="password"
                placeholder="Enter email*"
              />
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};
