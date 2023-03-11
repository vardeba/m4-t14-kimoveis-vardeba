import { Router } from "express";
import {
    createCategoryController,
    listCategoriesController,
    retrieveRealEstatesByCategoriesIdController,
} from "../controllers/categories.controllers";
import ensureCategoryNameIsUniqueMiddleware from "../middlewares/ensureCategoryNameIsUnique.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import ensureUserIsAdminMiddleware from "../middlewares/ensureUserIsAdmin.middleware";
import { createCategorySchema } from "../schemas/categories.schemas";

const categoriesRoutes: Router = Router();

categoriesRoutes.post(
    "",
    ensureTokenIsValidMiddleware,
    ensureUserIsAdminMiddleware,
    ensureDataIsValidMiddleware(createCategorySchema),
    ensureCategoryNameIsUniqueMiddleware,
    createCategoryController
);
categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.get(
    "/:id/realEstate",
    retrieveRealEstatesByCategoriesIdController
);

export default categoriesRoutes;
