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
  // console.log(affirmations);

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
          <Link to='/page3?query=[%7B"id":"4EBDTB","currentGroup":"Default%20Affirmations","groups":[%7B"id":"fkuT6N","group":"Default%20Affirmations","affirmations":[%7B"id":"iqjiu5","affirmation":"You%20got%20this"%7D,%7B"id":"xsNHVz","affirmation":"You’ll%20figure%20it%20out"%7D,%7B"id":"fFTc4T","affirmation":"You’re%20a%20smart%20cookie"%7D,%7B"id":"xxbx1b","affirmation":"I%20believe%20in%20you"%7D,%7B"id":"ogoSaR","affirmation":"Sucking%20at%20something%20is%20the%20first%20step%20towards%20being%20good%20at%20something"%7D]%7D,%7B"id":"cWy99j","group":"Share%20Affirmations","affirmations":[%7B"id":"rAhggX","affirmation":"Struggling%20is%20part%20of%20learning"%7D,%7B"id":"o1eWp2","affirmation":"Everything%20has%20cracks%20-%20that’s%20how%20the%20light%20gets%20in"%7D]%7D,%7B"id":"vP4Hsj","group":"Coding%20Affirmations","affirmations":[%7B"id":"1AmiCP","affirmation":"10x%20engineers%20are%20a%20myth"%7D,%7B"id":"nEkogw","affirmation":"When%20you%20sit%20down%20to%20code%20you%20first%20draw%20from%20your%20experience.%20Keep%20practicing%20to%20build%20that%20experience%20up!"%7D]%7D,%7B"id":"fm3ifm","group":"Empty%20Affirmations","affirmations":[]%7D]%7D]'>
            <button>Page #3</button>
          </Link>
          <p>otherParam: {JSON.stringify(affirmations)}</p>

          {/* <button onClick={() => navigate("/")}>count</button> */}
        </nav>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3/*" element={<Page3 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
