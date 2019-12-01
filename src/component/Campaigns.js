import React from 'react'
import NavBar from './NavBar'
import { connect } from 'react-redux';
import { getCampaigns } from '../actions/action'
import { ChampaignResult } from './ChampaignResult';
class Campaigns extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    /**
    * 
    *@discription - This function will set the initial upcoming campaign
    */
    componentDidMount() {
        this.props.getCampaigns("upcoming")
    }
    /**
    * 
    *@discription - This function will filter the campaign
    @param campaigns - Value of campaign
    */
    filtercampaigns = (campaigns) => {
        this.props.getCampaigns(campaigns)

    }

    /**
    * 
    *@discription - This function will render the jsx of table and bar
    @param campaigns - Value of campaign
    */
    render() {
        return (
            <>
                <NavBar filtercampaigns={this.filtercampaigns} />
                <ChampaignResult campaigns={this.props.campaigns} />
            </>
        )
    }
}

const mapStateToProps = state => ({
    campaigns: state.reducer.campaigns
})

const mapDispatchToProps = dispatch => ({
    getCampaigns: (campaigns) => dispatch(getCampaigns(campaigns)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Campaigns)