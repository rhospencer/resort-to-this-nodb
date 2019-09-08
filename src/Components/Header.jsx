import React, {Component} from 'react'
import '../App.css'
import mountainLogo from '../assets/mountainLogo.png'

export default function App() {
    return (
        <header>
            <div className="img-box">
                <img src={mountainLogo} alt="Logo"/>
            </div>
            <div className="title-box">
                <h1 className="title">Resort To This</h1>
            </div>
        </header>
    )
}