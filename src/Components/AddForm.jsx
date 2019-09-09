import React, {Component} from 'react'
import '../App.css'
import addImg from '../assets/plus.png'
import cancelImg from '../assets/cancel.png'
import submitImg from '../assets/submit.png'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            add: false,
            nameInput: '',
            cityInput: '',
            stateInput: '',
            countryInput: '',
            zipInput: '',
            openingDateInput: '',
            liftsOpenInput: '',
            totalLiftsInput: '',
            trailsOpenInput: '',
            totalTrailsInput: '',
            parksOpenInput: '',
            totalParksInput: ''
        }
    }

    toggleAdd = () => {
        this.setState({add: !this.state.add})
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    addResort = () => {
        let newResort = {
            name: this.state.nameInput,
            city: this.state.cityInput,
            state: this.state.stateInput,
            country: this.state.countryInput,
            zip: this.state.zipInput,
            openingDate: this.state.openingDateInput,
            liftsOpen: this.state.liftsOpenInput,
            totalLifts: this.state.totalLiftsInput,
            trailsOpen: this.state.trailsOpenInput,
            totalTrails: this.state.totalTrailsInput,
            parksOpen: this.state.parksOpenInput,
            totalParks: this.state.totalParksInput
        }
        this.props.handleSubmit(newResort)
        this.toggleAdd()
    }

    render() {
        return(
                <div>
                    {!this.state.add ? 
                        <div className="button-holder">
                            <img src={addImg} onClick={this.toggleAdd} alt="Add Button Icon"/>              
                        </div> 
                        : 
                        <div className="add-form-holder">
                            <div className="add-form-box">
                                <div className="add-text-and-input-holder">
                                    <div className="add-form-text">
                                        <h3>Resort Name: </h3>
                                        <h3>City: </h3>
                                        <h3>State: </h3>
                                        <h3>Country: </h3>
                                        <h3>Zip Code: </h3>
                                        <h3>Opening Date: </h3>
                                        <h3>Lifts Open: </h3>
                                        <h3>Total Lifts: </h3>
                                        <h3>Trails Open: </h3>
                                        <h3>Total Trails: </h3>
                                        <h3>Parks Open: </h3>
                                        <h3>Total Parks: </h3>
                                    </div>
                                    <div className="add-form-input">
                                        <input className="add-input"name="nameInput" onChange={(e) => this.handleChange(e)} type="text"/>
                                        <input name="cityInput" onChange={(e) => this.handleChange(e)} type="text"/>
                                        <input name="stateInput" onChange={(e) => this.handleChange(e)} type="text"/>
                                        <input name="countryInput" onChange={(e) => this.handleChange(e)} type="text"/>
                                        <input name="zipInput" onChange={(e) => this.handleChange(e)} type="text"/>
                                        <input name="openingDateInput" onChange={(e) => this.handleChange(e)} type="text"/>
                                        <input name="liftsOpenInput" onChange={(e) => this.handleChange(e)} type="text"/>
                                        <input name="totalLiftsInput" onChange={(e) => this.handleChange(e)} type="text"/>
                                        <input name="trailsOpenInput" onChange={(e) => this.handleChange(e)} type="text"/>
                                        <input name="totalTrailsInput" onChange={(e) => this.handleChange(e)} type="text"/>
                                        <input name="parksOpenInput" onChange={(e) => this.handleChange(e)} type="text"/>
                                        <input name="totalParksInput" onChange={(e) => this.handleChange(e)} type="text"/>
                                    </div>

                                </div>
                                <div className="add-button-holder">
                                    <img src={cancelImg} onClick={this.toggleAdd} alt="Cancel Button Icon"/>
                                    <img src={submitImg}  onClick={this.addResort} alt="Submit Button Icon"/>
                                </div>

                            </div>

                        </div>
                }
                </div>
        )
    }
}