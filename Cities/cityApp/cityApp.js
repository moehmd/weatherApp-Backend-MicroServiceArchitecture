import express from "express";
import cors from "cors";
import cityRoute from "../cityRoute/cityRoute.js";

const cityApp = express();

cityApp.use(
    cors(),
    express.urlencoded({ extended: true }), 
    express.json()
);

cityApp.use('', cityRoute);

cityApp.listen();
  
export default cityApp
