import Joi from "@hapi/joi";

export function AuthenticateUser(body: any){
    const schema = Joi.object({
        username: Joi.string().min(3).required(),
        email: Joi.string().min(4).required().email(),
        password: Joi.string().min(6),
  });
  return schema.validate(body);
}

export default AuthenticateUser;