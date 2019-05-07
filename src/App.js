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
                        <i class="icon-flight"></i>
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
                  <Block key={i} alt={i%2}>
                    <Task left="150" width="70" className="airport">
                      ZGGG
                    </Task>
                    {
                      v.flights.map((f, j) => {
                        var fsClass = j>0?"flight-status flight-status-sch":"flight-status flight-status-flying"
                        return (
                          <div key={j}>
                            <Task left={f.left} width={f.width} className="flight">
                              {f.flightNo}
                            </Task>
                            <Task left={f.left + (j<1?20:0)} width={f.width} className={fsClass}>
                            </Task>
                          </div>
                        )
                      })
                    }
                    <Task left="420" width="30" className="airport airport-less-time">
                     ZUCK
                    </Task>
                    <Task left="600" width="50" className="airport">
                      ZULS
                    </Task>
                    <Task left="1600" width="150" className="maint">
                      机务维修工作
                    </Task>
                    <Task left="1400" width="120" className="overnight">
                      (ZBAA,ZGGG)
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
