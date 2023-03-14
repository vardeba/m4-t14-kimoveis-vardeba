import { z } from "zod";
import { returnRealEstateSchema } from "./realEstates.schemas";
import { returnUserSchema } from "./users.schemas";

const createScheduleSchema = z.object({
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number(),
});

const returnScheduleSchema = createScheduleSchema.extend({
    id: z.number(),
    user: returnUserSchema,
    realEstate: returnRealEstateSchema,
});

const returnMultipleScheduleSchema = returnScheduleSchema.array();

const returnSchedulesByRealEstateIdSchema = z.object({});

export {
    createScheduleSchema,
    returnScheduleSchema,
    returnMultipleScheduleSchema,
    returnSchedulesByRealEstateIdSchema,
};
