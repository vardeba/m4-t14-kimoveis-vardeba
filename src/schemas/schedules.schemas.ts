import { z } from "zod";

const createScheduleSchema = z.object({
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number(),
});

const returnScheduleSchema = createScheduleSchema.extend({
    id: z.number(),
    userId: z.number(),
});

const returnMultipleScheduleSchema = returnScheduleSchema.array();

const returnSchedulesByRealEstateIdSchema = z.object({});

export {
    createScheduleSchema,
    returnScheduleSchema,
    returnMultipleScheduleSchema,
};
