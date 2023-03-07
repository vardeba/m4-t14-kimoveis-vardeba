import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IUserReturn, IUserUpdate } from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/users.schemas";

const updateUserService = async (
    userData: IUserUpdate,
    userId: number
): Promise<IUserReturn> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const oldUserData = await userRepository.findOneBy({
        id: userId,
    });

    const user = userRepository.create({
        ...oldUserData,
        ...userData,
    });

    await userRepository.save(user);

    const updatedUser = returnUserSchema.parse(user);

    return updatedUser;
};

export default updateUserService;
