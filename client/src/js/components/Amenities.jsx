import React from 'react';
import AmenitiesModal from './AmenitiesModal';

class Amenities extends React.Component {
  constructor(props) {
    super(props);
    this.showAmenitiesModal = this.showAmenitiesModal.bind(this);
    this.state = {
      amenities: this.props.data,
      showAmenitiesModal: false,
    };
  }

  showAmenitiesModal() {
    this.setState({ showAmenitiesModal: !this.state.showAmenitiesModal });
  }

  render() {
    let amenitiesListed = 0;
    let totalAmenities = 0;

    const amenitiesList = this.props.data.map((item) => {
      totalAmenities += item.contents.length;
      if (item.contents[0] && amenitiesListed < 6) {
        amenitiesListed += 1;
        const amenityNumber = Math.floor((Math.random() * 40) + 1);
        return (
          <div key={item.contents[0].item} className="amenityItem">
            <img className="icon_2" alt="amenityIcon" src={`https://s3-us-west-1.amazonaws.com/napbnb/amenity${amenityNumber}.png`} />
            <div>{item.contents[0].item}</div>
          </div>
        );
      }
    });

    return (
      <hgroup className="amenityComponent">
        <div className="title_1">Amenities</div>
        <div className="listOfTopAmenities">
          {amenitiesList}
        </div>
        <button className="button_1" onClick={this.showAmenitiesModal}>{`Show all ${totalAmenities} amenities`}</button>
        <AmenitiesModal data={this.state} onClose={this.showAmenitiesModal} />
      </hgroup>
    );
  }
}

export default Amenities;
