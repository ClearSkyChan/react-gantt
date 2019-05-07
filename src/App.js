import React from 'react';
import './App.css';
import { Gantt, Side, Block, Task } from './gantt/gantt'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.state.data = []
    for (let i = 0; i < 100; i++) {
      this.state.data.push({
        aircraft: {
          acReg: 'B-1818',
          acType: 'B737-800',
          maxSeat: 170
        },
        flights: [
          {
            flightNo: 'GT7300',
            depa: 'ZGGG',
            arri: 'ZUCK',
            left: 200,
            width: 200
          }, {
            flightNo: 'GT7300',
            depa: 'ZUCK',
            airri: 'ZULS',
            left: 450,
            width: 150
          }
        ],
        connections: [

        ]
      })
    }

  }


  render() {
    return (
      <Gantt
        indexs={
          <div>
            {
              this.state.data.map((v, i) => {
                return (
                  <Side key={i} className="side">
                    <div className="ac-info">
                      <div className="ac-reg">
                        {v.aircraft.acReg}
                      </div>
                      <div className="ac-detail">
                        {v.aircraft.acType} / {v.aircraft.maxSeat}
                      </div>
                    </div>
                  </Side>
                )
              })
            }
          </div>
        }
        blocks={
          <div>
            {
              this.state.data.map((v, i) => {
                return (
                  <Block key={i}>
                    <Task left="150" width="50" className="airport">
                      ZGGG
                    </Task>
                    {
                      v.flights.map((f, j) => {
                        return (
                          <div key={j}>
                            <Task left={f.left} width={f.width} className="flight">
                              {f.flightNo}
                            </Task>

                            <Task left={f.left} width={f.width} className="flight-sch">
                            </Task>
                          </div>
                        )
                      })
                    }
                    <Task left="400" width="50" className="airport">
                      ZUCK
                    </Task>
                    <Task left="600" width="50" className="airport">
                      ZULS
                    </Task>
                  </Block>
                )
              })
            }
          </div>
        }
      />
    )
  }
}
export default App;
