import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProductService";

class CreateProductController{
    async handle(request:Request,response:Response){
        const {category_id,name, price}=request.body
        
        const createProductService= new CreateProductService()
        const product=await createProductService.execute({
           category_id,
           name,
           price
        })
        return response.json(product)
    }
}

export{CreateProductController}