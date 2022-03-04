import express from "express";
import cors from "cors";
import weatherRoute from "../weatherRoute/weatherRoute.js";

const weatherApp = express();

weatherApp.use(
    cors(),
    express.urlencoded({ extended: true }), 
    express.json()
);

weatherApp.use('', weatherRoute);

weatherApp.listen();
  
export default weatherApp
