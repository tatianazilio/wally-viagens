console.log("foi!");

var autocomplete = null;
var options = { types: ['(cities)'], }
var componentForm = {
    locality: 'long_name',
    country: 'long_name',
}

function initAutocomplete() {
    var destino = document.getElementById('destino');
    autocomplete = new google.maps.places.Autocomplete(destino, options);
    autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
    let place = autocomplete.getPlace();
    console.log(place);
    for (let component in componentForm) {
      document.getElementById(component).value = '';
      document.getElementById(component).disabled = false;
    }

    for (let i = 0; i < place.address_components.length; i++) {
        let addressType = place.address_components[i].types[0];
        if (componentForm[addressType]) {
          let val = place.address_components[i][componentForm[addressType]];
          document.getElementById(addressType).value = val;
        }
      }
    }