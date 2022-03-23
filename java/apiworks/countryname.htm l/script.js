function fetchData()
{
    let countryName=cntry_name.value

    fetch(`https://restcountries.com/v2/name/${countryName}?fullText=true`).then(res=>res.json()).then(data=>populateValues(data)).catch(err=>console.log(error))
}
function populateValues(country)
{
    for(data of country)
    {
    let country_name=data.name
    let conuntry_currecy_symbol=data.currencies[0].symbol;
    let conuntry_currecy_name=data.currencies[0].name;
    let flag =data.flag
    let countryPopulatin=data.population
    
    let html_data=`<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${flag }" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">CountryName:${country_name}</h5>
      
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Population:${countryPopulatin}</li>
      <li class="list-group-item">Currency:${conuntry_currecy_name}</li>
     
    </ul>
   
  </div>`
  document.querySelector("#result").innerHTML=html_data

    }


    
}