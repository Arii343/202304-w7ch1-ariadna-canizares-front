import { rest } from "msw";
import robotsMockData from "./robots/robotsMockData";

export const handlers = [
  rest.get("robots", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        robots: robotsMockData,
      })
    );
  }),
];
