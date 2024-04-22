import { useState } from "react";
import Header from "./layout/Header";
import "./App.css";
import Carousel from "./components/Carousel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Carousel />
    </div>
  );
}

export default App;
