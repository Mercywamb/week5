import express, { ErrorRequestHandler, NextFunction, Request, Response, json } from 'express'
import dotenv from 'dotenv';
const app = express();
const port = 4400;

// mongoose.connect("mongodb://mercywamb:<password>")

app.use(json())
app.use('/notes', notesrouter)

// app.use((error:Error, req:Request, res:Response, next:NextFunction) =>{
//     res.json({
//         message: error.message
//     })
// } )
app.listen(4400, ()=>{
    console.log("server running on port 4400");
})