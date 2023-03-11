import { Router } from "express";
import {
    createRealEstateController,
    listRealEstatesController,
} from "../controllers/realEstates.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import ensureUserIsAdminMiddleware from "../middlewares/ensureUserIsAdmin.middleware";
import { createRealEstateSchema } from "../schemas/realEstates.schemas";

const realEstateRoutes: Router = Router();

realEstateRoutes.post(
    "",
    ensureTokenIsValidMiddleware,
    ensureUserIsAdminMiddleware,
    ensureDataIsValidMiddleware(createRealEstateSchema),
    createRealEstateController
);
realEstateRoutes.get("", listRealEstatesController);

export default realEstateRoutes;
