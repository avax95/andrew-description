import React from 'react';

const ViewsAlert = (props) => {
  if (props.data > 200) {
    return (
      <hgroup id="viewsAlert" className="lightBorder">
        <div className="viewsAlertText">
          <div className="title_4" >{'This home is on people\'s minds.'}</div>
          <div id="houseViews" >{`It's been viewed ${props.data}+ times in the past week.`}</div>
        </div>
        <div className="viewsAlertImage">
          <img className="lightBulbImage" alt="light bulb" src="https://s3-us-west-1.amazonaws.com/napbnb/icon2.png" />
        </div>
      </hgroup>
    );
  }
  return null;
};

export default ViewsAlert;
