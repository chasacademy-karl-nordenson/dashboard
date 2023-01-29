import axios from "axios"

// Funktion för att hitta och visa väder

async function getWeather () {

let url = "http://api.openweathermap.org/data/2.5/forecast?&units=metric";
let key = "&appid=571bc70d0d4d9f0efbaa771cf2f223a1";

navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;

  axios.get(`${url}&lat=${latitude}&lon=${longitude}${key}`)
  .then(function (response) {

    document.getElementById("city").innerText = response.data.city.name;
    document.getElementById("temp").innerText = `${response.data.list[0].main.temp} ºC`
    document.getElementById("desc").innerText = response.data.list[0].weather[0].description
    console.log(response)
    console.log(response.data.city.name);
    console.log(response.data.list[0].main.temp);
    console.log(response.data.list[0].weather[0].description);

  })
  .catch(function (error) {

    console.log(error);
    document.getElementById("city").innerText = "Unable to retrieve your location";
  })
  .then(function () {

  });
}
function error() {
  
  }

}

getWeather();



// Funktion för att hitta bakgrundsbilder och upphovsperson

async function getBackground () {

let key = "RKbuQxRHPViMI5xA6quv1Ogz4WecAYZ-ztZBICd3c_A"


    axios.get(`https://api.unsplash.com/photos/random/?client_id=${key}`)
  .then(function (response) {

    /* document.getElementById=("image").src = `"${response.data.urls.regular}"` */
    document.body.style.backgroundImage = `url(${response.data.urls.regular}&w=1500&dpr=1&auto=format&q=65)`;
    document.getElementById("creator").innerText = `image by: (${response.data.user.name})`;
    console.log(response.data.urls.regular)

    console.log(response);
  })
  .catch(function (error) {
    document.body.style.backgroundImage = 'url("https://static.vecteezy.com/system/resources/previews/002/099/717/original/mountain-beautiful-landscape-background-design-illustration-free-vector.jpg")';
    document.getElementById("creator").innerText = "Mountain Background Vectors by Vecteezy"
    document.getElementById("image-link").href = "https://www.vecteezy.com/free-vector/mountain-background";
    console.log(error);
  })
  .then(function () {

  });

}

getBackground();

// Funktion för att hitta och visa aktuell tid och datum

async function getTime () {

  let url = "https://www.timeapi.io/api/Time/current/coordinate?";
  
  navigator.geolocation.getCurrentPosition(success, error);
  
  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  
    axios.get(`${url}&latitude=${latitude}&longitude=${longitude}`)
    .then(function (response) {
      document.getElementById("time").innerText = `${response.data.time}:${response.data.seconds}`
      
      document.getElementById("date").innerText = response.data.date;
      console.log(response);



  
    })
    .catch(function (error) {
      console.log(error);
      document.getElementById("time").innerText = "Unable to retrieve your current time";
    })
    .then(function () {

    });
  }
  function error() {
    
    }
  
  }

  getTime();
  setInterval(getTime, 1000);


/*   function setImage () {

  }

  setImage(); */
/*   let defBackground = document.querySelector("#main"); 
  defBackground = document.body.style.backgroundImage = "url('images/mountains.jpg')"; */

  async function numbers () {

    axios.get("http://numbersapi.com/random/trivia")
  .then(function (response) {
    document.getElementById("trivia").innerText = `Random number fact: ${response.data}`;
    console.log(response)


  })
  .catch(function (error) {
    document.getElementById("trivia").innerText = "Couldn't connect to the fun facts :("

    console.log(error);
  })
  .then(function () {

  });

  }

  numbers();

  async function news () {

    axios.get("https://newsapi.org/v2/top-headlines?country=se&apiKey=e7d4283ff9dc467c9fd9a926d9da72ce")
  .then(function (response) {
    document.getElementById("news").innerText = ` ${response.data.articles[0].title}`;
    document.getElementById("link").href = ` ${response.data.articles[0].url}`;
   console.log(response)
/*    console.log(response.data.articles[0].url); */


  })
  .catch(function (error) {
    document.getElementById("news").innerText = "Couldn't connect to the newsplace"

    console.log(error);
  })
  .then(function () {

  });

  }

  news();
