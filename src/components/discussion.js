import React, { Component } from 'react'

export default class Discussion extends Component {
    constructor() {
        super()

        this.state = {
            pageTitle: 'Discussion',
            currentTime: String(new Date())
        }
    }


    // use this to stop a data feed
    componentDidMount() {
        this.liveTime = setInterval(() => {
            console.log('new chat message')

            this.setState({ currentTime: String(new Date()) })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.liveTime)
    }
    // use this to stop a data feed

    render() {
        const { pageTitle, currentTime } = this.state

        return (
            <div>
                <h1>{pageTitle}</h1>
                <div>{currentTime}</div>
            </div>
        )
    }
}