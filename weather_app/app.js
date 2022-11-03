const API_KEY = `273367094893dc11eba480e481548725`;
const searchTemp = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displaytemp(data));
}

const setValue = (id,text) => {
       document.getElementById(id).innerText = text; 
}

const displaytemp = (temparature) => {
    setValue("city" , temparature.name);
    setValue("temperature" , temparature.main.temp);
    setValue("condition" , temparature.weather[0].main)

    // add icon
    const url = ` http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`

    const icon = document.getElementById("icon").setAttribute("src", url)
}




