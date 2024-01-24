import { useContext, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import AdoptedPetContext from "../context/AdoptedPetContext";
import ShortUniqueId from "short-unique-id";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

const Homepage = () => {
  const [adoptedPet] = useContext(AdoptedPetContext);
  const [count, setCount] = useState(0);

  const uid = new ShortUniqueId();
  const newUID = uid.rnd();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>{newUID}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Link to="/details" className="theme-switcher">
          Edit/Add
        </Link>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {
        adoptedPet ? (
          <div className="pet image-container">
            <p>Success:</p>
            {console.log(adoptedPet)}
          </div>
        ) : null // you have to remove this semi-colon, my auto-formatter adds it back if I delete it
      }
    </>
  );
};

export default Homepage;
