import React from 'react';
import AmenitySectionListing from './AmenitySectionListing';

const AllAmenities = (props) => {


  const handleAmenitiesBoardClick = (e) => {
    e.stopPropagation();
  };

  const allAmenitiesList = props.data.map((category, i) => {
    if (category.contents.length === 0) {
      return null;
    }

    if (i === props.data.length - 1) {
      return (
        <div key={category.title}>
          <div className="amenityCategorySection">
            <div className="title_11" >{category.title}</div>
          </div>
          <div className="amenityNotIncluded">
            <div className="itemsSection">
              <AmenitySectionListing data={category.contents} />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div key={category.title}>
        <div className="amenityCategorySection">
          <div className="title_11" >{category.title}</div>
        </div>
        <div className="itemsSection">
          <AmenitySectionListing data={category.contents} />
        </div>
      </div>
    );
  });

  return (
    <hgroup onClick={handleAmenitiesBoardClick} id="allAmenitiesBoard">
      <div className="xButtonParentDiv">
        <input type="image"  alt="exit" onClick={props.onClose} className="xButton" src="https://s3-us-west-1.amazonaws.com/napbnb/iconx.png" />
      </div>
      <div className="title_10" >Amenities</div>
      <div className="amenityTable">
        {allAmenitiesList}
      </div>
    </hgroup>
  );
};

export default AllAmenities;
