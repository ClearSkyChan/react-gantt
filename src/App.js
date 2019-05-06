import React from 'react';
import './App.css';
import Gantt from './gantt/gantt'
import Task from './gantt/task'


class App extends React.Component {
  constructor() {
    super()
    this.state={}
    this.state.flights = []
    this.state.flightSchs=[]
    for (let i = 0; i < 1000; i++) {
      var r = Math.random()
      this.state.flights.push({
        left: (i % 10) * 250 + Math.random() * 100,
        width: 100 + Math.random() * 100,
        top: parseInt(i / 10) * 46 + 8,
        r:r
      })
      this.state.flightSchs.push({
        left: (i % 10) * 250 + Math.random() * 100,
        width: 100 + Math.random() * 100,
        top: parseInt(i / 10) * 46 + 2,
        r:r
      })
    }
  }


  render() {
    return (
      <Gantt>
        {
          this.state.flights.map((v, i) => {
            if(v.r>0.3){
              return (
                <Task left={v.left} width={v.width} top={v.top} className="flight">
                  TJ3485
                </Task>
              )
            }
          })
        }
        {
          this.state.flightSchs.map((v, i) => {
            if(v.r>0.3){
              return (
                <Task left={v.left} width={v.width} top={v.top} className="flight-sch">
                </Task>
              )
            }
          })
        }
      </Gantt>
    )
  }
}
export default App;
