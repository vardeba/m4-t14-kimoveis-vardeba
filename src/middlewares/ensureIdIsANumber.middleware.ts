import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

const ensureIdIsANumberMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const id: any = req.params.id;

    if (id % 1 !== 0) {
        throw new AppError(`The id ${id} is not a number!`, 404);
    }

    return next();
};

export default ensureIdIsANumberMiddleware;
