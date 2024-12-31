
async function fetchData() {
	const city =  search.value;
const apiKey = 'b95c22b077e9134519a3587cae4ef581';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


try {
	const response = await fetch(url);
	const result = await response.json();
	console.log(result);
    temp.innerHTML = result.main.temp;
    ws.innerHTML = result.wind.speed;
    hmdty.innerHTML = result.main.humidity

} catch (error) {
	console.error(error);

}

} 


