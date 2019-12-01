import React from 'react';
   /**
   * 
   *@discription - This function will return the jsx of model popup
   @param campaignInfo -Object of campaign selected
    @param handleClose -function to close popup
     @param show -variable to show and hide popup
     @return {String} - returns the jsx code of the popup
   */
export const Popup = ({ campaignInfo, handleClose, show }) => {
    let showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
              <header className = "model-header">
                <img  src = "../images/Bitmap.png" alt= "pubG" />
                <h2>PUBG MOBILE</h2>
              </header>
                <div className="campaign-info">
                 <h1>Pricing</h1>
                 <span>1 month </span>
                 <span>{campaignInfo && campaignInfo.price}</span>
                </div>
                <button className="button-close" onClick={handleClose}>close</button>
            </section>
        </div>
    );
};