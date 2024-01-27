
    const apikey = "510928a5a12e3ccbefe242da1b9eaf8b";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector('.weather-icon');
    const errorMessage = document.querySelector('#error-message');
    
    async function checkWeather(city_name){
        
        const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city_name}&appid=${apikey}`;
        
        const response = await fetch(apiurl);
        var data = await response.json();
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity;
        
        // switch to change weatherIcon depending on weather condition
        switch(data.weather[0].main) {
            case 'Clear':
                weatherIcon.src = 'https://res.cloudinary.com/dwcnf01ra/image/upload/v1706344850/clearweather-removebg-preview_z7pfva.png';
                break;
            case 'Rain':
                weatherIcon.src = 'https://res.cloudinary.com/dwcnf01ra/image/upload/v1706345025/rainy2-removebg-preview_bkmbp3.png';
                break;
            case 'Clouds':
                weatherIcon.src = 'https://res.cloudinary.com/dwcnf01ra/image/upload/v1706345271/cloudy2-removebg-preview_bukjjr.png';
                break;
            // add more cases as needed
            default:
                weatherIcon.src = 'https://res.cloudinary.com/dwcnf01ra/image/upload/v1706344850/clearweather-removebg-preview_z7pfva.png'; 
        }
    }
    
    searchBtn.addEventListener("click",()=>{
        checkWeather(searchBox.value);
    });
    
    checkWeather("chittoor");  // Default city name


       
  