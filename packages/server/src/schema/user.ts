import Joi from "joi";

export default {
  validateNewUser: (data: any) => {
    return Joi.object({
      username: Joi.string()
        .min(3)
        .max(30)
        .required()
        .trim(),

      password: Joi.string()
        .min(8)
        .required(),

      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
        .trim(),
    }).validate(data);
  },
};
