import axios from 'axios';


//https://home.openweathermap.org
const WEATHER_API_KEY = '62134bd0ceec0d7317066ede4e82e241';
export const FETCH_WEATHER='FETCH_WEATHER';

//http://api.openweathermap.org/data/2.5/weather?q=Hazelwood,us&appid=62134bd0ceec0d7317066ede4e82e241
//const ROOT_URL=`http://api.openweathermap.org/data/2.5/weather?appid=${WEATHER_API_KEY}`;
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;


// axios.get('/user?ID=12345')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request= axios.get(url);
    
    //console.log ('url='+ url);
    console.log ('Request', request);

    return  {
        type: FETCH_WEATHER,
        payload: request
    };
}