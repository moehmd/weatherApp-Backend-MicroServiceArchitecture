import mongoose from "mongoose";

let countrySchema = mongoose.Schema;

const country_Schema = new countrySchema ({

    _id : {type: String, required: true},
    id: {type: Number, required: true},
    name: {type: String, required: true},
    alpha2: {type: String, required: true},
    alpha3: {type: String, required: true},
});

const Country = mongoose.model('Country', country_Schema);

export default Country;
