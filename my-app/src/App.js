import { Header } from "./components/Header/Header.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { About } from "./components/About/About.jsx";
import { Cases } from "./components/Cases/Cases.jsx";
import { Blog } from "./components/Blog/Blog.jsx";
import { Team } from "./components/Team/Team.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { useRef } from "react";

function App() {
  const refs = {
    homeRef: useRef(null),
    aboutRef: useRef(null),
    casesRef: useRef(null),
    blogRef: useRef(null),
    contactRef: useRef(null),
  };

  return (
    <>
      <header>
        <Header refs={refs} />
      </header>
      <main>
        <Hero homeRef={refs.homeRef} />
        <About aboutRef={refs.aboutRef} />
        <Cases casesRef={refs.casesRef} />
        <Blog blogRef={refs.blogRef} />
        <Team />
        <Contact contactRef={refs.contactRef} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
