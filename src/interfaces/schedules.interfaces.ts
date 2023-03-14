import { z } from "zod";
import {
    createScheduleSchema,
    returnMultipleScheduleSchema,
    returnScheduleSchema,
} from "../schemas/schedules.schemas";

type ISchedule = z.infer<typeof createScheduleSchema>;

type IScheduleReturn = z.infer<typeof returnScheduleSchema>;

type ISchedulesReturn = z.infer<typeof returnMultipleScheduleSchema>;

export { ISchedule, IScheduleReturn, ISchedulesReturn };
