import { z } from "zod";
import {
    createAddressSchema,
    returnAddressSchema,
} from "../schemas/addresses.schemas";

type IAddress = z.infer<typeof createAddressSchema>;

type IAddressReturn = z.infer<typeof returnAddressSchema>;

export { IAddress, IAddressReturn };
