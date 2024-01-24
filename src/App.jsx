import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Details from "./components/Details";
import "./App.css";

import AdoptedPetContext from "./context/AdoptedPetContext";

function App() {
  const adoptedPet = useState(null);

  // const navigate = useNavigate();

  return (
    <>
      <BrowserRouter>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </AdoptedPetContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
