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

const Details = () => {
  const navigate = useNavigate();
  const [queryParameters] = useSearchParams();
  const params = useParams();
  const { itemId, otherParam } = useParams();
  console.log(itemId);
  console.log(otherParam);
  // const { state } = useLocation();

  const runSendVarToPage = () => {
    console.log("runSendVarToPage() run");
    navigate("/page3", {
      state: {
        itemId: 87,
        otherParam: "anything you want here",
      },
    });
  };

  // Use this to test out feature
  // https://www.codemzy.com/blog/get-set-query-params-react

  return (
    <>
      <h1>Page 1</h1>
      <h2>useSearchParams</h2>
      {/* <div> */}
      <p>Type: {queryParameters.get("type")}</p>
      <p>Name: {queryParameters.get("name")}</p>

      <button onClick={() => runSendVarToPage()}>Page #3</button>
      {/* <SearchComponent /> */}
      {/* </div> */}
    </>
  );
};

export default Details;
