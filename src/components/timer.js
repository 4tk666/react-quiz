import React from 'react';
class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 10
    }
  }
  tick = () => {
    if(this.state.count > 0){
      this.setState({count: this.state.count - 1});
    }else if(this.state.count === 0){
      this.setState({count: 10});
      this.props.questionChange();
    }
  }
  componentDidMount = () => {
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount = () => {
    clearInterval(this.interval);
  }
  render(){
    return(
      <React.Fragment>
        <div>{this.state.count}</div>
      </React.Fragment>
    )
  }
}
export default Timer;