document.addEventListener("DOMContentLoaded", () => {
    const country = document.getElementById('country');
    const endpoint = "http://ip-api.com/json/";

    fetch(endpoint)
    .then(data => data.json())
    .then(data => {country.innerHTML = (data['country'])})

});