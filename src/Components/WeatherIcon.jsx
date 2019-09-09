import React, {Component} from 'react'
import '../App.css'
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

export default class WeatherIcon extends Component {
    constructor() {
        super() 

        this.state = {

        }
    }
    render() {
        return(
            <div className="icon">
                <img src={clearSky} alt="Weather Icon"/>
            </div>
        )
    }
}