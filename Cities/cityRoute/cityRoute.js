import express from 'express';
import getSelectCities from "../cityController/cityController.js";

const cityRoute = express.Router();

cityRoute.route('/:id').get( getSelectCities );

export default cityRoute;
