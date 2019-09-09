import React, {Component} from 'react'
import '../App.css'
import axios from 'axios'
import Clear from '../assets/weatherIcons/clear.png'
import Clouds from '../assets/weatherIcons/clouds.png'
import Rain from '../assets/weatherIcons/rain.png'
import Drizzle from '../assets/weatherIcons/drizzle.png'
import Thunderstorm from '../assets/weatherIcons/thunderstorm.png'
import Snow from '../assets/weatherIcons/snow.png'
import Fog from '../assets/weatherIcons/fog.png'
import Unknown from '../assets/weatherIcons/unknown.png'

export default class Weather extends Component {
    constructor() {
        super()

        this.state = {
            weather: [],
            dayOf3: '',
            dayOf4: '',
            dayOf5: '',
            daySplit1: [],
            daySplit2: [],
            daySplit3: [],
            daySplit4: [],
            daySplit5: [],
            day1MaxTemp: null,
            day2MaxTemp: null,
            day3MaxTemp: null,
            day4MaxTemp: null,
            day5MaxTemp: null,
            day1MinTemp: null,
            day2MinTemp: null,
            day3MinTemp: null,
            day4MinTemp: null,
            day5MinTemp: null,
            day1Img: Unknown,
            day2Img: Unknown,
            day3Img: Unknown,
            day4Img: Unknown,
            day5Img: Unknown,
            day1Description: '',
            day2Description: '',
            day3Description: '',
            day4Description: '',
            day5Description: '',
        }
    }

    componentDidMount() {
        axios.get(`/api/weather/?zip=${this.props.zip}`).then(res => {
            this.setState({weather: res.data})
            this.splitDays()
            this.findMaxTemp()
            this.findMinTemp()
            this.findWeatherIcon()
            this.setDescription()

        }).catch(err => {
            console.log('error fetching weather')
        })
        this.getDays()
    }
    getDays() {
        let daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
        let todaysDate = new Date()
        let dayOfWeek = todaysDate.getDay()
        let dayOf3 = dayOfWeek + 2
        let dayOf4 = dayOfWeek + 3
        let dayOf5 = dayOfWeek + 4
        let dayOfWeek3 = daysOfTheWeek[+dayOf3]
        let dayOfWeek4 = daysOfTheWeek[+dayOf4]
        let dayOfWeek5 = daysOfTheWeek[+dayOf5]
        this.setState({dayOf3: dayOfWeek3, dayOf4: dayOfWeek4, dayOf5: dayOfWeek5})
    }
    splitDays() {
        let day1 = this.state.weather.slice(0, 8)
        let day2 = this.state.weather.slice(8, 16)
        let day3 = this.state.weather.slice(16, 24)
        let day4 = this.state.weather.slice(24, 32)
        let day5 = this.state.weather.slice(32)
        this.setState({daySplit1: day1, daySplit2: day2, daySplit3: day3, daySplit4: day4, daySplit5: day5})
    }
    findMaxTemp() {
        let day1MaxTemp = 0
        let day2MaxTemp = 0
        let day3MaxTemp = 0
        let day4MaxTemp = 0
        let day5MaxTemp = 0
        for (let i = 0; i < this.state.daySplit1.length; i++) {     
            if (+this.state.daySplit1[i].main.temp_max > day1MaxTemp) {
                day1MaxTemp = Math.ceil(+this.state.daySplit1[i].main.temp_max)
            }
        }
        for (let i = 0; i < this.state.daySplit2.length; i++) {     
            if (+this.state.daySplit2[i].main.temp_max > day2MaxTemp) {
                day2MaxTemp = Math.ceil(+this.state.daySplit2[i].main.temp_max)
            }
        }
        for (let i = 0; i < this.state.daySplit3.length; i++) {     
            if (+this.state.daySplit3[i].main.temp_max > day3MaxTemp) {
                day3MaxTemp = Math.ceil(+this.state.daySplit3[i].main.temp_max)
            }
        }
        for (let i = 0; i < this.state.daySplit4.length; i++) {     
            if (+this.state.daySplit4[i].main.temp_max > day4MaxTemp) {
                day4MaxTemp = Math.ceil(+this.state.daySplit4[i].main.temp_max)  
            }
        }
        for (let i = 0; i < this.state.daySplit5.length; i++) {     
            if (+this.state.daySplit5[i].main.temp_max > day5MaxTemp) {
                day5MaxTemp = Math.ceil(+this.state.daySplit5[i].main.temp_max)
            }
        }
        this.setState({day1MaxTemp: day1MaxTemp, day2MaxTemp: day2MaxTemp, day3MaxTemp: day3MaxTemp, day4MaxTemp: day4MaxTemp, day5MaxTemp: day5MaxTemp})
    
    }
    findMinTemp() {
        let day1MinTemp = 100
        let day2MinTemp = 100
        let day3MinTemp = 100
        let day4MinTemp = 100
        let day5MinTemp = 100
        for (let i = 0; i < this.state.daySplit1.length; i++) {
            if (+this.state.daySplit1[i].main.temp_min < day1MinTemp) {
                day1MinTemp = Math.floor(+this.state.daySplit1[i].main.temp_min)
            }
        }
        for (let i = 0; i < this.state.daySplit2.length; i++) {
            if (+this.state.daySplit2[i].main.temp_min < day2MinTemp) {
                day2MinTemp = Math.floor(+this.state.daySplit2[i].main.temp_min)
            }
        }
        for (let i = 0; i < this.state.daySplit3.length; i++) {
            if (+this.state.daySplit3[i].main.temp_min < day3MinTemp) {
                day3MinTemp = Math.floor(+this.state.daySplit3[i].main.temp_min)
            }
        }
        for (let i = 0; i < this.state.daySplit4.length; i++) {
            if (+this.state.daySplit4[i].main.temp_min < day4MinTemp) {
                day4MinTemp = Math.floor(+this.state.daySplit4[i].main.temp_min)
            }
        }
        for (let i = 0; i < this.state.daySplit5.length; i++) {
            if (+this.state.daySplit5[i].main.temp_min < day5MinTemp) {
                day5MinTemp = Math.floor(+this.state.daySplit5[i].main.temp_min)
            }
        }
        this.setState({day1MinTemp: day1MinTemp, day2MinTemp: day2MinTemp, day3MinTemp: day3MinTemp, day4MinTemp: day4MinTemp, day5MinTemp: day5MinTemp})
    }

