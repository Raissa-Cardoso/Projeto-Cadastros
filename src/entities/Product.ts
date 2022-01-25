import {Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne} from "typeorm";
import {v4 as uuid} from "uuid"
import { Category } from "./Category";

@Entity("products")
class Product {
    @PrimaryColumn()
    readonly id:string  
    
    @Column()
    category_id:string
    
    @JoinColumn({name:"category_id"})
    @ManyToOne(()=>Category)
    category:Category

    @Column()
    name:string

    @Column()
    price:number

    @CreateDateColumn()
    created_at:Date

    constructor(){
        if(!this.id){
            this.id=uuid()
        }
    }
}

export {Product}