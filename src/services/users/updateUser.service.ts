import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { IUserReturn, IUserUpdate } from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/users.schemas";

const updateUserService = async (
    userData: IUserUpdate,
    userId: number,
    loggedUserAdmin: boolean,
    loggedUserId: number
): Promise<IUserReturn> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const oldUserData = await userRepository.findOneBy({
        id: userId,
    });

    if (loggedUserAdmin === false && userId !== loggedUserId) {
        throw new AppError("Insufficient permission", 403);
    }

    const user = userRepository.create({
        ...oldUserData,
        ...userData,
    });

    await userRepository.save(user);

    const updatedUser = returnUserSchema.parse(user);

    return updatedUser;
};

export default updateUserService;
