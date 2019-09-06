import React, {Component} from 'react'
import '../App.css'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            edit: false,
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

    toggleEdit = () => {
        this.setState({edit: !this.state.edit})
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
    }

    render() {
        return(
            <div>
                <div className="button-holder">
                    <button onClick={this.toggleEdit} className="add">+</button>              
                </div>
                <div>
                    {!this.state.edit ? <></> : 
                        <div className="add-holder">
                            <input name="nameInput" onChange={(e) => this.handleChange(e)} placeholder="Resort Name" type="text"/>
                            <input name="cityInput" onChange={(e) => this.handleChange(e)} placeholder="City"type="text"/>
                            <input name="stateInput" onChange={(e) => this.handleChange(e)} placeholder="State" type="text"/>
                            <input name="countryInput" onChange={(e) => this.handleChange(e)} placeholder="Country" type="text"/>
                            <input name="zipInput" onChange={(e) => this.handleChange(e)} placeholder="Zip Code" type="text"/>
                            <input name="openingDateInput" onChange={(e) => this.handleChange(e)} placeholder="Opening Date" type="text"/>
                            <input name="liftsOpenInput" onChange={(e) => this.handleChange(e)} placeholder="Lifts Open" type="text"/>
                            <input name="totalLiftsInput" onChange={(e) => this.handleChange(e)} placeholder="Total Lifts" type="text"/>
                            <input name="trailsOpenInput" onChange={(e) => this.handleChange(e)} placeholder="Trails Open" type="text"/>
                            <input name="totalTrailsInput" onChange={(e) => this.handleChange(e)} placeholder="Total Trails" type="text"/>
                            <input name="parksOpenInput" onChange={(e) => this.handleChange(e)} placeholder="Parks Open" type="text"/>
                            <input name="totalParksInput" onChange={(e) => this.handleChange(e)} placeholder="Total Parts" type="text"/>
                            <button onClick={this.toggleEdit}>Cancel</button>
                            <button onClick={this.addResort}>Submit</button>
                        </div>
                }
                </div>
            </div>
        )
    }
}