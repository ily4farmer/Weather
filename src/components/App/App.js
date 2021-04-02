import { Component } from 'react';
import './App.sass';
import City from '../City/City';
import Form from "../form/Form";


const API_KEY = '95b266d6b866574c26a3de9e0d1a1c01';

export default class App extends Component {

  state = {
    loading: false,
    name: undefined, 
    temp: undefined,
    tempMin: undefined,
    tempMax: undefined,
    feedsLike: undefined,
    country: "",
    sunrise: undefined,
    sunset: undefined,
    wind: undefined,
    hum: undefined
  }

  time = (ms) =>{
    var date = new Date(ms*1000);
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();
    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}


  gettingWeather =  async(e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    
    if (city) {
      const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      let date = new Date();
      date.setTime(data.sys.sunrise)
      const sunrise_date = this.time(data.sys.sunrise)
      // date.setTime(data.sys.sunset)
      const sunset = this.time(data.sys.sunset)
      const temp = Math.round(data.main.temp),
            temp_max  = Math.round(data.main.temp_max),
            tempMin = Math.round(data.main.temp_min),
            felt = Math.round(data.main.feels_like);


      this.setState({
        name: data.name, 
        temp: temp,
        tempMin: tempMin,
        tempMax: temp_max,
        feedsLike: felt,
        country: data.sys.country,
        sunrise: sunrise_date,
        sunset: sunset,
        loading: true,
        wind: data.wind.speed,
        hum: data.main.humidity
      })
      console.log(data);
    }
  }

  render() {
    const {name, country, temp, tempMax, tempMin, feedsLike, sunrise, sunset,loading,wind, hum} = this.state;
    return (
      <div className="weather">
        <div className="container">
          <div className="weather-block">
            <h1 className="weather__title">Check the weather in your city</h1>
            <Form weather={this.gettingWeather} />
            {loading ?  
            <City 
            name={name} 
            country={country} 
            temp={temp}
            feedsLike={feedsLike}
            tempMax={tempMax}
            tempMin={tempMin}
            sunrise={sunrise}
            sunset={sunset}
            wind={wind}
            hum={hum}/>
            :
            <div className="loader">
                <div className="container">
                  <div className="loader-block">
                    <span>Загрузка...</span>
                  </div>
                </div>
            </div>
            }
          </div>
        </div>
      </div>
    );
  }
}
