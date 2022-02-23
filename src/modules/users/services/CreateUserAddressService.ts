import AppError from "@shared/errors/AppError";
import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";

interface IRequest 
{
    street: string
    number: string
    cep: string
    neighborhood: string
    state: string
    city: string
    adjunct: string

}

class CreateUserAddressService
{

    public async create({street, number, cep, neighborhood, state, city, adjunct} : IRequest) : Any
    {
        const usersRepository = getCustomRepository(UsersRepository);
        
        const RegisterRepository = getCustomRepository();
        console.log('aqui');
    }
}

export default CreateUserAddressService;