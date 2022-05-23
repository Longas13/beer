import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import BeerList from "./components/BeerList"
import Navbar from "./components/Navbar";
import FurtherDetails from "./pages/FurtherDetails";

function App() {
  const [allBeer, setAllBeer] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await fetch('https://api.punkapi.com/v2/beers');
        const json = await response.json();
        setAllBeer(json);
      } catch (error) {
        setIsError(error);
      } finally {
        setIsLoading(true);
      }
    };
    fetchBeer();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<BeerList allBeer={allBeer} />} />
          <Route path="/beer/:id" element={<FurtherDetails allBeer={allBeer} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
