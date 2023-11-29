const express= require ("express")
const app = express()
app.use(express.json())
const cors=require('cors')
app.use(cors())
// require env et config 
require("dotenv").config();
// connecter avec la data base en appelant avec require le fichier connectDB
const connectDB = require("./config/ConnectDB");

connectDB();
// ensuite la création du port
const PORT=process.env.PORT


app.use('/api/students',require('./routes/Etudiant'));

// la création du serveur
app.listen(PORT,error=>{
    error ? console.error(`fail to connect ,${error}`) :
    console.log(`server is running on port ${PORT}`)
})

