import { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import Timer from './components/stopwatch/stopwatch';
import Clock from "./components/clock/clock";

export default class App extends Component {
  render (){
    return (
    <div className='main'>
      <Header />
      <Clock />
      <div className='stopwatch'>
        <Timer />
      </div>
    </div>
    )
  }
}
