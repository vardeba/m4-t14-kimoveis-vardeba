import { Router } from "express";
import { createScheduleController } from "../controllers/schedules.controllers";

const schedulesRoutes: Router = Router();

schedulesRoutes.post("", createScheduleController);
schedulesRoutes.get("/realEstate/:id");

export default schedulesRoutes;
