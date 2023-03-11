import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category, RealEstate } from "../../entities";
import { AppError } from "../../errors";

const retrieveRealEstatesByCategoriesIdService = async (categoryId: number) => {
    const realEstateRepository: Repository<RealEstate> =
        AppDataSource.getRepository(RealEstate);

    const categoryRepository: Repository<Category> =
        AppDataSource.getRepository(Category);

    const findCategory: Category | null = await categoryRepository.findOneBy({
        id: categoryId,
    });

    if (!findCategory) {
        throw new AppError("Category not found", 404);
    }

    const findRealEstates: Array<RealEstate | null> =
        await realEstateRepository.find({
            where: {
                category: true,
            },
        });

    return findRealEstates;
};

export default retrieveRealEstatesByCategoriesIdService;
