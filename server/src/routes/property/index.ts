import { NextFunction, Request, Response, Router } from "express";

const property = Router()

// import utils
import AsyncHandler from "../../utils/network/AsyncHandler";
import ApiResponse from "../../utils/network/ApiResponse";

property.get('/list',AsyncHandler( async(req:Request , res:Response , next:NextFunction)=>{
      return ApiResponse.success([],"Working",200).send(res)
}))

property.post('/register',AsyncHandler( async(req:Request , res:Response , next:NextFunction)=>{
    return ApiResponse.success([],"Property has been added successfully",200).send(res)
}))

property.put('/update',AsyncHandler( async(req:Request , res:Response , next:NextFunction)=>{
    return ApiResponse.success([],"Property has been updated successfully",200).send(res)
}))

property.delete('/delete',AsyncHandler( async(req:Request , res:Response , next:NextFunction)=>{
    return ApiResponse.success([],"Property has been delisted successfully",200).send(res)
}))



export default property;