import React, {Component} from 'react'
import '../App.css'
import play from '../assets/play.png'
import freezeezyPeak from '../assets/freezeezyPeak.m4a'

export default class Count extends Component {
    constructor(props) {
        super(props)

        this.state = {
            musicToggle: false,
            playing: false,
            audio: new Audio(freezeezyPeak)
        }
    }
    
    playSong = () => {
        this.setState({playing: true})
        this.state.audio.play()
    }


    pauseSong = () => {
        this.setState({playing: false})
        this.state.audio.pause()
    }
    

    

    render() {
        return(
            <div className="count">
                    <div className="music-box">
                        <img onClick={this.state.playing ? this.pauseSong : this.playSong} src={play} alt="Play/Pause Button"/>
                    </div>
                <div className="count-box">
                    <h6>Resorts Being Tracked: {this.props.length}</h6>
                </div>
            </div>
        )
    }
}