
const apiURL = "https://api.weatherapi.com/v1/current.json?q=Cancun&key=4e5e576e864142e780a45600252403";
    fetch(apiURL)
        .then(response => {
            if(!response.ok) {
                throw new Error("Network response was not OK");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            // var weatherInfo = data;
            // city.innerHTML = data.location.name;
            temp.innerHTML = data.current.temp_c
            // temp2.innerHTML = data.current.temp_f
            // time.innerHTML = "Local date and time: " + data.location.localtime
            // time.innerHTML = `Local date and time:   ${data.location.localtime}`
            
            condition.src = "https:" + data.current.condition.icon;
        })
        .catch(error => {
            console.error("Error:", error);
        })