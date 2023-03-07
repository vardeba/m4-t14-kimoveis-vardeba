import { Request, Response } from "express";

const createCategoryController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    return res.status(201).json();
};

export { createCategoryController };
