import { render, screen } from "@testing-library/react";
import RobotCardList from "./RobotCardList";

describe("Given a RobotCardList component", () => {
  describe("When it receives an array with a RobotCard by props", () => {
    test("Then it should show 'R2D2' robot card", () => {
      const robotCards = [
        {
          _id: "1",
          name: "R2D2",
          imageUrl:
            "https://www.dan-dare.org/Dan%20Saber/StarWarsR2-D2Wallpaper1024.jpg",
          speed: 10,
          resistence: 8,
          dateOfCreation: "12/12/1997",
        },
      ];

      render(<RobotCardList robotCards={robotCards} />);

      const robotNameOne = screen.getByRole("heading", {
        name: robotCards[0].name,
      });

      expect(robotNameOne).toBeInTheDocument();
    });
  });
});
