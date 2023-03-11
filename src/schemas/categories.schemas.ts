import { z } from "zod";

const createCategorySchema = z.object({
    name: z.string().min(3).max(45),
});

const returnCategorySchema = createCategorySchema.extend({
    id: z.number(),
});

const returnMultipleCategoriesSchema = returnCategorySchema.array();

export {
    createCategorySchema,
    returnCategorySchema,
    returnMultipleCategoriesSchema,
};
