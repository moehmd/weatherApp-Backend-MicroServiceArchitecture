import mongoose from "mongoose";

let coordSchema = mongoose.Schema;
let citySchema = mongoose.Schema;

const coord_Schema = new coordSchema ({
    lon : {type: Number, required: true},
    lat : {type: Number, required: true},
});

mongoose.model('Coord', coord_Schema, 'Coord');

const city_Schema = new citySchema ({
    _id : {type: String, required: true},
    id: {type: Number, required: true},
    name: {type: String, required: true},
    state: {type: String, required: false},
    country: {type: String, required: true},
    coord: coord_Schema
});

const City = mongoose.model('City', city_Schema);

export default City;
