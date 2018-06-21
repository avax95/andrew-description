import React from 'react';
import AllAmenities from './AllAmenities';

const AmenitiesModal = (props) => {

  if (!props.data.showAmenitiesModal) {
    return null;
  }
  
  return (
    <div className="backdropStyle" onClick={props.onClose}>
      <div className="modalStyle">
        <AllAmenities onClose={props.onClose}  data={props.data.amenities} />
      </div>
    </div>
  );
};

export default AmenitiesModal;
