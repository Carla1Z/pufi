import "./globalStyles.scss";
import { LandingPage } from "./views/LandingPage";
import { PufiRain } from "./views/PufiRain";
import { PufiPuff } from "./views/PufiPuff";
import { PufiCart } from "./views/PufiCart";
import { PufiNap } from "./views/PufiNap";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <PufiRain />
      <PufiPuff />
      <PufiCart />
      <PufiNap />
    </div>
  );
}

export default App;
