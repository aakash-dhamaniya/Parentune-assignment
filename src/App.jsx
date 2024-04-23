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
      <div className="top-100">
        <h2>Top 100 Cryptocurrencies by Market Cap</h2>
      </div>
      <div></div>
    </div>
  );
}

export default App;
