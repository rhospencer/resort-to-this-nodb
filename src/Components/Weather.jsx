import React, {Component} from 'react'
import '../App.css'
import axios from 'axios'
import clearSkyDay from '../assets/weatherIcons/clearSkyDay.png'

export default class Weather extends Component {
    constructor() {
        super()

        this.state = {
            weather: [],
            // day1: [],
            // day2: [],
            // day3: [],
            // day4: [],
            // day5: []
        }
    }

    componentDidMount() {
        // console.log(this.props.zip)
        axios.get(`/api/weather/?zip=${this.props.zip}`).then(result => {
            this.setState({weather: result.data})
            // console.log(this.state.weather)
        }).catch(err => {
            // Do something more
            console.log('error fetching weather')
        })
        console.log(this.state.weather[0])
        // this.setState({day1: this.state.weather[0]})
        // console.log(this.state.day1)
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
                    <h3 className="temp"></h3>
                    <div className="icon">
                        <img src="" alt=""/>
                    </div>
                    <h3 className="temp"></h3>
                </div>
                <div className="weather-day-holder">
                    <h2 className="day">The Next Day</h2>
                    <h3 className="temp"></h3>
                    <div className="icon">
                        <img src="" alt=""/>
                    </div>
                    <h3 className="temp"></h3>
                </div>
                <div className="weather-day-holder">
                    <h2 className="day">The Next Day</h2>
                    <h3 className="temp"></h3>
                    <div className="icon">
                        <img src="" alt=""/>
                    </div>
                    <h3 className="temp"></h3>
                </div>
                <div className="weather-day-holder">
                    <h2 className="day">The Next Day</h2>
                    <h3 className="temp"></h3>
                    <div className="icon">
                        <img src="" alt=""/>
                    </div>
                    <h3 className="temp"></h3>
                </div>
            </div>
        )
    }
}