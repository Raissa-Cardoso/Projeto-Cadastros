import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../repositories/ProductsRepositories";

class ListProductsByCategoryService{
    async execute (category_id:string){
        const productsRepositories=getCustomRepository(ProductsRepositories)
        const products = await productsRepositories.find({
            where:{
                category_id:category_id
            }
        })
        return products
    }
}

export {ListProductsByCategoryService}