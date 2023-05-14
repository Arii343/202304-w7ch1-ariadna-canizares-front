import { renderHook } from "@testing-library/react";
import useApi from "./useApi";
import robotsMockData from "../mocks/robots/robotsMockData";

describe("Given a getRobots function", () => {
  describe("When it called", () => {
    test("Then it should return a list with R2D2 and WALL-E", async () => {
      const expectedCardsResponse = robotsMockData;

      const { result } = renderHook(() => useApi());
      const { getRobots } = result.current;
      const cards = await getRobots();

      expect(cards).toStrictEqual(expectedCardsResponse);
    });
  });
});
