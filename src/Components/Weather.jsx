import React, {Component} from 'react'
import '../App.css'
import axios from 'axios'
import clearSkyDay from '../assets/weatherIcons/clearSkyDay.png'

export default class Weather extends Component {
    constructor() {
        super()

        this.state = {
            weather: [],
            day3: '',
            day4: '',
            day5: ''
        }
    }

    componentDidMount() {
        console.log(this.props.zip)
        axios.get(`/api/weather/?zip=${this.props.zip}`).then(result => {
            this.setState({weather: result.data})
            console.log(this.state.weather)
        }).catch(err => {
            console.log('error fetching weather')
        })
        console.log(this.state.weather)
        // this.setState({day1: this.state.weather[0]})
        // console.log(this.state.day1)
        this.getDays()
    }
    getDays() {
        let daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
        let todaysDate = new Date()
        let dayOfWeek = todaysDate.getDay()
        let day3 = dayOfWeek + 2
        let day4 = dayOfWeek + 3
        let day5 = dayOfWeek + 4
        let dayOfWeek3 = daysOfTheWeek[+day3]
        let dayOfWeek4 = daysOfTheWeek[+day4]
        let dayOfWeek5 = daysOfTheWeek[+day5]
        this.setState({day3: dayOfWeek3, day4: dayOfWeek4, day5: dayOfWeek5})
    }

    render() {
        return(
            <div className="weather-holder">
                <div className="weather-day-holder">
                    <h2 className="day">Today</h2>
                    <h3 className="temp">100°</h3>
                    <div className="icon">
                        <img src={clearSkyDay} alt="Weather Icon"/>
                    </div>
                    <h3 className="temp">75°</h3>
                </div>
                <div className="weather-day-holder">
                    <h2 className="day">Tomorrow</h2>
                    <h3 className="temp">100°</h3>
                    <div className="icon">
                        <img src={clearSkyDay} alt="Weather Icon"/>
                    </div>
                    <h3 className="temp">75°</h3>
                </div>
                <div className="weather-day-holder">
                    <h2 className="day">{this.state.day3}</h2>
                    <h3 className="temp">100°</h3>
                    <div className="icon">
                        <img src={clearSkyDay} alt="Weather Icon"/> 
                    </div>
                    <h3 className="temp">75°</h3>
                </div>
                <div className="weather-day-holder">
                    <h2 className="day">{this.state.day4}</h2>
                    <h3 className="temp">100°</h3>
                    <div className="icon">
                        <img src={clearSkyDay} alt="Weather Icon"/>
                    </div>
                    <h3 className="temp">75°</h3>
                </div>
                <div className="weather-day-holder">
                    <h2 className="day">{this.state.day5}</h2>
                    <h3 className="temp">100°</h3>
                    <div className="icon">
                        <img src={clearSkyDay} alt="Weather Icon"/>
                    </div>
                    <h3 className="temp">75°</h3>
                </div>
            </div>
        )
    }
}