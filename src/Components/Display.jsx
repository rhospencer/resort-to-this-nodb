import React, {Component} from 'react'
import '../App.css'
import axios from 'axios'
import Resorts from './Resorts'
import AddForm from './AddForm'


export default class Display extends Component {
    constructor() {
        super()

        this.state = {
            resorts: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }

    componentDidMount() {
        axios.get('/api/resorts').then(res => {
            this.setState({resorts: res.data})
        }).catch(err => {
            // Do something more
            console.log('error fetching resorts')
        })
    }

    handleSubmit(body) {
        axios.post('/api/resorts', body).then(res => {
            this.setState({resorts: res.data})
        })
    }

    handleEdit(id, body) {
        axios.put(`/api/resorts/${id}`, body).then(res => {
            this.setState({resorts: res.data})
        })
    }

    handleDelete(id) {
        axios.delete(`/api/resorts/${id}`).then(res => {
            this.setState({resorts: res.data})
        })
    }

    render() {
        let list = this.state.resorts.map(el => {
            return <Resorts
                        key={el.id}
                        data={el}
                        id={el.id}
                        handleDelete={this.handleDelete}
                        handleEdit={this.handleEdit}
                        zip={el.zip}
                    />
        })
        return(
            <div className="display">
                {list}
                <AddForm 
                    handleSubmit={this.handleSubmit} 
                />
            </div>
        )
    }
}