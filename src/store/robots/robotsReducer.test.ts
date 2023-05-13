import robotsMockData from "../../mocks/robots/robotsMockData";
import { loadRobotsActionCreator, robotsReducer } from "./robotsSlice";
import { RobotsStateStructure } from "./types";

describe("Given a robotsReducer", () => {
  describe("When it receives and empty robots list and a loadRobots action with 2 robots as payload ", () => {
    test("Then it should return a new state with the 2 robots", () => {
      const expectedRobotsState: RobotsStateStructure = {
        robotsData: robotsMockData,
      };

      const currentRobotsState: RobotsStateStructure = {
        robotsData: [],
      };

      const newRobotsState: RobotsStateStructure = robotsReducer(
        currentRobotsState,
        loadRobotsActionCreator(robotsMockData)
      );

      expect(newRobotsState).toStrictEqual(expectedRobotsState);
    });
  });
});
