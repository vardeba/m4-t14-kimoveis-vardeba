import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../errors";

const retrieveRealEstatesByCategoriesIdService = async (categoryId: number) => {
    const categoryRepository: Repository<Category> =
        AppDataSource.getRepository(Category);

    const findCategory: Category | null = await categoryRepository.findOneBy({
        id: categoryId,
    });

    if (!findCategory) {
        throw new AppError("Category not found", 404);
    }

    const findRealEstates: Category | null = await categoryRepository.findOne({
        where: {
            id: categoryId,
        },
        relations: {
            realEstate: true,
        },
    });

    return findRealEstates;
};

export default retrieveRealEstatesByCategoriesIdService;
