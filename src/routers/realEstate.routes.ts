import { Router } from "express";
import { createRealEstateController } from "../controllers/realEstates.controllers";

const realEstateRoutes: Router = Router();

realEstateRoutes.post("", createRealEstateController);
realEstateRoutes.get("");

export default realEstateRoutes;
