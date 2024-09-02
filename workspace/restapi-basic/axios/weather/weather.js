import axios from 'https://cdn.skypack.dev/axios';
const locationAlert = document.querySelector('#location');
const weatherAlert = document.querySelector('#weather');
const errorAlert = document.querySelector('#error');

const showError = (message) => {
    errorAlert.textContent = `error:${message}`;
    errorAlert.style.display = 'block';
}

const showLocation = (latitude, longitude, address) => {
    locationAlert.innerHTML = `
    <h4>latitude:${latitude}, longtitude:${longitude}</h4>
    <h4>address:${address}</h4>
    `;
    locationAlert.style.display = 'block';
}

// 사용자의 현재 위치정보
const getCurrentLocation = () => {
    if (navigator.geolocation) { //옛날 브라우저는 지원이 안될수 있음
        //콜백 두개 처리함
        navigator.geolocation.getCurrentPosition(async (position) => {
            const latitude = position.coords.latitude;
            const longtitude = position.coords.longitude;


            if (latitude && longtitude) {

                const address = await fetchAddress(latitude, longtitude); //좌표값으로 위치가져오는 함수
                showLocation(latitude, longtitude, address); //현재 위치 정보 출력하는 함수
                fetchweather(latitude, longtitude); //axios이용해서 날씨정보 받아오는 함수
            } else {
                showError("위치 자료값이 이상함");
            }
        },

            (error) => {
                showError("위치 자료값을 불러올수 없음");
            }

        );
    } else {
        showError("브라우저에서 지원하지 않음");
    }
};

const fetchweather = async (latitude, longtitude) => {
    console.log(latitude, longtitude);
    const url = `https://api.openweathermap.org/data/2.8/onecall?lat=${latitude}&lon=${longtitude}&exclude=hourly,daily,minutely&appid=4f27c3ad8f338d36bca0249b0c855f64`;
    const response = await axios.get(url);
    console.log(response.data);

    let weatherData = response.data;
    let timezone = weatherData.timezone;
    let temp = weatherData.current.temp;
    let main = weatherData.current.weather[0].main;
    let icon = weatherData.current.weather[0].icon;

    // let datas = ``;
    // datas += `${timezone}`;
    // datas += `${temp}`;
    // datas += `${main}`;
    // datas += `${icon}`;

    // weatherAlert.innerHTML = datas;

    // weatherAlert.style.display = 'block'

    showWeather(timezone, temp, main, icon);
    fetchAddress(latitude, longtitude);
}

const showWeather = (timezone, temp, main, icon) => {
    weatherAlert.style.display = 'block';
    const cw = temp - 273.15;//섭시로 변환
    weatherAlert.innerHTML = `
    <h4>timezone:${timezone}</h4>
    <h4>temp:${cw.toFixed(2)}도(섭씨)</h4>
    <h4>main:${main}</h4>
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt=${main}">
    `
}
const fetchAddress = async (latitude, longtitude) => {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longtitude}&format=json`;
    console.log(url);

    try {
        const response = await axios.get(url);
        // const { display_name } = response.data;
        // return display_name;
        const { country, city, borough } = response.data.address;
        const addr = `${country} ${city} ${borough}`;
        return addr;
    } catch (error) {
        showError('주소가져오기 실패:' + error.message);
        return "unknown location";
    }
}



//dom이 로드되면 getCurrentLocation()함수를 호출한다.
document.addEventListener('DOMContentLoaded', getCurrentLocation());