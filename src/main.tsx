import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./store";
import GlobalStyle from "./styles/GlobalStyle/GlobalStyle";
import "@fontsource/inter";
import appRouter from "./routers/appRouter/appRouter";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>
);
