import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeInputText = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-cont">
        <div className="card-cont">
          <div>
            <h1 className="main-heading">Calculate the Letters you enter</h1>
            <div className="input-cont">
              <label htmlFor="inputBox" className="label-text">
                Enter the phrase
              </label>
              <input
                id="inputBox"
                className="input-box"
                type="text"
                placeholder="Enter the phrase"
                onChange={this.onChangeInputText}
              />
            </div>
            <p className="count-box">No.of letters: {count}</p>
          </div>
          <img
            className="calci-img"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
