import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";

const listCategoriesService = async () => {
    const categoryRepository: Repository<Category> =
        AppDataSource.getRepository(Category);

    const findCategories: Array<Category> = await categoryRepository.find();

    return findCategories;
};

export default listCategoriesService;
