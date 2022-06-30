import * as db from "../config/db";
import { User, UserDocument, AuthToken } from "../models/User";
import { Request, Response, NextFunction } from "express";
import { WriteError } from "mongodb";
import { body, check, validationResult } from "express-validator";
import { CallbackError, NativeError } from "mongoose";

/**
 * Gets a users list
 * @route GET /GetUsersList
 */
export const GetUsersList = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    User.find({},(err,result) => {
        if(err){
            const resp = {success:false,message:"Error in User list",data:err}
            return res.send(resp);
        } else {
            const resp = {success:true, message:"Gets a users list",data:result };
            return res.send(resp);
        }
    })
};
/**
 * Create a new local account.
 * @route POST /createAccount
 */
export const createAccount = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await check("email", "Email is not valid").isEmail().run(req);
    await body("email").normalizeEmail({ gmail_remove_dots: false }).run(req);
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors, ' - - - - errors');
        return res.redirect("/users");
    }

    const user = new User({
        email: req.body.email,
        name:req.body.name
    });
    User.insertMany(user).then((result) => {
      return res.send({success:true,message:"User created Successfully",data:result});
    }).catch((err) =>{
        console.log(err, ' - - - -');
        return res.send({success:false,message:"Error in User create",data:err});
    })
};

