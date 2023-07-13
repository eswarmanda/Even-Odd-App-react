import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  increment = () => {
    this.setState(prevState => {
      console.log(`prevCount: ${prevState.count}`)
      const randomNumber = Math.ceil(Math.random() * 10)
      return {count: prevState.count + randomNumber}
    })
  }

  render() {
    const {count} = this.state
    const counter = count + 1
    const evenOrOdd = parseInt(counter) % 2 ? 'Count is Even' : 'Count is Odd'
    return (
      <div className="container">
        <div className="card">
          <h1 className="count">Count {count}</h1>
          <p className="description">{evenOrOdd}</p>
          <button className="btn" type="submit" onClick={this.increment}>
            Increment
          </button>
          <p className="text">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
