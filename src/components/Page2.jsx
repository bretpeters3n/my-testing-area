// import { useContext, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import AdoptedPetContext from "../context/AdoptedPetContext";

const Details = () => {
  // const navigate = useNavigate();
  const queryParameters = new URLSearchParams(window.location.search);
  const type = queryParameters.get("type");
  const name = queryParameters.get("name");

  return (
    <>
      <h1>Page 2</h1>
      <h2>URLSearchParams</h2>
      {/* <div> */}
      <p>Type: {type}</p>
      <p>Name: {name}</p>
      {/* </div> */}
    </>
  );
};

export default Details;
