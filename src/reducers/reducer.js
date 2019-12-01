
import {campaignsData} from '../Fixers/campaignsData'
const initialState = {
  campaigns:[]
};
export default (state = initialState, action) => {
    switch (action.type) {
     case 'NEW_CAMPAIGNS':
      return {
            ...state, campaigns:action.payload
      }
     default:
      return state
    }
   }