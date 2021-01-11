import * as express from "express"
import { connection } from "./connection/connection"
import { users } from "./entities/users"
const cors=require("cors")
const app=express()
app.use(cors())
const server=app.listen(3000,()=>{
    console.log("server running at 3000....")
})
app.get("/api",(req,res)=>{
    res.send("Welcome to API")
})
connection.then(
    async connection=>{
        const usersRepository = connection.getRepository(users);
        app.get("/api/users",async (req,res)=>{
            const users=await usersRepository.find()
            res.send(users)
        })
        app.post("/api/users",async (req,res)=>{
            const user=await usersRepository.create(req.body)
            const results = await usersRepository.save(user);
      res.json({
        message: "success",
        payload: results
      });
      app.get("/api/users/:id",async(req,res)=>{
          const user=await usersRepository.findOne(req.params.id)
          res.json({
              message:"success",
              payload: user
          })
      })

        })
    }
).catch(error=>{
    console.log(error)
})