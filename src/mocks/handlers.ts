import { rest } from "msw";
import robotsMockData from "./robots/robotsMockData";

const apiUrl = import.meta.env.VITE_APP_API_URL;

export const handlers = [
  rest.get(`${apiUrl}robots`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        robots: robotsMockData,
      })
    );
  }),
];
