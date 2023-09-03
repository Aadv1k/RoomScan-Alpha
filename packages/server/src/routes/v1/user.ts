import { Router, Request, Response } from "express";
import userSchema from "../../schema/user";

const userRouter = Router();

import * as u from "../../utils";

userRouter.post("/", (req: Request, res: Response) => {
  const postData = req.body;
  const userValid = userSchema.validateNewUser(postData);

  if (userValid.error) {
    res.status(400).json(
        u.createErrorResponse(
            u.ErrorCode.BAD_INPUT,
            "Bad input, please refer to the API",
            userValid.error.details,
            postData
        )
    );
    return;
  }

  res.status(201).json(
      u.createSuccessResponse({
          user: {
              username: userValid.value.username,
              email: userValid.value.email,
          },
          token: "TODO",
      })
  );
});

export default userRouter;
