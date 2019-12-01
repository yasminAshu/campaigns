import React, {useState} from 'react';
import {Popup} from './Popup'
export const ChampaignResult = ({ campaigns }) => {
    const [show, setModel] = useState(false);
    const [campaignInfo, setcampaignInfo] = useState(null);
    /**
    * 
    *@discription - This function will show model on cliking the row of the table
    @param campaign -Object of campaign selected
    */
   function showModal(campaign) {
    setModel(true)
    setcampaignInfo(campaign)
};

    return (
        <>
         <Popup show={show} campaignInfo={campaignInfo} handleClose={() => setModel(false)} />
        <div className="grid">
             <div className="header">
                <span className="search-head"><strong>Date</strong></span>
                <span className="search-head"><strong>Campaigns</strong></span>
                <span className="search-head"><strong>VIEW</strong></span>
                <span className="search-head"><strong>ACTION</strong></span>
            </div>
            {campaigns && campaigns.map((item, index) => {
                let current = Date.now()
                let CretedOn = new Date(item.createdOn)
                let dayleft = item.createdOn-current,
                Difference_In_Time = dayleft / (1000 * 3600 * 24)

                return (
                    <div className = "grid-container" key={index}>
                        <span >{CretedOn.toString() } <span>{parseInt(Difference_In_Time)} days left</span></span>
                        <span>{item.name}</span>
                        <span onClick ={() => showModal(item)}>View Pricing</span>
                        <span>CSV</span>
                        <span>Report</span>
                        <span>Schedule Again</span>
                    </div>
                )
            })}
        </div>
    </>
    )
}