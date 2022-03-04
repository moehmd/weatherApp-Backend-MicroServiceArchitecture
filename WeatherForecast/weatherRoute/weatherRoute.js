import express from 'express';
import getWeather from "../weatherController/weatherController.js";

const weatherRoute = express.Router();

weatherRoute.route('/:id').get( getWeather );

export default weatherRoute;
