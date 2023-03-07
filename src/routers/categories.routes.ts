import { Router } from "express";
import { createCategoryController } from "../controllers/categories.controllers";

const categoriesRoutes: Router = Router();

categoriesRoutes.post("", createCategoryController);
categoriesRoutes.get("");
categoriesRoutes.get("/:id/realEstate");

export default categoriesRoutes;
