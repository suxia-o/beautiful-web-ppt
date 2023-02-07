import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const deck = new Reveal({
  plugins: [Markdown],
});
deck.initialize();
