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
import { createUserSchema, updateUserSchema } from "../schemas/users.schemas";

const userRoutes: Router = Router();

userRoutes.post(
    "",
    ensureDataIsValidMiddleware(createUserSchema),
    ensureEmailIsUniqueMiddleware,
    createUserController
);

userRoutes.get("", ensureTokenIsValidMiddleware, listUsersController);

userRoutes.delete("/:id", ensureUserExistsMiddleware, deleteUserController);

userRoutes.patch(
    "/:id",
    ensureDataIsValidMiddleware(updateUserSchema),
    ensureUserExistsMiddleware,
    updateUserController
);

export default userRoutes;
