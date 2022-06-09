import { body } from "express-validator";
import User from "../models/User";

export class UserValidators {
    static signup() {
        return [body('email', 'Email is required').isEmail().custom((email, {req})=>{ 
            console.log(req.body);
            return User.findOne({email: email}).then(user=>{
                if(user) {
                    throw new Error('User Already Exist')
                } else {
                    return true;
                }
            })
        }),
                body('password', 'Password is required').isAlphanumeric().isLength({min: 8, max:20}).withMessage('Password can be from 8-20 Characters only'),
                body('username', 'Username is required').isString()];
    }

    static verifyUser() {
        return [body('verification_token', 'Verification token is required').isNumeric(),
                body('email', 'Email is required').isEmail()]
    }
}