import style from "./Contact.module.scss";
import { Mobile, Tablet, Desktop } from "../../helpers/responsiveComponents";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export const Contact = ({ contactRef }) => {
  const SignupSchema = Yup.object().shape({
    userName: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
    email: Yup.string()
      .email("Invalid email")
      .required("This is a required field"),
  });

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
          <Formik
            initialValues={{
              userName: "",
              email: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form data-netlify="true" name="contact" netlify-honeypot="bot-field" hidden>
                <div className={style.label}>
                  <Field
                    name="username"
                    placeholder="Enter your name"
                    className={style.input}
                  />
                </div>
                <div className={style.label}>
                  <Field
                    name="email"
                    className={style.input}
                    placeholder="Enter email*"
                  />
                  {errors.email && touched.email ? (
                    <div className={style.errorMessage}>{errors.email}</div>
                  ) : null}
                </div>
                <button className={style.buttonSubmit} type="submit">
                  Send
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};
