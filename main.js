
const apiKey = "51fe8f41a855daa11645cd286d8d74b4"

async function getData(){
    let city = document.querySelector("#city").value

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    // console.log(url)
    
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)
    append(data)
    // myFun()
}

function append(data){
    document.querySelector("#container").innerHTML = null
    console.log(data)

    var box = document.createElement("div")

    var city = document.createElement("h3")
    city.setAttribute("id", "city")
    city.innerText = data.name

    var temp = document.createElement("h3")
    temp.setAttribute("id", "temp")
    temp.innerText = `Current Temperature: ${data.main.temp}`

    var maxTemp = document.createElement("h3")
    maxTemp.setAttribute("id", "maxTemp")
    maxTemp.innerText = `Maximum Temperature: ${data.main.temp_max}`

    var lowTemp = document.createElement("h3")
    lowTemp.setAttribute("id", "lowTemp")
    lowTemp.innerText = `Lowest Temperature: ${data.main.temp_min}`

    var wind = document.createElement("h3")
    wind.setAttribute("id", 'wind')
    wind.innerText = `Wind: ${data.wind.speed}`

    var clouds = document.createElement("h3")
    clouds.setAttribute("id", 'clouds')
    clouds.innerText = `Clouds: ${data.clouds.all}`

    var sunrise = document.createElement("h3")
    sunrise.setAttribute("id", 'sunrise')
    sunrise.innerText = `Sunrise: ${data.sys.sunrise}`

    var sunset = document.createElement("h3")
    sunset.setAttribute("id", 'sunset')
    sunset.innerText = `Sunset: ${data.sys.sunset}`

    box.append(city, temp, maxTemp, lowTemp, wind , clouds, sunrise, sunset)

    document.querySelector("#container").append(box)

    var iframe = document.querySelector("#gmap_canvas")
    iframe.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}

function getLocationWeather() {
    navigator.geolocation.getCurrentPosition(success);
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude);
      console.log(longitude);
    }
  }

  getLocationWeather()