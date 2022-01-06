var database=[
    {district:"palakkad",temparature:30},
    {district:"tvm",temparature:31},
    {district:"palakkad",temparature:31},
    {district:"tvm",temparature:29},
    {district:"erk",temparature:28},
    {district:"erk",temparature:31}
]

var weatherData={}

for(let data of database){
    let distName=data.district
    let currentTemp=data.temparature
    if(distName in weatherData)
    {
        let old_temp=weatherData[distName]
        if(currentTemp>old_temp)
        {
            weatherData[distName]=currentTemp;
        }
       
    }
    else{
        weatherData[distName]=currentTemp
    }
}
console.log(weatherData);
