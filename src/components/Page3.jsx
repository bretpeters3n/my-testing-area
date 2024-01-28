// import { useContext, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import AdoptedPetContext from "../context/AdoptedPetContext";
import { useLocation } from "react-router-dom";

const Details = () => {
  // const navigate = useNavigate();
  const queryParameters = new URLSearchParams(window.location.search);
  // const type = queryParameters.get("type");
  // const name = queryParameters.get("name");

  const { state } = useLocation();

  return (
    <>
      <h1>Page 3</h1>
      <h2>setQueryParams</h2>
      {/* <div> */}
      <p>itemId: {state.itemId}</p>
      <p>otherParam: {state.otherParam}</p>
      {/* </div> */}
    </>
  );
};

export default Details;
