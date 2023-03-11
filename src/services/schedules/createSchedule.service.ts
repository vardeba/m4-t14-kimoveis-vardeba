import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { AppError } from "../../errors";
import { ISchedule } from "../../interfaces/schedules.interfaces";

const createScheduleService = async (
    scheduleData: ISchedule,
    userId: number
) => {
    const scheduleRepository: Repository<Schedule> =
        AppDataSource.getRepository(Schedule);

    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const realEstateRepository: Repository<RealEstate> =
        AppDataSource.getRepository(RealEstate);

    const realEstate = await realEstateRepository.findOneBy({
        id: scheduleData.realEstateId,
    });

    if (!realEstate) {
        throw new AppError("RealEstate not found", 404);
    }

    const user = await userRepository.findOneBy({
        id: userId,
    });

    const newSchedule = scheduleRepository.create({
        ...scheduleData,
        user: user!,
    });

    return newSchedule;
};

export default createScheduleService;
