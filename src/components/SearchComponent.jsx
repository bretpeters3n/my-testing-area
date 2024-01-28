import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function SearchComponent(props) {
  const navigate = useNavigate();

  // updates the query params
  function setQueryParams() {
    navigate("/page3", {
      state: {
        itemId: 86,
        otherParam: "anything you want here",
      },
    });
  }

  useEffect(() => {
    setQueryParams();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log("searchComponent page");
}

export default SearchComponent;
