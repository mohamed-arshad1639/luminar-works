function fetchWheather()
{
    var city_Name=cityname.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_Name}&appid=d1e7dad6c97e73024cad9b49bfd9f573`).
    then(res=>
        {
            if(res.ok)
            {
              return res.json()
            }
            else{
                throw new Error("failed to fetch data from resourses")
            }
        })
        .then(data=>disoplayValues(data)).catch(error=>console.log(error.message))

}

function disoplayValues(data)
{
    let html_data=``

    let temp=data.main.temp;
    let location_name=data.name;
    let min_Temp=data.main.Temp_min;
    let max_temp=data.main.temp_max;
    let type_weather=data.weather[0].main;
    let win_speed=data.wind.speed;
    console.log(temp,location_name,min_Temp ,max_temp,type_weather,win_speed);


    html_data=`
    <h3>cityName :${location_name}</h3><br>
    <h4>temperature :${temp} </h4><br>
    <h4>Max_temperature :${max_temp} </h4><br>
    <h4>Min-temperature :${min_Temp} </h4><br>
    <h4>Weathertype:${type_weather} </h4><br>
    <h4>wintSpeed:${win_speed} </h4><br>
     `
     document.querySelector("#result").innerHTML=html_data
}
