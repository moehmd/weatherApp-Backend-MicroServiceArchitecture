import City from "../cityModel/City.js";

const getSelectCities = async (req, res) => {
    if (req.params.id) {
        let countryCode = req.params.id.toUpperCase();
        const cities = await City.find({country: countryCode});
        if (cities) {
            res.status(200).send(cities);
        } else {
            res.status(404);
            throw new Error('no cities found');
        }; 
    };
};

export default getSelectCities;