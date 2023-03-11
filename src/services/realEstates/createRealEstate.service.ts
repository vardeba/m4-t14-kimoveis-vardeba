import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import {
    IRealEstate,
    IRealEstateReturn,
} from "../../interfaces/realEstates.interfaces";

const createRealEstateService = async (
    realEstateData: IRealEstate
): Promise<any> => {
    const realEstateRepository: Repository<RealEstate> =
        AppDataSource.getRepository(RealEstate);

    const addressRepository: Repository<Address> =
        AppDataSource.getRepository(Address);

    const categoryRepository: Repository<Category> =
        AppDataSource.getRepository(Category);

    const category = await categoryRepository.findOneBy({
        id: realEstateData.categoryId!,
    });

    const newAddress: Address = addressRepository.create({
        ...realEstateData.address,
    });

    await addressRepository.save(newAddress);

    const newRealEstate: RealEstate = realEstateRepository.create({
        ...realEstateData,
        address: newAddress,
        category: category!,
    });

    await realEstateRepository.save(newRealEstate);

    return newRealEstate;
};

export default createRealEstateService;
