import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";

const listRealEstatesService = async () => {
    const realEstateRepository: Repository<RealEstate> =
        AppDataSource.getRepository(RealEstate);

    const findRealEstates: Array<RealEstate> = await realEstateRepository.find({
        relations: {
            address: true,
        },
    });

    return findRealEstates;
};

export default listRealEstatesService;
