import {
    createUserSchema,
    returnMultipleUsersSchema,
    returnUserSchema,
    updateUserSchema,
} from "../schemas/users.schemas";

import { z } from "zod";
import { DeepPartial } from "typeorm";

type IUser = z.infer<typeof createUserSchema>;

type IUserReturn = z.infer<typeof returnUserSchema>;

type IUsersReturn = z.infer<typeof returnMultipleUsersSchema>;

type IUserUpdate = DeepPartial<IUser>;

export { IUser, IUserReturn, IUsersReturn, IUserUpdate };
