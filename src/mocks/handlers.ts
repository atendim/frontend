import {rest} from "msw";
import { buildUserTest } from "../__tests__/utils/buildUserTest";

export const handlers = [
  rest.post('*/login', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(buildUserTest())
    )
  })
]