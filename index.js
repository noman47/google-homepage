document.addEventListener("DOMContentLoaded", () => {
    const country = document.getElementById('country');
    const endpoint = "http://ip-api.com/json/";

    fetch(endpoint)
        .then(data => data.json())
        .then(data => { country.innerHTML = (data['country']) })

    const button = document.getElementById('togButton');
    const list = document.getElementById('list');
    let togTrack = false;
    button.addEventListener('click', () => {
        if (!togTrack) {
            console.log(list)
            list.style.display = 'block';
            togTrack = true;
        }
        else if (togTrack) {
            console.log(list)
            list.style.display = 'none';
            togTrack = false;
        }
    });

});