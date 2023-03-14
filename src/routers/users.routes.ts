import { Router } from "express";
import {
    createUserController,
    deleteUserController,
    listUsersController,
    updateUserController,
} from "../controllers/users.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureEmailIsUniqueMiddleware from "../middlewares/ensureEmailIsUnique.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import ensureUserExistsMiddleware from "../middlewares/ensureUserExists.middleware";
import ensureUserIsAdminMiddleware from "../middlewares/ensureUserIsAdmin.middleware";
import { createUserSchema, updateUserSchema } from "../schemas/users.schemas";

const userRoutes: Router = Router();

userRoutes.post(
    "",
    ensureDataIsValidMiddleware(createUserSchema),
    ensureEmailIsUniqueMiddleware,
    createUserController
);

userRoutes.get(
    "",
    ensureTokenIsValidMiddleware,
    ensureUserIsAdminMiddleware,
    listUsersController
);

userRoutes.delete(
    "/:id",
    ensureTokenIsValidMiddleware,
    ensureUserExistsMiddleware,
    deleteUserController
);

userRoutes.patch(
    "/:id",
    ensureTokenIsValidMiddleware,
    ensureDataIsValidMiddleware(updateUserSchema),
    ensureUserExistsMiddleware,
    updateUserController
);

export default userRoutes;
