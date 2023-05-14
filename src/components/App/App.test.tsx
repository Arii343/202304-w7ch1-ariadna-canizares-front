import { screen } from "@testing-library/react";
import App from "./App";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../testUtils/testUtils";

const routes = [
  {
    path: "/",
    element: <App />,
  },
];
const router = createMemoryRouter(routes);

describe("Given a App component", () => {
  describe("When it is rendered", () => {
    test("Then it should render a span with the text 'Robotown'", () => {
      const expectedText = "Robotown";

      renderWithProviders(<RouterProvider router={router} />);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
