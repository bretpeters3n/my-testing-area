import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import { useNavigate, useParams } from "react-router-dom";

import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import stockAffirmations from "./db/stockAffirmations";
import "./App.css";

function App() {
  // const navigate = useNavigate();
  // const navigate = useNavigate();
  // const navigate = useNavigate();
  const affirmations = stockAffirmations;

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/page1?type=dog&name=ellie">
            <button>Page #1</button>
          </Link>
          <Link to="/page2?type=cat&name=benji">
            <button>Page #2</button>
          </Link>
          <Link to="/page3?">
            <button>Page #3</button>
          </Link>
          {/* <button onClick={() => navigate("/")}>count</button> */}
        </nav>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
