import RobotCard from "./RobotCard";
import { render, screen } from "@testing-library/react";

describe("Given a RobotCard component", () => {
  const robot = {
    name: "R2D2",
    imageUrl:
      "https://www.dan-dare.org/Dan%20Saber/StarWarsR2-D2Wallpaper1024.jpg",
    speed: 10,
    resistence: 8,
    dateOfCreation: "12/12/1997",
  };

  describe("When it receives a name prop with value of 'R2D2' ", () => {
    test("Then it should show a 'R2D2' name", () => {
      render(
        <RobotCard
          dateOfCreation={robot.dateOfCreation}
          imageUrl={robot.imageUrl}
          name={robot.name}
          resistence={robot.resistence}
          speed={robot.speed}
        />
      );

      const robotName = screen.getByRole("heading", {
        name: robot.name,
      });

      expect(robotName).toBeInTheDocument();
    });
    test("Then it should show a 'Robot portait R2D2' alt on img tag", () => {
      const expectedImgAlt = `Robot portait ${robot.name}`;

      render(
        <RobotCard
          dateOfCreation={robot.dateOfCreation}
          imageUrl={robot.imageUrl}
          name={robot.name}
          resistence={robot.resistence}
          speed={robot.speed}
        />
      );

      const robotImage = screen.getByAltText(expectedImgAlt);
      expect(robotImage).toBeInTheDocument();
    });
  });
  describe("When it receives a speed prop with value of 10", () => {
    test("Then it should show a 10 number", () => {
      render(
        <RobotCard
          dateOfCreation={robot.dateOfCreation}
          imageUrl={robot.imageUrl}
          name={robot.name}
          resistence={robot.resistence}
          speed={robot.speed}
        />
      );

      const robotSpeed = screen.getByText(robot.speed);

      expect(robotSpeed).toBeInTheDocument();
    });
  });
  describe("When it receives a resistence prop with value of 8", () => {
    test("Then it should show a 8 number", () => {
      render(
        <RobotCard
          dateOfCreation={robot.dateOfCreation}
          imageUrl={robot.imageUrl}
          name={robot.name}
          resistence={robot.resistence}
          speed={robot.speed}
        />
      );

      const robotResistence = screen.getByText(robot.resistence);

      expect(robotResistence).toBeInTheDocument();
    });
  });
  describe("When it receives a dateOfCreation prop with value of '12/12/1997'", () => {
    test("Then it should show a 8 number", () => {
      render(
        <RobotCard
          dateOfCreation={robot.dateOfCreation}
          imageUrl={robot.imageUrl}
          name={robot.name}
          resistence={robot.resistence}
          speed={robot.speed}
        />
      );

      const robotDateOfCreation = screen.getByText(robot.dateOfCreation);

      expect(robotDateOfCreation).toBeInTheDocument();
    });
  });
});
