import {campaignsData} from '../Fixers/campaignsData'
export const getCampaigns = (campiagns) => dispatch => {
    let currentDate = new Date();
    let Current = currentDate.getTime()
    let newCampaigns  
    if(campiagns == "upcoming" || campiagns == "live"){
        newCampaigns = campaignsData.data.filter((item)=>{
            return item.createdOn > Current
        })
    }else{
      newCampaigns = campaignsData.data.filter((item)=>{
            return item.createdOn < Current
        })
    }
    dispatch({
     type: 'NEW_CAMPAIGNS',
     payload: newCampaigns
    })
   }

