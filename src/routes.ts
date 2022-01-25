import {Router} from "express"

import { CreateUserController } from "./controllers/CreateUserController"
import { CreateCategoryController } from "./controllers/CreateCategoryController"
import { ensureAdmin } from "./middlewares/ensureAdmin"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { CreateProductController } from "./controllers/CreateProductController"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"
import { ListUsersController } from "./controllers/ListUsersController"
import { ListCategoriesController } from "./controllers/ListCategoriesController"
import { ListProductsByCategoryController } from "./controllers/ListProductsByCategoryController"


const router=Router()

const createUserController= new CreateUserController()
const createCategoryController= new CreateCategoryController()
const authenticateUserController= new AuthenticateUserController()
const createProductController= new CreateProductController()
const listProductsByCategoryController=new ListProductsByCategoryController()
const listCategoriesController= new ListCategoriesController()
const listUsersController= new ListUsersController()

router.post("/users",createUserController.handle)
router.post("/categories", ensureAuthenticated, ensureAdmin, createCategoryController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/products",ensureAuthenticated, ensureAdmin, createProductController.handle )


router.get("/categories/products", ensureAuthenticated, listProductsByCategoryController.handle)
router.get("/categories", ensureAuthenticated, listCategoriesController.handle)
router.get("/users", ensureAuthenticated, listUsersController.handle)

export{router}