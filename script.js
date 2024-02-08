                                                       //clock section
function updateDateTime() {
    var currentDate = new Date();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month = months[currentDate.getMonth()];
    var day = currentDate.getDate();
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hours is 0, set it to 12

    // Add leading zero to minutes and seconds if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var formattedDate = month + ' ' + (day < 10 ? '0' + day : day) + ', ' + year;
    var formattedTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    
    document.getElementById('date').textContent = formattedDate;
    document.getElementById('time').textContent = formattedTime;
  }

  // Update the date and time every second
  setInterval(updateDateTime, 1000);

  // Initial call to set the initial date and time
  updateDateTime();


                                                            // Weather section




  const apiKey = '2714be624ff79dd202bd38364cf5452c';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=indore&appid=${apiKey}&units=metric`;

    
    function updateWeather() {
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const temperatureCelsius = Math.round(data.main.temp);
          const temperatureFahrenheit = Math.round((temperatureCelsius * 9/5) + 32);

          // Display the temperature in Celsius and Fahrenheit
          const temperatureElement = document.getElementById('temperature');
          temperatureElement.innerHTML = `${temperatureCelsius}°C / ${temperatureFahrenheit}°F`;

          // Update the sun icon based on the temperature
          const sunIcon = document.getElementById('sun-icon');
          if (temperatureCelsius > 25) {
            sunIcon.src = 'hot-sun.png';  // Replace 'hot-sun.png' with the path to your hot sun image
          } else {
            sunIcon.src = 'cool-sun.png';  // Replace 'cool-sun.png' with the path to your cool sun image
          }
        })
        .catch(error => console.error('Error fetching weather data:', error));
    }

    // Update the weather every 5 seconds (for demonstration purposes)
    setInterval(updateWeather, 5000);

    // Initial call to set the initial weather
    updateWeather();


