import { z } from "zod";
import { createAddressSchema } from "./addresses.schemas";

const createRealEstateSchema = z.object({
    value: z.number().or(z.string()),
    size: z.number().positive(),
    address: createAddressSchema,
    categoryId: z.number().nullish(),
});

const returnRealEstateSchema = createRealEstateSchema.extend({
    id: z.number(),
    sold: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
});

const returnMultipleRealEstateSchema = returnRealEstateSchema.array();

export {
    createRealEstateSchema,
    returnRealEstateSchema,
    returnMultipleRealEstateSchema,
};
