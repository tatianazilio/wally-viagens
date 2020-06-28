var autocompleteDestino = null;
var autocompleteOrigem = null;
const options = { types: ['(cities)'], }
const componentForm = { locality: 'long_name', country: 'long_name' };
const inputDestino = document.getElementById('input-destino');
const inputOrigem = document.getElementById('input-origem');


function initAutocomplete() {
  autocompletarDestino();
  autocompletarOrigem();
}

function autocompletarDestino() {
  var destino = document.getElementById('destino');
  autocompleteDestino = new google.maps.places.Autocomplete(destino, options);
  autocompleteDestino.addListener('place_changed', pegarDestino);
}

function pegarDestino() {
  let place = autocompleteDestino.getPlace();
  console.log(place);

  let pais = place.address_components.find( (pais) => {
    return pais.types[0] == "country";
  }).long_name;

  let cidade = place.address_components.find( (cidade) => {
    return cidade.types[0] == "locality";
  }).long_name;

  inputDestino.innerHTML = `
    <input name="destinoCidade" value="${cidade}" type="hidden"/>
    <input name="destinoPais" value="${pais}" type="hidden">`
}

function autocompletarOrigem() {
  var origem = document.getElementById('origem');
  autocompleteOrigem = new google.maps.places.Autocomplete(origem, options);
  autocompleteOrigem.addListener('place_changed', pegarOrigem);
}

function pegarOrigem() {
  let place = autocompleteOrigem.getPlace();

  let pais = place.address_components.find( (pais) => {
    return pais.types[0] == "country";
  }).long_name;

  let cidade = place.address_components.find( (cidade) => {
    return cidade.types[0] == "locality";
  }).long_name;

  inputOrigem.innerHTML = `
    <input name="origemCidade" value="${cidade}" type="hidden"/>
    <input name="origemPais" value="${pais}" type="hidden">`

}