import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { LeonTheme } from "leon-theme";
import { ThemeProvider } from "styled-components";

const theme = {
  borderRadius: "30px",
  colors: {
    main: "yellow",
    secondary: "purple",
  },
};

{
  /* <ThemeProvider theme={theme}> */
}
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <LeonTheme component={App} theme={theme} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
