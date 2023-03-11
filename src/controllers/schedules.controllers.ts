import { Request, Response } from "express";
import { ISchedule } from "../interfaces/schedules.interfaces";
import createScheduleService from "../services/schedules/createSchedule.service";
// import listScheduleByRealEstateIdService from "../services/schedules/listSchedulesByRealEstateId.service";

const createScheduleController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const scheduleData: ISchedule = req.body;

    const userId: number = req.user.id;

    const newSchedule = await createScheduleService(scheduleData, userId);

    return res.status(201).json(newSchedule);
};

const listSchedulesByRealEstateIdController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const realEstateId: number = parseInt(req.params.id);

    // const scheduleList = await listScheduleByRealEstateIdService(realEstateId);

    return res.status(201).json();
};

export { createScheduleController, listSchedulesByRealEstateIdController };
