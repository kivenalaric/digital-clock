import { Component } from "react";

export default class Clock extends Component {
    constructor() {
      super();
      this.state = {
        time: ""
      }
    }
  // componentDidMount(){
  //     this.interval = setInterval(this.timeUpdate.bind(this),1000);
  //   }
  //   timeUpdate() {
  //     const date = new Date();
  //     const sec = date.getSeconds();
  //     const min = date.getMinutes();
  //     const hour = date.getHours();
  //     this.setState({
  //       sec: sec,
  //       min: min,
  //       hour: hour,
  //     })
  //   }
    // stopWatch() {
    //   this.setState()
    // }

    setTime() {
      const date = new Date();
      this.setState({
        time: date.toTimeString().split(" ")[0]
      })
    };

    componentDidMount() {
      this.interval = setInterval(() => this.setTime(), 1000);
    }

    componentWillMount() {
      clearInterval(this.interval)
    }

    render() {
      // const date = new Date();
      return (
      <div className='app'>
          <div className='clock'>
           <p> {this.state.time} </p>
        </div>
      </div>
    )
  }

}
