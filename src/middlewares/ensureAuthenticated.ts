import { Request,Response,NextFunction } from "express";
import {verify} from "jsonwebtoken"

interface IPayLoad{
    sub:string
}

export function ensureAuthenticated(request:Request, response:Response,next:NextFunction){
    const authToken=request.headers.authorization
    if(!authToken){
        return response.status(401).end()
    }
    const [,token]=authToken.split(" ")
    try{
        const {sub}= verify(token, "bc30f8c47c8a50fa6f19ddd8dd7185e7") as IPayLoad
        request.user_id=sub
        return next()
    }catch(err){
        return response.status(401).end()
    }
    
    
}