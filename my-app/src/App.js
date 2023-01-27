import { Header } from "./components/Header/Header.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Offer } from "./components/Offer/Offer.jsx";
import { Cases } from "./components/Cases/Cases.jsx";
import { Blog } from "./components/Blog/Blog.jsx";
import { Team } from "./components/Team/Team.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Offer />
        <Cases />
        <Blog />
        <Team />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
