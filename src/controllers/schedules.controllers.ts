import { Request, Response } from "express";
import { ISchedule } from "../interfaces/schedules.interfaces";
import createScheduleService from "../services/schedules/createSchedule.service";
import listScheduleByRealEstateIdService from "../services/schedules/listSchedulesByRealEstateId.service";

const createScheduleController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const scheduleData: ISchedule = req.body;

    const userId: number = req.user.id;

    await createScheduleService(scheduleData, userId);

    return res.status(201).json({
        message: "Schedule created",
    });
};

const listSchedulesByRealEstateIdController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const realEstateId: number = parseInt(req.params.id);

    const scheduleList = await listScheduleByRealEstateIdService(realEstateId);

    return res.status(200).json(scheduleList);
};

export { createScheduleController, listSchedulesByRealEstateIdController };
