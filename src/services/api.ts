import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5'
})

export const createNewWeatherData = (response: any) => {
    let newData = {
        city: response.data.name,
        country: response.data.sys.country,
        temp: response.data.main.temp,
        maxTemp: response.data.main.temp_max,
        minTemp: response.data.main.temp_min,
        wind: response.data.wind.speed,
        clouds: response.data.clouds.all,
        humidity: response.data.main.humidity,
        rain: response.data.main.pressure,
        sensation: response.data.main.feels_like,
      }
    return newData;
}

export default api;