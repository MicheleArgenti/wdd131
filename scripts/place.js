function calculateWindChill(temp, windSpeed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

function displayData() {

    const temperature = 8;
    const windSpeed = 12;


    let windChill = "N/A";
    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + "°C";
    }

    document.getElementById('data').innerHTML = `
    <h2>Data</h2>
    <b>Area: </b><span>301,340 km2</span>
    <b>Population: </b><span>58,947,905</span>
    <b>Capital: </b><span>Venice</span>
    <b>Languages: </b><span>Italian</span>
    <b>Curency: </b><span>Euro</span>
    <b>Time Zone: </b><span>UTC +2</span>
    <b>Calling Code: </b><span>+39</span>
    <b>internet TDL: </b><span>.it</span>
    `;
    document.getElementById('weather').innerHTML = `
    <div class="title">
        <h2>Weather</h2>
        <p>⛅</p>
        <img src="images/sun.svg" alt="Sun">
    </div>
    <b>Temperature: </b><span>${temperature}</span>
    <b>Conditions: </b><span>Sunny</span>
    <b>Wind: </b><span>${windSpeed}</span>
    <b>Wind Chill: </b><span>${windChill}</span>`;
}

displayData();