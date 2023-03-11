import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

const ensureUserIsAdminMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const isAdmin: boolean = req.user.admin;

    if (!isAdmin) {
        throw new AppError("Insufficient Permission", 403);
    }

    return next();
};

export default ensureUserIsAdminMiddleware;
