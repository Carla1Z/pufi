import { LandingPage } from "./views/LandingPage";
import { PufiRain } from "./views/PufiRain";
import { PufiPuff } from "./views/PufiPuff";
import { PufiCart } from "./views/PufiCart";
import { PufiNap } from "./views/PufiNap";
import { Espufi } from "./views/Espufi";
import "./styles/globalStyles.scss";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <PufiRain />
      <PufiPuff />
      <PufiCart />
      <PufiNap />
      <Espufi />
    </div>
  );
}

export default App;
