import { NextFunction, Request, Response } from "express";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    // check if the user is authenticated

    return next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: String(error) });
  }
};
