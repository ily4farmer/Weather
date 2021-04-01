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
    sunset: undefined
  }

  gettingWeather =  async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    
    if (city) {
      const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      let date = new Date();
      date.setTime(data.sys.sunrise)
      const sunrise_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        name: data.name, 
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        feedsLike: data.main.feels_like,
        country: data.sys.country,
        sunrise: sunrise_date,
        sunset: data.sys.sunset,
        loading: true
      })
      console.log(data);
    }
  }

  render() {
    const {name, country, temp, tempMax, tempMin, feedsLike, sunrise, loading} = this.state;
    return (
      <div className="weather">
        <Form weather={this.gettingWeather} />
        {loading ?  
        <City 
        name={name} 
        country={country} 
        temp={temp}
        feedsLike={feedsLike}
        tempMax={tempMax}
        tempMin={tempMin}
        sunrise={sunrise}/>
        :
        <div className="loader">
            <div className="container">
              <span>Загрузка...</span>
            </div>
        </div>
        }
      </div>
    );
  }
}
