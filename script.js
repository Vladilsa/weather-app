const wrapper = document.querySelector(".wrapper");
 arrowBack = wrapper.querySelector("header i");
 inputPart = document.querySelector(".input-part"),
 infoTxt = inputPart.querySelector(".info-txt"),
 inputField = inputPart.querySelector("input");
 arrowBack.addEventListener("click", ()=>{
    wrapper.classList.remove("active");
});
 class currentWe{
    constructor(city){
    this.city = city
    this.currentWeather = {};
    this.weeklyWeather = {};   
}
setCurrentWeather(weather) {
    this.currentWeather = {
        feelsLike: weather[0].main.feels_like, 
        humidity: weather[0].main.humidity, 
        temp: weather[0].main.temp, 
        desc: weather[0].weather[0].description,
    }
}
setDayliWeather(weather){
    this.dayliWeather = weather[1].list.map(({main}) => main.temp).slice(0, 9)  
}    
setWeeklyWeather(weather) {
    this.weeklyWeather = {
        mon: weather[1].list[3].main.temp,
        tue: weather[1].list[6].main.temp,
        wed: weather[1].list[10].main.temp,
        thu: weather[1].list[14].main.temp,
        fri: weather[1].list[17].main.temp,
        sat: weather[1].list[25].main.temp,
        sun: weather[1].list[33].main.temp
    }
}
 }
let current;
let hourly;
inputField.addEventListener("keyup", e =>{
    if(e.key == "Enter" && inputField.value != ""){
        document.weather = new currentWe(inputField.value)
        requestApi(inputField.value);
    }
})
function requestApi(city){
    api = fetch;
    async function fetchCurrentandHourly() {
        const [currentResponse,hourlyResponse] = await Promise.all([
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2da5d3d26c7ea051052d004053ef9138`),
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=2da5d3d26c7ea051052d004053ef9138&units=metric`)
        ]);
        current = await currentResponse.json();
        const hourly = await hourlyResponse.json();
        return [current, hourly];   
    }
    fetchCurrentandHourly().then((weather) => {
    document.weather.setCurrentWeather(weather)
    document.weather.setDayliWeather(weather)
    document.querySelector('.location').innerHTML = weather[0].name;
    document.querySelector('.numb').innerHTML=Math.round(document.weather.currentWeather.temp-273);
    document.querySelector('.weather').innerHTML = document.weather.currentWeather.desc;
    document.querySelector('.numb2').innerHTML =Math.round(document.weather.currentWeather.feelsLike -273);
    document.querySelector('.humidity span').innerHTML = document.weather.currentWeather.humidity +"%";
    document.weather.setWeeklyWeather(weather)
    document.querySelector('.t00').innerHTML=Math.round(document.weather.dayliWeather[0]);
    document.querySelector('.t03').innerHTML=Math.round(document.weather.dayliWeather[1]);
    document.querySelector('.t06').innerHTML=Math.round(document.weather.dayliWeather[2]);
    document.querySelector('.t09').innerHTML=Math.round(document.weather.dayliWeather[3]);
    document.querySelector('.t12').innerHTML=Math.round(document.weather.dayliWeather[4]);
    document.querySelector('.t15').innerHTML=Math.round(document.weather.dayliWeather[5]);
    document.querySelector('.t18').innerHTML=Math.round(document.weather.dayliWeather[6]);
    document.querySelector('.t21').innerHTML=Math.round(document.weather.dayliWeather[7]);
    document.querySelector('.mon').innerHTML=Math.round(document.weather.weeklyWeather.mon);
    document.querySelector('.tue').innerHTML=Math.round(document.weather.weeklyWeather.tue);
    document.querySelector('.wed').innerHTML=Math.round(document.weather.weeklyWeather.wed);
    document.querySelector('.thu').innerHTML=Math.round(document.weather.weeklyWeather.thu);
    document.querySelector('.fri').innerHTML=Math.round(document.weather.weeklyWeather.fri);
    document.querySelector('.sat').innerHTML=Math.round(document.weather.weeklyWeather.sat);
    document.querySelector('.sun').innerHTML=Math.round(document.weather.weeklyWeather.sun);
    wrapper.classList.add("active");
  })}