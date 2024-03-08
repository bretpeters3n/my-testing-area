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

const Details = (props) => {
  // const navigate = useNavigate();
  const queryParameters = new URLSearchParams(window.location.search);
  const QUERY_ARRAY2 = queryParameters.get("query");
  console.log(QUERY_ARRAY2);
  // const type = queryParameters.get("type");
  // const name = queryParameters.get("name");
  // const [searchParams, setSearchParams] = useSearchParams();

  // const { state } = useLocation();

  // const QUERY_ARRAY = searchParams.get("query");
  // console.log(QUERY_ARRAY);

  // let affirmations = props.state.affirmations;

  return (
    <>
      <h1>Page 3</h1>
      <h2>setQueryParams</h2>
      {/* <div> */}
      {/* <p>itemId: {state.itemId}</p>
      <p>otherParam: {state.otherParam}</p> */}
      {/* <p>otherParam: {state.affirmations}</p> */}
      {/* <p>otherParam: {state.affirmations}</p> */}
      {/* </div> */}
      <div>{QUERY_ARRAY2}</div>
    </>
  );
};

export default Details;
