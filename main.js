fetch('https://api.openweathermap.org/data/2.5/weather?q=zaporizhzhya&appid=008b2889f1333019e31912feeaad9b87')
 .then(function (resp) {return resp.json()})
 .then(function(data){
     document.querySelector('.location').innerHTML=data.name;
     document.querySelector('.numb').textContent= Math.round( data.main.temp - 273);
     document.querySelector('.weather').textContent=data.weather[0]['description'];
     document.querySelector('.numb-2').textContent=Math.round(data.main.feels_like -273);
     document.querySelector('.humidity-data').textContent=data.main.humidity + "%";    
  })
 fetch('https://api.openweathermap.org/data/2.5/forecast?q=zaporizhzhya,KE,&appid=008b2889f1333019e31912feeaad9b87&units=metric')
 .then(function (resp) {return resp.json()})
 .then(function(data){
     document.querySelector('.temp-hours-1').innerHTML=Math.round(data.list[0].main.temp);
     document.querySelector('.temp-hours-2').innerHTML=Math.round(data.list[1].main.temp);
     document.querySelector('.temp-hours-3').innerHTML=Math.round(data.list[2].main.temp);
     document.querySelector('.temp-hours-4').innerHTML=Math.round(data.list[3].main.temp);
     document.querySelector('.temp-hours-5').innerHTML=Math.round(data.list[4].main.temp);
     document.querySelector('.temp-hours-6').innerHTML=Math.round(data.list[5].main.temp);
     document.querySelector('.temp-hours-7').innerHTML=Math.round(data.list[6].main.temp);
     document.querySelector('.temp-hours-8').innerHTML=Math.round(data.list[7].main.temp);
     document.querySelector('.mon').innerHTML=Math.round(data.list[3].main.temp);
     document.querySelector('.tue').innerHTML=Math.round(data.list[6].main.temp);
     document.querySelector('.wed').innerHTML=Math.round(data.list[10].main.temp);
     document.querySelector('.thu').innerHTML=Math.round(data.list[14].main.temp);
     document.querySelector('.fri').innerHTML=Math.round(data.list[17].main.temp);
     document.querySelector('.sat').innerHTML=Math.round(data.list[25].main.temp);
     document.querySelector('.sun').innerHTML=Math.round(data.list[33].main.temp); 
 })
