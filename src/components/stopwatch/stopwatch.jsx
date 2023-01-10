import { Component } from "react";
import StoppW from './StoppW';
export default class Stopwatch extends Component{
  constructor() {
    super();
    this.state = {
      milliseconds: 0
      // interval: undefined
    }
  }

  
  start() {
    this.setState({
      milliseconds: 0
      // laps: []
    })
     const interval = setInterval(() => {
      this.setState({
        milliseconds: this.state.milliseconds +133
      })
    }, 133);
    this.setState({ interval })
  }
  stop () {
    clearInterval(this.state.interval)
    this.setState({
      interval: undefined
    })
  }

  addLap() {
    const milliseconds = this.state.milliseconds;
    this.setState({laps: [...this.state.laps, milliseconds]})
  }

    render () {
      const seconds = Math.floor(this.state.milliseconds / 1000)
      const milliseconds = this.state.milliseconds % 1000;
        return (
        <div className="stopper">
          {/* <p className="stopp">{seconds}</p>
          <p className="stopp">{milliseconds}</p> */}
          <StoppW milliseconds = {this.state.milliseconds}/>
          { this.state.interval ? (<button className="timer" onClick={this.stop.bind(this)}>Stop</button>) :
          (<button className="timer" onClick={this.start.bind(this)}>Start</button>) }
          <div>
            <h1>Laps</h1>
            {this.state.laps.map{lap => StoppW key=lap milliseconds=(lap)}}
          </div>
        </div>
    )
  }
}