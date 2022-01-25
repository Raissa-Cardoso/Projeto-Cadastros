import "reflect-metadata"
import express, {Request, Response, NextFunction} from "express" //não funciona o require aqui
import "express-async-errors"
import "./database"
import bodyParser from "body-parser"
import {router} from "./routes"


const app=express()
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.json())
app.use(router)

app.use((err:Error, request:Request, response:Response, next:NextFunction)=>{
    if(err instanceof Error){
        return response.status(400).json({
            error:err.message
        })
    }
    return response.status(500).json({
        status:"error",
        message:"Internal Server Error"
    })
})


app.listen(3000, ()=> console.log("Server is running!"))


