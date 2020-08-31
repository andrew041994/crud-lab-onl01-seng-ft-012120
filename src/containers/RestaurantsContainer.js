import React, { Component } from 'react'
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        {this.props.restaurants.map(r => <Restaurants deleteRestaurant={this.props.deleteRestaurant} restaurant={r} key={r.id}/>)} 
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {addRestaurant: (restaurant) => dispatch({type: "ADD_RESTAURANT", restaurant}),
          deleteRestaurant: (id) => dispatch({type: "DELETE_RESTAURANT", id})
} 
 
}

const mapStateToProps = (state) => {
  return {restaurants: state.restaurants}
}

export default connect(mapStateToProps,mapDispatchToProps)(RestaurantsContainer)
