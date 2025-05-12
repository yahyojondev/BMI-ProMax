import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
const App = React.lazy(() => import("./App"));
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./context/store";
import { Provider } from "react-redux";
import "./sass/main.scss";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="loading__wrapper">
          <div>P</div>
          <div>R</div>
          <div>O</div>
          <div>M</div>
          <div>A</div>
          <div>X</div>
        </div>
      }
    >
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
