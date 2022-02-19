import AppError from "@shared/errors/AppError";
import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";

interface IRequest 
{
    name: string
    email: string
    password: string
    cpf: string
}

class CreateUserService
{
    public async execute({name, email, password , cpf}: IRequest) : Promise<User>
    {
        console.log('execute');
        
        const usersRepository = getCustomRepository(UsersRepository);
        const emailExists = await usersRepository.findByEmail(email);
        if(emailExists)
        {
            throw new AppError('Email address already used');
        }
        const id = usersRepository.generateNewId();

        const hashedPassword = await hash(password, 8);
        const user = usersRepository.create({
            id,
            name,
            email,
            password : hashedPassword,
            cpf
        });

        await usersRepository.save(user);

        return user;
    
    }
}

export default CreateUserService;