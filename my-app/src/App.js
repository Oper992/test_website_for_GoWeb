import { Header } from "./components/Header/Header.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Offer } from "./components/Offer/Offer.jsx";
import { Cases } from "./components/Cases/Cases.jsx";
import { Blog } from "./components/Blog/Blog.jsx";

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
      </main>
    </>
  );
}

export default App;
