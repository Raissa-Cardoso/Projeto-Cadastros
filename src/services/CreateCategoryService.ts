import { getCustomRepository } from "typeorm";
import { CategoriesRepositories } from "../repositories/CategoriesRepositories";

class CreateCategoryService{
    async execute (name:string){                               
        const categoriesRepository= getCustomRepository(CategoriesRepositories)                   
        
        if(!name){
            throw new Error("Incorrect name")
        }
        const categoryAlreadyExists= await categoriesRepository.findOne({
            name
        })
        if(categoryAlreadyExists){
            throw new Error("Category already exists")
        }
        const category=categoriesRepository.create({
            name
        })
        
        await categoriesRepository.save(category)
        return category
    }
}

export {CreateCategoryService}