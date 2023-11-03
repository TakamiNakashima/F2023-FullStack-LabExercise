import React, { Component } from 'react'

export default class Week extends Component{
    constructor(props){
        super(props)
        this.state = {
            x: 9
        }
    }

    changeWeek = () => {
        this.setState({
            x: this.state.x + 1
        })
    }

    render(){
        return (
            <React.Fragment>
                <h2>React JS Programming Week{this.state.x}
                    <button onClick={this.changeWeek}>Next Week</button>
                Lab Exercise</h2>
            </React.Fragment>
        )
    }
}