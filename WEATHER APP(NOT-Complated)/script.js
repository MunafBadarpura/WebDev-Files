const options = {

  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '59e10eaefcmsh65c1c31558b5e74p164283jsn73da58fcab9c',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }

};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
    .then(response => response.json())
    .then((response) => {
        
        console.log(response)

                cloud_pct = response.cloud_pct
                temp = response.temp
                feels_like = response.feels_like
                humidity = response.humidity
                min_temp = response.min_temp
                max_temp = response.max_temp
                wind_speed = response.wind_speed
                wind_degrees = response.wind_degrees
                sunrise = response.sunrise
                sunset  = response.sunset
    
    })
    .catch(err => console.log(err) )



// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '59e10eaefcmsh65c1c31558b5e74p164283jsn73da58fcab9c',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


  
