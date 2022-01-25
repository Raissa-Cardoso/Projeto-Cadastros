import { Request, Response } from "express";
import { ListProductsByCategoryService } from "../services/ListProductsByCategoryService";

class ListProductsByCategoryController{
    async handle(request:Request, response:Response){
        const {category_id}=request.body
        const listProductsByCategoryService=new ListProductsByCategoryService()
        const category=await listProductsByCategoryService.execute(category_id)

        return response.json(category)
    }
}

export {ListProductsByCategoryController}