    findWeatherIcon() {
        let day1WeatherIcon 
        switch(this.state.daySplit1[0].weather[0].main) {
            case 'Thunderstorm': 
                day1WeatherIcon = Thunderstorm
                break
            case 'Drizzle':
                day1WeatherIcon = Drizzle
                break
            case 'Rain':
                day1WeatherIcon = Rain
                break
            case 'Snow':
                day1WeatherIcon = Snow
                break
            case 'Mist' || 'Smoke' || 'Haze' || 'Dust' || 'Fog':
                day1WeatherIcon = Fog
                break
            case 'Clear':
                day1WeatherIcon = Clear
                break
            case 'Clouds':
                day1WeatherIcon = Clouds
                break
            default: 
                day1WeatherIcon = Unknown
                break
        }
        let day2WeatherIcon 
        switch(this.state.daySplit2[2].weather[0].main) {
            case 'Thunderstorm': 
                day2WeatherIcon = Thunderstorm
                break
            case 'Drizzle':
                day2WeatherIcon = Drizzle
                break
            case 'Rain':
                day2WeatherIcon = Rain
                break
            case 'Snow':
                day2WeatherIcon = Snow
                break
            case 'Mist' || 'Smoke' || 'Haze' || 'Dust' || 'Fog':
                day2WeatherIcon = Fog
                break
            case 'Clear':
                day2WeatherIcon = Clear
                break
            case 'Clouds':
                day2WeatherIcon = Clouds
                break
            default: 
                day2WeatherIcon = Unknown
                break
        }
        let day3WeatherIcon 
        switch(this.state.daySplit3[2].weather[0].main) {
            case 'Thunderstorm': 
                day3WeatherIcon = Thunderstorm
                break
            case 'Drizzle':
                day3WeatherIcon = Drizzle
                break
            case 'Rain':
                day3WeatherIcon = Rain
                break
            case 'Snow':
                day3WeatherIcon = Snow
                break
            case 'Mist' || 'Smoke' || 'Haze' || 'Dust' || 'Fog':
                day3WeatherIcon = Fog
                break
            case 'Clear':
                day3WeatherIcon = Clear
                break
            case 'Clouds':
                day3WeatherIcon = Clouds
                break
            default: 
                day3WeatherIcon = Unknown
                break
        }
        let day4WeatherIcon 
        switch(this.state.daySplit4[2].weather[0].main) {
            case 'Thunderstorm': 
                day4WeatherIcon = Thunderstorm
                break
            case 'Drizzle':
                day4WeatherIcon = Drizzle
                break
            case 'Rain':
                day4WeatherIcon = Rain
                break
            case 'Snow':
                day4WeatherIcon = Snow
                break
            case 'Mist' || 'Smoke' || 'Haze' || 'Dust' || 'Fog':
                day4WeatherIcon = Fog
                break
            case 'Clear':
                day4WeatherIcon = Clear
                break
            case 'Clouds':
                day4WeatherIcon = Clouds
                break
            default: 
                day4WeatherIcon = Unknown
                break
        }
        let day5WeatherIcon 
        switch(this.state.daySplit5[2].weather[0].main) {
            case 'Thunderstorm': 
                day5WeatherIcon = Thunderstorm
                break
            case 'Drizzle':
                day5WeatherIcon = Drizzle
                break
            case 'Rain':
                day5WeatherIcon = Rain
                break
            case 'Snow':
                day5WeatherIcon = Snow
                break
            case 'Mist' || 'Smoke' || 'Haze' || 'Dust' || 'Fog':
                day5WeatherIcon = Fog
                break
            case 'Clear':
                day5WeatherIcon = Clear
                break
            case 'Clouds':
                day5WeatherIcon = Clouds
                break
            default: 
                day5WeatherIcon = Unknown
                break
        }
        this.setState({day1Img: day1WeatherIcon, day2Img: day2WeatherIcon, day3Img: day3WeatherIcon, day4Img: day4WeatherIcon, day5Img: day5WeatherIcon})
    }

