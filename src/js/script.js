var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map)

const form = document.querySelector('form')
const input = document.querySelector('#ip')
const data_ip = document.querySelector('[data-ip]')
const data_location = document.querySelector('[data-location]')
const data_timezone = document.querySelector('[data-timezone]')
const data_isp = document.querySelector('[data-isp]')

const fetch_pop = async () => {

    const custom_ip = input.value

    const fetch_request = new Request(`https://geo.ipify.org/api/v2/country,city?apiKey=at_rG0gK0u87czPrRELiqEEhcnyf8z05&ipAddress=${custom_ip}`)

    const fetch_response = await fetch(fetch_request)

    const data = await fetch_response.json()

    map_panning(data)
    populate_fields(data)
}

form.addEventListener('submit' , e => {
    e.preventDefault()
    fetch_pop()
})

function map_panning(obj){
    var latlng = L.latLng(obj.location.lat, obj.location.lng)
    map.panTo(latlng)

    var marker = L.marker([obj.location.lat, obj.location.lng]).addTo(map)
}

function populate_fields(obj){
    data_ip.textContent = obj.ip;
    data_location.textContent = `${obj.location.city}, ${obj.location.geonameId}`
    data_timezone.textContent = `${obj.location.timezone}`
    data_isp.textContent = `${obj.isp}`
}