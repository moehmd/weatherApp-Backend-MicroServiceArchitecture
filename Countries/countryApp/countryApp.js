import express from "express";
import cors from "cors";
import countryRoute from "../countryRoute/countryRoute.js";

const countryApp = express();

countryApp.use(
    cors(),
    express.urlencoded({ extended: true }), 
    express.json(),
    express.static("media")
);

countryApp.use('', countryRoute);

countryApp.listen();
  
export default countryApp
