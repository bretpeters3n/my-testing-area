// import { useContext, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import AdoptedPetContext from "../context/AdoptedPetContext";
import {
  Link,
  Routes,
  Route,
  useSearchParams,
  BrowserRouter,
} from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import SearchComponent from "./SearchComponent";
import { useParams } from "react-router";
import stockAffirmations from "../db/stockAffirmations";

const urlTest =
  '/page3?query=[%7B"id":"4EBDTB","currentGroup":"Default%20Affirmations","groups":[%7B"id":"fkuT6N","group":"Default%20Affirmations","affirmations":[%7B"id":"iqjiu5","affirmation":"You%20got%20this"%7D,%7B"id":"xsNHVz","affirmation":"You’ll%20figure%20it%20out"%7D,%7B"id":"fFTc4T","affirmation":"You’re%20a%20smart%20cookie"%7D,%7B"id":"xxbx1b","affirmation":"I%20believe%20in%20you"%7D,%7B"id":"ogoSaR","affirmation":"Sucking%20at%20something%20is%20the%20first%20step%20towards%20being%20good%20at%20something"%7D]%7D,%7B"id":"cWy99j","group":"Share%20Affirmations","affirmations":[%7B"id":"rAhggX","affirmation":"Struggling%20is%20part%20of%20learning"%7D,%7B"id":"o1eWp2","affirmation":"Everything%20has%20cracks%20-%20that’s%20how%20the%20light%20gets%20in"%7D]%7D,%7B"id":"vP4Hsj","group":"Coding%20Affirmations","affirmations":[%7B"id":"1AmiCP","affirmation":"10x%20engineers%20are%20a%20myth"%7D,%7B"id":"nEkogw","affirmation":"When%20you%20sit%20down%20to%20code%20you%20first%20draw%20from%20your%20experience.%20Keep%20practicing%20to%20build%20that%20experience%20up!"%7D]%7D,%7B"id":"fm3ifm","group":"Empty%20Affirmations","affirmations":[]%7D]%7D]';

const Details = () => {
  const affirmations = stockAffirmations;
  const navigate = useNavigate();

  // const [queryParameters] = useSearchParams();
  // const params = useParams();
  // const { itemId, otherParam } = useParams();
  // console.log(itemId);
  // console.log(otherParam);
  // const { location } = useLocation();

  const runSendVarToPage = () => {
    console.log("runSendVarToPage() run");
    const PAGE_PATH = `/page3?query=`;
    let params = affirmations;
    console.log(params);
    const paramString = JSON.stringify(params);
    // const paramString = params.toString();
    console.log(paramString);
    const urlFormatted = `${PAGE_PATH}${paramString}`;
    console.log(urlFormatted);
    navigate({
      pathname: urlFormatted,
      state: affirmations,
    });
  };

  // Use this to test out feature
  // https://www.codemzy.com/blog/get-set-query-params-react

  return (
    <>
      <h1>Page 1</h1>
      <h2>useSearchParams</h2>
      {/* <div> */}
      {/* <p>Type: {queryParameters.get("type")}</p> */}
      {/* <p>Name: {queryParameters.get("name")}</p> */}

      {/* <button onClick={() => runSendVarToPage()}>Page #3</button> */}
      <Link to={urlTest}>
        <button>Page #3</button>
      </Link>
      {/* <button onClick={() => console.log("test")}>Page #3</button> */}
      {/* <SearchComponent /> */}
      {/* </div> */}
    </>
  );
};

export default Details;