    setDescription() {
        this.setState({
            day1Description: this.state.daySplit1[0].weather[0].description,
            day2Description: this.state.daySplit2[2].weather[0].description,
            day3Description: this.state.daySplit3[2].weather[0].description,
            day4Description: this.state.daySplit4[2].weather[0].description,
            day5Description: this.state.daySplit5[2].weather[0].description,

        })
        
    }

    render() {
        return(
            <div className="weather-holder">
                <div className="weather-day-holder">
                    <h2 className="day">Today</h2>
                    <h3 className="temp">{this.state.day1MaxTemp}°</h3>
                    <div className="icon">
                        <img src={this.state.day1Img} alt="Weather Icon"/>
                    </div>
                    <h3 className="temp">{this.state.day1MinTemp}°</h3>
                    <h2 className="description">{this.state.day1Description}</h2>
                </div>
                <div className="weather-day-holder">
                    <h2 className="day">Tomorrow</h2>
                    <h3 className="temp">{this.state.day2MaxTemp}°</h3>
                    <div className="icon">
                        <img src={this.state.day2Img} alt="Weather Icon"/>
                    </div>
                    <h3 className="temp">{this.state.day2MinTemp}°</h3>
                    <h2 className="description">{this.state.day2Description}</h2>
                </div>
                <div className="weather-day-holder">
                    <h2 className="day">{this.state.dayOf3}</h2>
                    <h3 className="temp">{this.state.day3MaxTemp}°</h3>
                    <div className="icon">
                        <img src={this.state.day3Img} alt="Weather Icon"/> 
                    </div>
                    <h3 className="temp">{this.state.day3MinTemp}°</h3>
                    <h2 className="description">{this.state.day3Description}</h2>
                </div>
                <div className="weather-day-holder">
                    <h2 className="day">{this.state.dayOf4}</h2>
                    <h3 className="temp">{this.state.day4MaxTemp}°</h3>
                    <div className="icon">
                        <img src={this.state.day4Img} alt="Weather Icon"/>
                    </div>
                    <h3 className="temp">{this.state.day4MinTemp}°</h3>
                    <h2 className="description">{this.state.day4Description}</h2>
                </div>
                <div className="weather-day-holder">
                    <h2 className="day">{this.state.dayOf5}</h2>
                    <h3 className="temp">{this.state.day5MaxTemp}°</h3>
                    <div className="icon">
                        <img src={this.state.day5Img} alt="Weather Icon"/>
                    </div>
                    <h3 className="temp">{this.state.day5MinTemp}°</h3>
                    <h2 className="description">{this.state.day5Description}</h2>
                </div>
            </div>
        )
    }
}