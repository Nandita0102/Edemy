import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'

//Initialize Express

const app = express()

//connect to database
await connectDB()

// middleware
app.use(cors());


// Routes
app.get('/', (req,res)=>{res.send("Edemy API is working fine!")})
app.post('/clerk', express.json(),clerkWebhooks)

// port
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`);
    
})