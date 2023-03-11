import { Router } from "express";
import {
    createScheduleController,
    listSchedulesByRealEstateIdController,
} from "../controllers/schedules.controllers";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";

const schedulesRoutes: Router = Router();

schedulesRoutes.post(
    "",
    ensureTokenIsValidMiddleware,
    createScheduleController
);
schedulesRoutes.get(
    "/realEstate/:id",
    ensureTokenIsValidMiddleware,
    listSchedulesByRealEstateIdController
);

export default schedulesRoutes;
