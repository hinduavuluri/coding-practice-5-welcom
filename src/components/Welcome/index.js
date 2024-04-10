// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}
  getButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }
  onSubscribe = () => {
    console.log(this.state)
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }
  render() {
    const text = this.getButtonText()
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <button className="button" onClick={this.onSubcribe} type="button">
          {text}
        </button>
      </div>
    )
  }
}
export default Welcome
