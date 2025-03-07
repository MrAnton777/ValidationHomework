import * as Joi from 'joi';

export const book_schema = Joi.object().keys({
    title: Joi.string().required(),
    desc: Joi.string().min(5).required(),
    author: Joi.string().optional()
})