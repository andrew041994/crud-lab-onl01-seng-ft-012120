
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: []}, action) {
    switch (action.type) {
        case "ADD_RESTAURANT":
            let restaurant = {
                id: cuid(),
                text: action.restaurant.text
            }
           let newState = {restaurants: [...state.restaurants, restaurant]}
           return newState
        case "DELETE_RESTAURANT":
            console.log(action)
            return {restaurants: [state.restaurants.filter(r => r.id !== action.id)]}


        default:
         return state
    }

}
