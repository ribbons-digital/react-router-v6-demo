import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import AppWrapper from "./App";

ReactDOM.render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
  document.getElementById("root")
);

module?.hot.accept();
