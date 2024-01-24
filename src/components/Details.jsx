import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdoptedPetContext from "../context/AdoptedPetContext";

const Details = () => {
  const navigate = useNavigate();
  const [, setAdoptedPet] = useContext(AdoptedPetContext);

  return (
    <>
      <button
        onClick={() => {
          setAdoptedPet({ pet: "yes" });
          navigate("/");
        }}
      >
        Yes
      </button>
    </>
  );
};

export default Details;
