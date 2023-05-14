import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Navbar />,
  },
];
const router = createMemoryRouter(routes);

describe("Given a Navbar component", () => {
  describe("When rendered", () => {
    test("Then it should show Home, Create and Edit navigation links", () => {
      const links = ["Home", "Create", "Edit"];

      render(<RouterProvider router={router} />);

      links.forEach((link) => {
        const navigationLink = screen.getByRole("link", {
          name: link,
        });
        expect(navigationLink).toBeInTheDocument();
      });
    });

    test("Then it should show the site name 'Robotown'", () => {
      const siteName = "Robotown";

      render(<RouterProvider router={router} />);
      const siteTitle = screen.getByText(siteName);

      expect(siteTitle).toBeInTheDocument();
    });
  });
});
