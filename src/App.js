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
            width: 150,
            locked: true
          }
          , {
            flightNo: 'GT8300',
            depa: 'ZULS',
            airri: 'ZBAA',
            left: 850,
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
                  <Side key={i}>
                    <div className="ac-info">
                      <div className="ac-reg">
                        <i className="iconfont icon-plane"></i>
                        &nbsp;{v.aircraft.acReg}
                      </div>
                      <div className="ac-detail">
                        <div className="ac-type">
                          <i className="iconfont icon-kind" style={{ fontSize: "11px" }}></i>
                          &nbsp;{v.aircraft.acType}
                        </div>
                        <div className="ac-seat">
                          <i className="iconfont icon-seat" style={{ fontSize: "11px" }}></i>
                          &nbsp;{v.aircraft.maxSeat}
                        </div>
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
                  <Block key={i} alt={i % 2}>
                    <Task left="150" width="50" className="airport">
                      ZGGG
                    </Task>
                    <Task left="150" width="70" className="airport-status">
                    </Task>
                    {
                      v.flights.map((f, j) => {
                        var fsClass = j > 0 ? "flight-status flight-status-sch" : "flight-status flight-status-flying"
                        var icon = f.locked?(<div style={{position:'absolute',width:'40px'}}><i className="iconfont icon-lock"></i></div>):"";
                        return (
                          <div key={j}>
                            <Task left={f.left} width={f.width} className="flight">
                              { icon }
                              <div>{f.flightNo}</div>
                            </Task>
                            <Task left={f.left + (j < 1 ? 20 : 0)} width={f.width} className={fsClass}>
                            </Task>
                          </div>
                        )
                      })
                    }

                    <Task left="400" width="50" className="airport">
                      ZUCK
                    </Task>
                    <Task left="420" width="30" className="airport-status airport-less-time">
                    </Task>

                    <Task left="600" width="250" className="airport">
                      ZULS
                    </Task>
                    <Task left="600" width="250" className="airport-status">
                    </Task>


                    <Task left="1600" width="150" className="maint">
                      <i className="iconfont icon-weixiu"></i>&nbsp;
                      机务维修工作
                    </Task>
                    <Task left="1400" width="120" className="overnight">
                      <i className="iconfont  icon-weizhi" style={{ fontSize: "13px" }}></i>
                      <span title="限制过夜">ZBAA</span>
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
