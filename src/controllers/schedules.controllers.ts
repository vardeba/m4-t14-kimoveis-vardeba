import { Request, Response } from "express";

const createScheduleController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    return res.status(201).json();
};

export { createScheduleController };
