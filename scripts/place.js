function populate() {
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
        <img src="images/sun.webp" alt="Sun">
    </div>
    <b>Temperature: </b><span>30° C</span>
    <b>Conditions: </b><span>Sunny</span>
    <b>Wind: </b><span>2km/h</span>
    <b>Wind Chill: </b><span>5.7° C</span>`;
}

populate();