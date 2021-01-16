import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5'
})

export const getWeather = async(city: string) => {
    const response = await api.get('/weather', {
        params:{
          q:city,
          appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
          units: 'metric'
        }
      })
      return {
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
}

export default api;