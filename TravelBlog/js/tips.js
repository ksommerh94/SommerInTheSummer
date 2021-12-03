var countries = {"country": ["Colombia", "Mexico", "Ecuador", "Costa Rica", "Japan", "Panama", "China", "Hong Kong","United States"]}
var selectList = document.getElementById("mySelect")

// When the dom is loaded do EVERYTHING
window.addEventListener("DOMContentLoaded", event => {

    FillDropdown()
    //when selected the option sent value to API
    selectList.addEventListener('change', (e) => {
      //get text from dropdown
      let text = selectList.value;
      //convert it for url
      let country_lower = encodeURIComponent(text.trim())
      //create the final url
      var completeAPI = "https://restcountries.com/v3.1/name/".concat(country_lower,"?fullText=true")
      LoadJson(completeAPI);

    })


})



//filling the dropdown with the first choice and the colors of the json array
function FillDropdown(){
  //include first option
  var opt = document.createElement('option');
  opt.value = "Select an option";
  opt.text = "Seleccione una opción";
  selectList.appendChild(opt);
  //filling with json
  for(var i = 0; i < countries.country.length; i++) {
    //console.log(colors.color[i])
    var opt_2 = document.createElement("option");
    opt_2.value = countries.country[i];
    opt_2.text = countries.country[i];
    selectList.appendChild(opt_2);
  }

}

//making the call to API
function LoadJson(url){
  const config = {
    method: "get",
    mode: "cors",
    cache: "no-cache"
  };

  fetch(url, config)
      .then(response => {
        return response.json();
    })
      .then(json => {

        document.getElementById("nom_comun").textContent = (json[0].name.common);
        document.getElementById("nom_oficial").textContent = (json[0].translations.spa.official);
        document.getElementById("c_capital").textContent =(json[0].capital[0]);
        document.getElementById("continente").textContent = (json[0].region)
        document.getElementById("region").textContent = (json[0].subregion)


        let currency;
        Object.keys(json[0].currencies).forEach(function(key){
            var value = json[0].currencies[key];
            currency = (key + ' : ' + value.name);
        });
        document.getElementById("moneda").textContent = currency
    })
      .catch(err => {
        console.log(`There was an error: ${err}`);
    });
  }
