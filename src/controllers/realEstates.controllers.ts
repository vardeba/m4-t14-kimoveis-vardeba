import { Request, Response } from "express";

const createRealEstateController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    return res.status(201).json();
};

export { createRealEstateController };
