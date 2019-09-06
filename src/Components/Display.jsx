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
    }

    componentDidMount() {
        axios.get('/api/resorts').then(res => {
            this.setState({resorts: res.data})
        }).catch(err => {
            // Do something more
            console.log(err)
        })
    }

    handleSubmit(body) {
        axios.post('/api/resorts', body).then(res => {
            this.setState({resorts: res.data})
        })
    }

    // handleDelete(id) {
    //     axios.dele
    // }

    render() {
        let list = this.state.resorts.map(el => {
            return <Resorts
                        key={el.id}
                        data={el}
                    />
        })
        return(
            <div className="display">
                {list}
                <AddForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}