import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../components/App/App";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "*",
        element: <p>Page not found, plese try another one!</p>,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
