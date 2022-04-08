import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
// import ReactDom from "react-dom";

import { App } from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// ReactDom.render(<App />, document.querySelector("#root"));
