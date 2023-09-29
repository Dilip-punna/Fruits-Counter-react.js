// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {countMango: 0, countBanana: 0}

  onMango = () => {
    this.setState(prevState => ({countMango: prevState.countMango + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({countBanana: prevState.countBanana + 1}))
  }

  render() {
    const {countMango, countBanana} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1>
            Bob ate <span> {countMango} </span>mangoes{' '}
            <span>{countBanana} </span>
            Bananas
          </h1>
          <div className="cart">
            <div>
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button className="mango" type="button" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div>
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button className="banana" type="button" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
