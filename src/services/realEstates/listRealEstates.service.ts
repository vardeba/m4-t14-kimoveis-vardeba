import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";

const listRealEstatesService = async () => {
    const realEstateRepository: Repository<RealEstate> =
        AppDataSource.getRepository(RealEstate);

    const findRealEstates: Array<RealEstate> =
        await realEstateRepository.find();

    return findRealEstates;
};

export default listRealEstatesService;
