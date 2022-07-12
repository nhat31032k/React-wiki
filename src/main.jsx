import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ErrorBoundary from "./ErrorBoundary";
import { Provider } from "react-redux";
import store from "././store/configureStore";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>
);
