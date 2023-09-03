import { Router, Request, Response } from "express";
import userSchema from "../../schema/user";
import userModel from "../../models/userModel";
import * as u from "../../utils";

const userRouter = Router();

userRouter.post("/", (req: Request, res: Response) => {
  try {
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

    const createdUser = userModel.createUser({
      ...postData,
      id: u.createID()
    } as u.User);

    if (!createdUser) {
      res.status(400).json(
        u.createErrorResponse(
          u.ErrorCode.USER_ALREADY_EXISTS,
          "User with the given details is already registered",
          {},
          {
            email: postData.email,
            username: postData.username
          }
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
  } catch (error) {
    res.status(500).json(
      u.createErrorResponse(
        u.ErrorCode.INTERNAL_ERROR,
        "Something went wrong internally, please report it at /report",
        {},
        {}
      )
    );
  }
});

export default userRouter;
