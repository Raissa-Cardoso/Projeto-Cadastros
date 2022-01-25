import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../repositories/ProductsRepositories";
import { CategoriesRepositories } from "../repositories/CategoriesRepositories";


interface IProductRequest{
    category_id:string    
    name: string
    price: number
}

class CreateProductService{
    async execute({category_id,name,price}:IProductRequest){
        const productRepositories=getCustomRepository(ProductsRepositories)
        const categoriesRepository= getCustomRepository(CategoriesRepositories)
        
        const categoryExists=await categoriesRepository.findOne(category_id)
        if(!categoryExists){
            throw new Error("Category does not exists")
        }
        
        if(!name){
            throw new Error("Incorrect name")
        }
        const productAlreadyExists= await productRepositories.findOne({
            name
        })
        if(productAlreadyExists){
            throw new Error("Product already exists")
        }              
               
        const product=productRepositories.create({
            category_id,
            name,
            price
        })

        await productRepositories.save(product)
        return product
    }
}

export {CreateProductService}