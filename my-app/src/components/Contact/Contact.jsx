import style from "./Contact.module.scss";
import { Mobile, Tablet, Desktop } from "../../helpers/responsiveComponents";

export const Contact = ({ contactRef }) => {
  return (
    <section ref={contactRef}>
      <div className={style.contact}>
        <Mobile>
          <picture className={style.contactImage}>
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
        </Mobile>
        <Tablet>
          <div className={style.contactImage}>
            <picture>
              <source
                srcset="/images/home/contactTablet.webp 1x, /images/home/contactTablet@2x.webp 2x"
                type="image/webp"
              />
              <source
                srcset="/images/home/contactTablet.jpg 1x, /images/home/contactTablet@2x.jpg 2x"
                type="image/jpeg"
              />
              <img src="/images/home/contactTablet.jpg" alt="Steve Smith" />
            </picture>
          </div>
        </Tablet>
        <Desktop>
          <picture className={style.contactImage}>
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
        </Desktop>
        <div className={style.contactForm}>
          <h2 className={style.title}>Request Callback</h2>
          <form autocomplete="new-password">
            <label className={style.label}>
              <input
                className={style.input}
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </label>
            <label className={style.label}>
              <input
                className={style.input}
                type="password"
                name="password"
                placeholder="Enter email*"
              />
            </label>
            <button className={style.buttonSubmit} type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
