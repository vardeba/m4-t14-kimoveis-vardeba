import { z } from "zod";
import {
    createCategorySchema,
    returnCategorySchema,
    returnMultipleCategoriesSchema,
} from "../schemas/categories.schemas";

type ICategory = z.infer<typeof createCategorySchema>;

type ICategoryReturn = z.infer<typeof returnCategorySchema>;

type ICategoriesReturn = z.infer<typeof returnMultipleCategoriesSchema>;

export { ICategory, ICategoryReturn, ICategoriesReturn };
