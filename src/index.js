import  express  from "express";


const app = express()
console.log("hi");

const PORT = 8080

app.listen(PORT,()=> {
    console.log(`Sever listening at port ${PORT}`)
})
