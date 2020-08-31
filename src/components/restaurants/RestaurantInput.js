import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super()
    this.state = {
      text: ""
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addRestaurant(this.state)
    this.setState({
      text: ""
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
        <br/><br/>
          Add Restaurant<br/><br/>
          <input type="text" value={this.state.text} onChange={(event) => this.setState({text: event.target.value})}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
