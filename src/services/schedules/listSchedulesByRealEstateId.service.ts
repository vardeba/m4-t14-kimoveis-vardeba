import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule } from "../../entities";
import { AppError } from "../../errors";
import { ISchedulesReturn } from "../../interfaces/schedules.interfaces";

// const listScheduleByRealEstateIdService = async (
//     realEstateId: number
// ): Promise<ISchedulesReturn> => {
//     const scheduleRepository: Repository<Schedule> =
//         AppDataSource.getRepository(Schedule);

//     const realEstateRepository: Repository<RealEstate> =
//         AppDataSource.getRepository(RealEstate);

//     const realEstate: RealEstate | null = await realEstateRepository.findOneBy({
//         id: realEstateId,
//     });

//     if (!realEstate) {
//         throw new AppError("RealEstate not found", 404);
//     }

//     const findSchedules = await scheduleRepository.find({
//         // relations: {
//         //     realEstate: true,
//         // },
//     });

//     if (!findSchedules) {
//         throw new AppError("No schedules found", 404);
//     }

//     return findSchedules;
// };

// export default listScheduleByRealEstateIdService;
