import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Pages/redux/store";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./Pages/Tesseract/serviceWorker";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();

///----------------------
// De Martí Corbalan para todos 05:23 PM
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// import { Provider } from "react-redux";
// import store from "./store"
// ReactDOM.render(
// <React.StrictMode>
//   <Provider store={store}>
//     <App />
//   </Provider>
// </React.StrictMode>,
// document.getElementById("root")
// );
