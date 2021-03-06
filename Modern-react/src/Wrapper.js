import React from "react";

function Wrapper({ children }) {
  const style = {
    border: "5px solid gray",
    padding: 16,
  };

  return <div style={style}>{children}</div>;
}

export default Wrapper;
