import React from "react"

export default class someComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count:0
    }
  }

/*  static propTypes = {
    data: React.PropTypes.number.isRequired
  }*/

  render(){
    return(
      <div>
        <button onClick = {e => this.updateBtn(e)}> Increase Count: {this.state.count} </button>
      </div>
    )
  }

  updateBtn(){
      this.setState({count: this.state.count+1})
  }


}
