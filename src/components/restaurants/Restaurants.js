import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <div>
      <ul>
        <Restaurant key={this.props.restaurant.id} 
        deleteRestaurant={this.props.deleteRestaurant} 
        restaurant={this.props.restaurant}/>
      </ul>
      </div>
    );
  }
};

export default Restaurants;