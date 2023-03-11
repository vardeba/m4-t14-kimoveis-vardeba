import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Category } from "../entities";
import { AppError } from "../errors";

const ensureCategoryNameIsUniqueMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    if (!req.body.name) {
        return next();
    }

    const categoryRepository: Repository<Category> =
        AppDataSource.getRepository(Category);

    const findCategory = await categoryRepository.findOne({
        where: {
            name: req.body.name,
        },
    });

    if (findCategory) {
        throw new AppError("Category already exists.", 409);
    }

    return next();
};

export default ensureCategoryNameIsUniqueMiddleware;
