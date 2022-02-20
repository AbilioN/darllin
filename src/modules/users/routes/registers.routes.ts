import { Router } from "express";

import { celebrate, Joi, Segments } from "celebrate";
import UserRegistersController from "../controllers/UserRegistersController";
import isAuthenticated from "../../../shared/http/middlewares/isAuthenticated";
import multer from "multer";
// import uploadConfig from "@config/upload";
import UserAvatarController from "../controllers/UserAvatarController";

const registersRouter  = Router();

const userRegistersController = new UserRegistersController();
// const usersAvatarController = new UserAvatarController();

// const upload = multer(uploadConfig);

registersRouter.get('/' ,isAuthenticated , userRegistersController.index);


registersRouter.post(
    '/',
    celebrate({
        [Segments.BODY] : {
            "address" : Joi.object({
                "street" : Joi.string().required(),
                "number" : Joi.string().required(),
                "cep" : Joi.string().required().max(8),
                "neighborhood" : Joi.string().required(),
                "state" : Joi.string().required(),
                "city" : Joi.string().required(),
                "adjunct" : Joi.string()
            }),
        }
    }),
    isAuthenticated
    ,
    userRegistersController.create
);

// registersRouter.patch(
//     '/avatar',
//     isAuthenticated,
//     upload.single('avatar'),
//     usersAvatarController.update,

// );

export default registersRouter;