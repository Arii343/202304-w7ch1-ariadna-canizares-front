import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../components/App/App";
import RobotsPage from "../../pages/RobotsPage/RobotsPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={"/robots"} replace />,
      },
      {
        path: "/robots",
        element: <RobotsPage />,
      },
      {
        path: "*",
        element: <p>Page not found, plese try another one!</p>,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
