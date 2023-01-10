import {Component} from 'react'

export default class Laps extends Component {
    render() {
        const seconds = Math.floor(this.props.milliseconds / 1000)
      const milliseconds = this.props.milliseconds % 1000;
        return (
            <div className='display'>
                <span>{seconds}</span>
                <span>{milliseconds}</span>
            </div>
        )
    }
}