import React, {Component} from 'react'
import '../App.css'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // Inputs for update functionality
            openingDateUpdate: '',
            liftsOpenUpdate: '',
            trailsOpenUpdate: '',
            parksOpenUpdate: '',
            zipUpdate: ''
        }
    }

    render() {
        return(
            <div className="resort-holder">
                <div className="resort">
                    <div className="title-holder">
                        <h1>{this.props.data.name}</h1>
                        <h4>
                            {this.props.data.city}, 
                            {this.props.data.state}, 
                            {this.props.data.country}
                        </h4>
                    </div>
                    <div className="weather-holder">
                        Weather Holder 
                    </div>
                    <div className="resort-info-holder">
                        <div className="resort-info">
                            <h4>Opening Date: {this.props.data.openingDate}</h4>
                            <h4>Lifts Open: {this.props.data.liftsOpen}/{this.props.data.totalLifts}</h4>
                            <h4>Trails Open: {this.props.data.trailsOpen}/{this.props.data.totalTrails}</h4>
                            <h4>Parks Open: {this.props.data.parksOpen}/{this.props.data.totalParks}</h4>
                        </div>
                    </div>
                </div>
                <div className="edit-holder">
                    <button>Edit</button>
                    <button onClick={() => this.props.handleDelete(this.props.id)}>Delete</button>
                </div>
            </div>
        )
    }
}