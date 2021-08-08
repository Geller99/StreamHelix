import React from "react";

function FeedTab() {
  return (
    <div className="FeedTab">
      <div className="FeedTab--tabs">
        
        <div className="FeedTab--tabs_buttons">
          <button className='FeedTab-btn btn-hover'>For you</button>
          <button className='FeedTab-btn btn-hover'>Following</button>
          <button className='FeedTab-btn btn-hover'>Discover</button>
        </div>

        <div className="FeedTab--tabs_section2"></div>
      </div>

      <div className="FeedTab_BridgeLine light"> </div>

    </div>
  );
}

export default FeedTab;
