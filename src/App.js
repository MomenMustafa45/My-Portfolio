import "./App.css";
import Pages from "./Components/Pages/Pages";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div className="App">
      <Pages />
    </div>
  );
}

export default App;
