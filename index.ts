import * as express from "express"
import { connection } from "./connection/connection"
import { users } from "./entities/users"
import * as cors from "cors"
const app=express()
app.use(cors())
app.use(express.json())
const server=app.listen(3000,()=>{
    console.log("server running at 3000....")
})
app.get("/api",(req,res)=>{
    res.send("Welcome to API")
})
connection.then(
    async connection=>{
        console.log("connected")
        const usersRepository = connection.getRepository(users);
        app.get("/api/users",async (req,res)=>{
            const users=await usersRepository.find()
            res.send(users)
        })
        app.post("/api/users",async (req,res)=>{
            
            console.log("body",req.body)
            const user=await usersRepository.create(req.body)
            const results = await usersRepository.save(user);
            
      res.json({
        message: "success",
        payload: results
      });
    })
      app.get("/api/users/:id",async(req,res)=>{
        console.log("called")
          console.log(req.params.id)
          const user=await usersRepository.findOne({where: { id: req.params.id }})
          res.json({
              message:"success",
              payload: user
          })
      })
      app.delete("/api/users/:id",async(req,res)=>{
        const user=await usersRepository.delete(req.params.id)
        res.json({
            message:"success",
        })
    })
    app.put("/api/users/:id",async(req,res)=>{
        const user=await usersRepository.findOne(req.params.id)
        usersRepository.merge(user, req.body);
        const result = await usersRepository.save(user);
        res.json({
            message:"success",
            payload:result
        })
  
    })
        
    }
).catch(error=>{
    console.log(error)
})