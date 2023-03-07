import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { ILogin } from "../../interfaces/login.interfaces";
import "dotenv/config";

const createLoginService = async (loginData: ILogin): Promise<string> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user: User | null = await userRepository.findOneBy({
        email: loginData.email,
    });

    if (!user) {
        throw new AppError("Wrong email or password!", 401);
    }

    const passwordMatch: boolean = await compare(
        loginData.password,
        user.password
    );

    if (!passwordMatch) {
        throw new AppError("Wrong email or password!", 401);
    }

    const token: string = jwt.sign(
        {
            admin: user.admin,
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: process.env.EXPIRES_IN,
            subject: user.id.toString(),
        }
    );

    return token;
};

export default createLoginService;
