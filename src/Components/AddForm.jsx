import React, {Component} from 'react'
import '../App.css'

export default class App extends Component {
    constructor() {
        super()

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

    render() {
        return(
            <div>
                <div className="button-holder">
                    <button onClick={this.toggleEdit} className="add">+</button>              
                </div>
                <div>
                    {!this.state.edit ? <></> : 
                        <div className="edit-holder">

                        </div>
                }
                </div>
            </div>
        )
    }
}