function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation);
    } 
    else 
    {
        geoButton.remove();
    }
}

function showLocation(data) {
    console.log(data)
}

document.addEventListener("DOMContentLoaded", () => {
    const geoButton = document.getElementById('geoButton');
    geoButton.addEventListener('click', getLocation);
});