import Joi from 'joi';

export default {
    storeUser: {
        body: {
            nome: Joi.string().required(),
            num_documento: Joi.string().required(),
            email: Joi.string().email().required(),
            endereco: Joi.string().required(),
            telefone: Joi.string().min(10).max(11).required(),
            cargo: Joi.string().required(),
            turno: Joi.string().required(),
            password: Joi.string().min(6).required()
        }
    },

    updateUser: {
        body: {
            nome: Joi.string().required(),
            num_documento: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required()
        },
        params: {
            userId: Joi.string().hex().required()
        }
    },

    login: {
        body: {
            username: Joi.string().required(),
            password: Joi.string().required()
        }
    }
};