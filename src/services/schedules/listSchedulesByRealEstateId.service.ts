import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule } from "../../entities";
import { AppError } from "../../errors";
import { ISchedulesReturn } from "../../interfaces/schedules.interfaces";

const listScheduleByRealEstateIdService = async (realEstateId: number) => {
    const scheduleRepository: Repository<Schedule> =
        AppDataSource.getRepository(Schedule);

    const realEstateRepository: Repository<RealEstate> =
        AppDataSource.getRepository(RealEstate);

    const realEstate: RealEstate | null = await realEstateRepository.findOne({
        where: {
            id: realEstateId,
        },
        relations: {
            address: true,
            category: true,
            schedules: {
                user: true,
            },
        },
    });

    if (!realEstate) {
        throw new AppError("RealEstate not found", 404);
    }

    return realEstate;
};

export default listScheduleByRealEstateIdService;
