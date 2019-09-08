import React, {Component} from 'react'
import '../App.css'
import axios from 'axios'
import clearSky from '../assets/weatherIcons/clearSky.png'
import fewClouds from '../assets/weatherIcons/fewClouds.png'
import scatteredClouds from '../assets/weatherIcons/scatteredClouds.png'
import brokenClouds from '../assets/weatherIcons/brokenClouds.png'
import showerRain from '../assets/weatherIcons/showerRain.png'
import rain from '../assets/weatherIcons/rain.png'
import thunderStorm from '../assets/weatherIcons/thunderStorm.png'
import snow from '../assets/weatherIcons/snow.png'
import mist from '../assets/weatherIcons/mist.png'
import unknown from '../assets/weatherIcons/unknown.png'

export default class Weather extends Component {
    constructor() {
        super()

        this.state = {
            weather: [],
            dayOf3: '',
            dayOf4: '',
            dayOf5: ''
        }
    }

    componentDidMount() {
        console.log(this.props.zip)
        axios.get(`/api/weather/?zip=${this.props.zip}`).then(res => {
            this.setState({weather: res.data})
            console.log(this.state.weather)
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

    render() {
        return(
            <div className="weather-holder">
                <div className="weather-day-holder">
                    <h2 className="day">Today</h2>
                    <h3 className="temp">100°</h3>
                    <div className="icon">
                        <img src={clearSky} alt="Weather Icon"/>
                    </div>
                    <h3 className="temp">75°</h3>
                </div>
                <div className="weather-day-holder">
                    <h2 className="day">Tomorrow</h2>
                    <h3 className="temp">100°</h3>
                    <div className="icon">
                        <img src={rain} alt="Weather Icon"/>
                    </div>
                    <h3 className="temp">75°</h3>
                </div>
                <div className="weather-day-holder">
                    <h2 className="day">{this.state.dayOf3}</h2>
                    <h3 className="temp">100°</h3>
                    <div className="icon">
                        <img src={snow} alt="Weather Icon"/> 
                    </div>
                    <h3 className="temp">75°</h3>
                </div>
                <div className="weather-day-holder">
                    <h2 className="day">{this.state.dayOf4}</h2>
                    <h3 className="temp">100°</h3>
                    <div className="icon">
                        <img src={thunderStorm} alt="Weather Icon"/>
                    </div>
                    <h3 className="temp">75°</h3>
                </div>
                <div className="weather-day-holder">
                    <h2 className="day">{this.state.dayOf5}</h2>
                    <h3 className="temp">100°</h3>
                    <div className="icon">
                        <img src={brokenClouds} alt="Weather Icon"/>
                    </div>
                    <h3 className="temp">75°</h3>
                </div>
            </div>
        )
    }
}