import React from 'react';

class HouseRules extends React.Component {
  constructor(props) {
    super(props);
    this.hideRules = this.hideRules.bind(this);
    this.showRules = this.showRules.bind(this);
    this.state = {
      displayRules: false,
    };
  }

  hideRules() {
    this.setState({ displayRules: false });
  }

  showRules() {
    this.setState({ displayRules: true });
  }

  render() {
    const smoking = this.props.data.smoking 
      ? (
        <div className="singleRule">No smoking</div>
      )
      : (
        null
      );
    const pets = this.props.data.petSuitable 
      ? (
        <div className="singleRule">No suitable for pets</div>
      ) : (
        null
      );
    const partiesOrEvents = this.props.data.partiesOrEvents 
      ? (
        <div className="singleRule">No parties or events</div>
      ) : (
        null
      );
    const selfCheckIn = this.props.data.selfCheckInWithLockBox 
      ? (
        <div className="singleRule">Self check-in with lockbox</div>
      ) : (
        null
      );

    const rulesDisplay = this.state.displayRules ? (
      <div>
        <div className="shortBorder" />
        <div className="rulesDisplay">
          <div className="paragraph">
            {this.props.data.rules}
          </div>
          <div className="title_1">You must also acknowledge</div>
          <div className="paragraph">
            {this.props.data.rulesToAcknowledge}
          </div>
          <div className="descriptionReadButton">
            <button className="button_1" onClick={this.hideRules}>Hide rules</button>
            <span className="arrow">&and;</span>
          </div>
        </div>
      </div>
    ) : (
      <div className="descriptionReadButton">
        <button className="button_1" onClick={this.showRules}>Read all rules</button>
        <span className="arrow"> &or;</span>
      </div>
    );

    return (
      <div>
        <div className="rulesBoard">
          <div className="title_1">House Rules</div>
          <div className="rulesTable">
            {smoking}
            {pets}
            {partiesOrEvents}
            <div className="singleRule">{`Check-in time is ${this.props.data.checkInStartTime}PM - ${this.props.data.checkInEndTime}PM`}</div>
            <div className="singleRule">{`Check out by ${this.props.data.checkOutTime}AM`}</div>
            {selfCheckIn}
          </div>
        </div>
        <div className="rulesDescription">
          {rulesDisplay}
        </div>
      </div>
    );
  }
}

export default HouseRules;
