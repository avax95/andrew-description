import React from 'react';

const AmenitySectionListing = (props) => {

  const sectionList = props.data.map((element, i) => {
    return (
      <div className="anAmenity" key={i} >
        <div className="amenityText" >
          <div>{element.item}</div>
          <div>{element.description}</div>
        </div>
      </div>
    );
  });

  return (
    <hgroup>
      {sectionList}
    </hgroup>
  );
};

export default AmenitySectionListing;
