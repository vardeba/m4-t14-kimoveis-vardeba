import { z } from "zod";
import {
    createRealEstateSchema,
    returnMultipleRealEstateSchema,
    returnRealEstateSchema,
} from "../schemas/realEstates.schemas";

type IRealEstate = z.infer<typeof createRealEstateSchema>;

type IRealEstateReturn = z.infer<typeof returnRealEstateSchema>;

type IRealEstatesReturn = z.infer<typeof returnMultipleRealEstateSchema>;

export { IRealEstate, IRealEstateReturn, IRealEstatesReturn };
