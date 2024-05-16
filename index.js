import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
// init express 
const app = express();
//init the connection to the database
mongoose.connect('mongodb+srv://sydneymondestin:6mF558eAWHp2uv1Q@estiam.1ky5lce.mongodb.net/?retryWrites=true&w=majority&appName=estiam',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//connect to database
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
// init the routes
app.use('/api',UserRoute);
// set the port and run start the server
app.listen(5000, ()=> console.log('Server up and running...'));