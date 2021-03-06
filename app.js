let imgdiv = document.querySelector(`.img_div`);


let myFunction = () => {

    const API_KEY = "cfdfc2c3d1c948f38f9145913220607";

    imgdiv.style.display = "block";

    let city = document.querySelector("#city").value;
    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
        .then(response => response.json())
        .then(data => {

            console.log(data);

            // let icon = data.current.condition.icon;
            // icon.replace("/file// ");
            // document.getElementById("weather_icon").src = icon;
            document.querySelector("#tempC").innerText = data.current.temp_c + "°C";

            document.querySelector("#tempF").innerText = data.current.temp_f + "°F";


            document.querySelector("#city_name").innerText = data.location.name + ", ";
            document.querySelector("#time").innerText = data.location.localtime + ", ";
            document.querySelector("#last_update").innerText = data.current.last_updated + "   Last Update";
            document.querySelector("#weather_condition").innerText = data.current.condition.text;

            document.querySelector("#feels_like_c").innerText = "Feels Like: " + data.current.feelslike_c + "°C";
            document.querySelector("#feels_like_f").innerText = "Feels Like: " + data.current.feelslike_f + "°F";
            document.querySelector("#wind_speed_kph").innerText = "Wind Speed: " + data.current.wind_kph + "KP/H";
            document.querySelector("#wind_speed_mph").innerText = "Wind Speed: " + data.current.wind_mph + "MP/H";
            document.querySelector("#humidity").innerText = "Humidity: " + data.current.humidity + "%";


            document.querySelector("#visibility").innerText = "Visibility : " + data.current.vis_km + "KM";



            // getWeatherData();
            // myFunction ();  

        }
        )



}