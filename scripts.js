



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




        document.addEventListener("DOMContentLoaded", function () {
            const searchInput = document.getElementById("search");
            const suggestions = document.getElementById("suggestions");
        
            const pages = [
              { name: "Suites", url: "suites.html" },
              { name: "Spa", url: "spa.html" },
              { name: "Dining", url: "dining.html" },
              { name: "Accommodations", url: "accomodations.html" },
              { name: "Amenities", url: "amenities.html" },
              { name: "Activities", url: "activities.html" },
              { name: "Contact", url: "contact.html" }
            ];
        
            searchInput.addEventListener("input", function () {
              const query = this.value.toLowerCase();
              suggestions.innerHTML = "";
        
              if (query === "") {
                suggestions.style.display = "none";
                return;
              }
        
              const filtered = pages.filter(page =>
                page.name.toLowerCase().includes(query)
              );
        
              if (filtered.length > 0) {
                filtered.forEach(page => {
                  const li = document.createElement("li");
                  li.textContent = page.name;
                  li.addEventListener("click", () => {
                    window.location.href = page.url;
                  });
                  suggestions.appendChild(li);
                });
                suggestions.style.display = "block";
              } else {
                suggestions.style.display = "none";
              }
            });
        
            document.addEventListener("click", function (e) {
              if (!e.target.closest(".search-wrapper")) {
                suggestions.style.display = "none";
              }
            });
          });