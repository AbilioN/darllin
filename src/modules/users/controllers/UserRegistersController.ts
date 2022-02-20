import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";
import ListUserService from "../services/ListUserService";

export default class UserRegistersController
{
    public async index(request : Request , response : Response) : Promise<Response>
    {

        const listUser = new ListUserService();

        const users = await listUser.execute();

        return response.json(users);
    }

    public async create(request : Request , response : Response) : Promise<Response>
    {
        console.log(request.body);
        return;
        const {name, email, password , cpf} = request.body;

        const createUser = new CreateUserService();

        const user = await createUser.execute({
            name,
            email,
            password,
            cpf
        });

        return response.json(user);
    }

}