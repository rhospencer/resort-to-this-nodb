import React, {Component} from 'react'
import '../App.css'
import Weather from './Weather'
import editImg from '../assets/edit.png'
import deleteImg from '../assets/delete.png'
import cancelImg from '../assets/cancel.png'
import submitImg from '../assets/submit.png'


export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // Inputs for update functionality
            openingDateUpdate: '',
            liftsOpenUpdate: '',
            trailsOpenUpdate: '',
            parksOpenUpdate: '',
            zipUpdate: '',
            edit: false
        }
    }


    toggleEdit = () => {
        this.setState({edit: !this.state.edit})
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    editResort = () => {
        let updatedResort = {
            id: this.props.id,
            name: this.props.data.name,
            city: this.props.data.city,
            state: this.props.data.state,
            country: this.props.data.country,
            newZip: this.state.zipUpdate || this.props.data.zip,
            newOpeningDate: this.state.openingDateUpdate || this.props.data.openingDate,
            newLiftsOpen: this.state.liftsOpenUpdate || this.props.data.liftsOpen,
            totalLifts: this.props.data.totalLifts,
            newTrailsOpen: this.state.trailsOpenUpdate || this.props.data.trailsOpen,
            totalTrails: this.props.data.totalTrails,
            newParksOpen: this.state.parksOpenUpdate || this.props.data.parksOpen,
            totalParks: this.props.data.totalParks
        }
        this.props.handleEdit(this.props.id, updatedResort)
        this.toggleEdit()
    }

    render() {
        return(
            <div className="resort-holder">
                {!this.state.edit ? 
                <div className="resort">
                    <div className="resort-title-holder">
                        <h1>{this.props.data.name}</h1>
                        <h2>
                            {this.props.data.city}, 
                            &nbsp;{this.props.data.state}, 
                            &nbsp;{this.props.data.country}
                        </h2>
                    </div>
                    <div className="weather-holder">
                        <Weather zip={this.props.zip}/>
                    </div>
                    <div className="resort-info-holder">
                        <div className="resort-info">
                            <h2>Opening Date: {this.props.data.openingDate}</h2>
                            <h2>Lifts Open: {this.props.data.liftsOpen}/{this.props.data.totalLifts}</h2>
                            <h2>Trails Open: {this.props.data.trailsOpen}/{this.props.data.totalTrails}</h2>
                            <h2>Parks Open: {this.props.data.parksOpen}/{this.props.data.totalParks}</h2>
                        </div>
                    </div>
                </div>
                :
                <div className="resort-edit">
                    <div className="resort-edit-title-holder">
                        <div className="resort-edit-name-holder">
                        <h1>{this.props.data.name}</h1>
                        <h2>
                            {this.props.data.city}, 
                            {this.props.data.state}, 
                            {this.props.data.country}
                        </h2>
                        </div>
                        <div className="zip-edit-holder">
                            <h2>Zip Code</h2>
                            <input name="zipUpdate" onChange={(e) => this.handleChange(e)} type="text"/>
                        </div>
                    </div>
                    <div className="resort-info-edit-holder">
                        <div className="resort-info">
                            <div className="info-edit">
                                <h2>Opening Date <input name="openingDateUpdate" onChange={(e) => this.handleChange(e)} type="text"/></h2>
                            </div>
                            <div className="info-edit">
                                <h2>Lifts Open <input name="liftsOpenUpdate"onChange={(e) => this.handleChange(e)} type="text"/></h2>
                            </div>
                            <div className="info-edit">
                                <h2>Trails Open <input name="trailsOpenUpdate"onChange={(e) => this.handleChange(e)} type="text"/></h2>
                            </div>
                            <div className="info-edit">
                                <h2>Parks Open <input name="parksOpenUpdate" onChange={(e) => this.handleChange(e)} type="text"/></h2>
                            </div>
                        </div>
                    </div>
                    <div className="edit-button-holder">
                        {/* <button onClick={() => this.toggleEdit()}>Cancel</button> */}
                        <img src={cancelImg} onClick={() => this.toggleEdit()} alt=""/>
                        {/* <button onClick={this.editResort}>Submit</button> */}
                        <img src={submitImg}  onClick={this.editResort} alt=""/>
                    </div>
                </div>
            }
                <div className="edit-holder">
                    {/* <button onClick={() => this.toggleEdit()}>Edit</button> */}
                    <img src={editImg} onClick={() => this.toggleEdit()} alt=""/>
                    {/* <button onClick={() => this.props.handleDelete(this.props.id)}>Delete</button> */}
                    <img src={deleteImg} onClick={() => this.props.handleDelete(this.props.id)} alt=""/>
                </div>
            </div>
        )
    }
}