import { Router } from "express";
import {
    createScheduleController,
    listSchedulesByRealEstateIdController,
} from "../controllers/schedules.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import ensureUserIsAdminMiddleware from "../middlewares/ensureUserIsAdmin.middleware";
import { createScheduleSchema } from "../schemas/schedules.schemas";

const schedulesRoutes: Router = Router();

schedulesRoutes.post(
    "",
    ensureTokenIsValidMiddleware,
    ensureDataIsValidMiddleware(createScheduleSchema),
    createScheduleController
);
schedulesRoutes.get(
    "/realEstate/:id",
    ensureTokenIsValidMiddleware,
    ensureUserIsAdminMiddleware,
    listSchedulesByRealEstateIdController
);

export default schedulesRoutes;
