import { Header } from "./components/Header/Header.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Offer } from "./components/Offer/Offer.jsx";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Offer />
      </main>
    </>
  );
}

export default App;
