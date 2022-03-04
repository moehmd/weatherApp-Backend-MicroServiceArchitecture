import axios from "axios";

const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
const unit = "metric";

const getWeather = async (req, res) => {
    let cityId = req.params.id;
    let apiurl = `${weatherUrl}?id=${cityId}&appid=${process.env.APIKEY}&units=${unit}`;
    if (cityId) {
        try {
            axios(apiurl)
            .then(response => {
                if (response.data) {
                    res.status(200).send(response.data);
                } else {
                    res.send("error");
                };
            });
        } catch (error) {
            console.error(error);
            res.send('city not found');
        };
    } else {
        res.status(404).send('city not found');
    }; 
};

export default getWeather;
