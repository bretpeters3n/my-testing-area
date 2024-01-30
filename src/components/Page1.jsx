// import { useContext, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import AdoptedPetContext from "../context/AdoptedPetContext";
import {
  Routes,
  Route,
  useSearchParams,
  BrowserRouter,
} from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import SearchComponent from "./SearchComponent";
import { useParams } from "react-router";
import stockAffirmations from "../db/stockAffirmations";

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
    const PAGE_PATH = `/page3`;
    let params = affirmations;
    console.log(params);
    const paramString = JSON.stringify(params);
    // const paramString = params.toString();
    console.log(paramString);
    const urlFormatted = `${PAGE_PATH}/query=${paramString}`;
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

      <button onClick={() => runSendVarToPage()}>Page #3</button>
      {/* <button onClick={() => console.log("test")}>Page #3</button> */}
      {/* <SearchComponent /> */}
      {/* </div> */}
    </>
  );
};

export default Details;
