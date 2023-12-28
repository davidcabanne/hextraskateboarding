import React, { createContext, useState } from "react";

export const MouseContext = createContext({
  cursorType: "",
  cursorChangeHandler: () => {},
});

const MouseContextProvider = (props) => {
  const [cursorType, setCursorType] = useState("");

  const cursorChangeHandler = (cursorType) => {
    setCursorType(cursorType);
  };

  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
      }}
    >
      {props.children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;

// import { MouseContext } from "../context/mouseContext";

// const { cursorType, cursorChangeHandler } = useContext(MouseContext);

// <div className="container">
//   <div
//     onMouseEnter={() => cursorChangeHandler("hovered")}
//     onMouseLeave={() => cursorChangeHandler("")}
//   >
//     <h1>Hover over me</h1>
//   </div>
// </div>;
