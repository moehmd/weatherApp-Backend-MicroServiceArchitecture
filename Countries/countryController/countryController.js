import Country from "../countryModel/Country.js";

const getCountries = async (req, res) => {
    const countries = await Country.find();

    if (countries) {
        res.status(200).send(countries);
    } else {
        res.status(404);
        throw new Error('no countries found');
    };
};

export default getCountries;
