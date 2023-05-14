import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import RobotsPage from "./RobotsPage";
import robotsMockData from "../../mocks/robots/robotsMockData";

describe("Given a RobotsPage component", () => {
  describe("When rendered", () => {
    test("Then it should show a list with R2D2 and WALL-E in two headings", () => {
      const robots = ["R2D2", "WALL-E"];
      const robotsStore = {
        robots: {
          robotsData: robotsMockData,
        },
      };

      renderWithProviders(<RobotsPage />, robotsStore);

      robots.forEach((robot) => {
        const robotName = screen.getByRole("heading", {
          name: robot,
        });

        expect(robotName).toBeInTheDocument();
      });
    });
  });
});
