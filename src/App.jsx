import "./App.scss";
import { Demonstration } from "./components/Demonstration";
import { Footer } from "./components/Footer";
import { Gestures } from "./components/Gestures";
import { Header } from "./components/Header";
import { Promo } from "./components/Promo";
import { Team } from "./components/Team";
import { Try } from "./components/Try";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Try />
      <Gestures />
      <Demonstration />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
