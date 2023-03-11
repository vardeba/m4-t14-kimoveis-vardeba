import { Request, Response } from "express";
import { ICategory } from "../interfaces/categories.interfaces";
import createCategoryService from "../services/categories/createCategory.service";
import listCategoriesService from "../services/categories/listCategories.service";
import retrieveRealEstatesByCategoriesIdService from "../services/categories/retrieveRealEstatesByCategoriesId.service";

const createCategoryController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const categoryData: ICategory = req.body;

    const newCategory = await createCategoryService(categoryData);

    return res.status(201).json(newCategory);
};

const listCategoriesController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const categoriesList = await listCategoriesService();

    return res.json(categoriesList);
};

const retrieveRealEstatesByCategoriesIdController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const categoryId: number = parseInt(req.params.id);

    const realEstates = await retrieveRealEstatesByCategoriesIdService(
        categoryId
    );

    return res.json(realEstates);
};

export {
    createCategoryController,
    listCategoriesController,
    retrieveRealEstatesByCategoriesIdController,
};
