import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "../../testUtils/testUtils";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show the text 'A cool robots app!", () => {
      const expectedText = /A cool robots app!/i;

      const routes = [
        {
          path: "/",
          element: <App />,
        },
      ];
      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
