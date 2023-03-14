import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";

const deleteUserService = async (
    userId: number,
    loggedUserId: number
): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const loggedUser = await userRepository.findOne({
        where: {
            id: loggedUserId,
        },
    });

    const userToDelete = await userRepository.findOne({
        where: {
            id: userId,
        },
    });

    if (userId !== loggedUserId && loggedUser!.admin === false) {
        throw new AppError("Insufficient permission", 403);
    }

    await userRepository.softRemove(userToDelete!);
};

export default deleteUserService;
