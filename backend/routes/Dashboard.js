import express from "express"
import { IsAdmin } from "../middleware/Admin.js"
import { GetAllData, GetUser, DeleteUser } from "../controllers/Dashboard.js"

const  DashboardRoutes = express.Router()


DashboardRoutes.get('/',IsAdmin, GetAllData)
DashboardRoutes.get('/allusers',IsAdmin,GetUser)
DashboardRoutes.delete('/deleteuser/:userId',IsAdmin,DeleteUser)

export default DashboardRoutes