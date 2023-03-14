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

    const realEstate: RealEstate | null = await realEstateRepository.findOneBy({
        id: scheduleData.realEstateId,
    });

    if (!realEstate) {
        throw new AppError("RealEstate not found", 404);
    }

    const user: User | null = await userRepository.findOneBy({
        id: userId,
    });

    const findScheduleRealEstate = await scheduleRepository
        .createQueryBuilder("schedules_users_properties")
        .innerJoin("schedules_users_properties.user", "schedules_users")
        .innerJoin(
            "schedules_users_properties.realEstate",
            "schedules_real_estate"
        )
        .where("schedules_users_properties.realEstateId = :realEstateId", {
            realEstateId: scheduleData.realEstateId,
        })
        .andWhere("schedules_users_properties.date = :date", {
            date: scheduleData.date,
        })
        .andWhere("schedules_users_properties.hour = :hour", {
            hour: scheduleData.hour,
        })
        .getOne();

    if (findScheduleRealEstate) {
        throw new AppError(
            "Schedule to this real estate at this date and time already exists",
            409
        );
    }

    const findScheduleUser = await scheduleRepository
        .createQueryBuilder("schedules_users_properties")
        .innerJoin("schedules_users_properties.user", "schedules_users")
        .innerJoin(
            "schedules_users_properties.realEstate",
            "schedules_real_estate"
        )
        .where("schedules_users_properties.user = :user", {
            user: userId,
        })
        .andWhere("schedules_users_properties.date = :date", {
            date: scheduleData.date,
        })
        .andWhere("schedules_users_properties.hour = :hour", {
            hour: scheduleData.hour,
        })
        .getOne();

    if (findScheduleUser) {
        throw new AppError(
            "User schedule to this real estate at this date and time already exists",
            409
        );
    }

    const scheduleDate: Date = new Date(
        `${scheduleData.date} ${scheduleData.hour}`
    );

    const scheduleDay: number = scheduleDate.getDay();
    if (scheduleDay === 0 || scheduleDay === 6) {
        throw new AppError("Invalid date, work days are monday to friday", 400);
    }

    const scheduleHour = scheduleDate.getHours();

    if (scheduleHour < 8 || scheduleHour > 18) {
        throw new AppError(
            "Invalid hour, available times are 8AM to 18PM",
            400
        );
    }

    const newSchedule = scheduleRepository.create({
        ...scheduleData,
        user: user!,
    });

    return newSchedule;
};

export default createScheduleService;
