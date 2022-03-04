import express from 'express';
import getCountries from "../countryController/countryController.js";

const countryRoute = express.Router();

countryRoute.route('/').get( getCountries );

export default countryRoute;
