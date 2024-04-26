import dotenv from 'dotenv'
import { app } from './app.js'
import { json } from 'express'


dotenv.config({
    path: './.env'
})

const PORT=process.env.PORT || 8000


app.listen(PORT,()=>{
    console.log(`⚙️  Server is running on port ${PORT}`)
})