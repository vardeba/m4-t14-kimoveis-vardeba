import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import {
    ICategory,
    ICategoryReturn,
} from "../../interfaces/categories.interfaces";

const createCategoryService = async (
    categoryData: ICategory
): Promise<ICategoryReturn> => {
    const categoryRepository: Repository<Category> =
        AppDataSource.getRepository(Category);

    const category: Category = categoryRepository.create(categoryData);

    await categoryRepository.save(category);

    return category;
};

export default createCategoryService;
