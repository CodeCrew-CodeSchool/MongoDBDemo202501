import { MongoClient } from 'mongodb';
//dotenv enables the app to read environment variables
import dotenv from 'dotenv';
//This loads the .env file and system environment variables into process.env
dotenv.config();

//Assign the .env values to variables we can use
const dbuser = process.env.dbUsername; //database username
const dbpwd = process.env.dbPwd; //database password
const dbconn = process.env.dbConnection || ""; //database connection string

let client = new MongoClient(dbconn);
await client.connect();
console.log('Connected successfully to server');

const db = client.db('test'); //specify database
const collection = db.collection('info'); //specify collection
const results = await collection.find().toArray(); 

console.log(results);