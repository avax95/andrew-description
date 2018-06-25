import React from 'react';

class Cancellations extends React.Component {
  constructor(props) {
    super(props);
    this.showCancellationDescription = this.showCancellationDescription.bind(this);
    this.state = {
      showCancellation: false,
      1: 'Soft',
      2: 'Flexible',
      3: 'Moderate',
      4: 'Strict',
      5: 'Harsh',
    };
  }

  showCancellationDescription() {
    this.setState({ showCancellation: true });
  }

  render() {
    const cancellationType = this.state[this.props.data.cancellationType];
    const cancellationText = this.state.showCancellation
      ? (
        <div className="rulesDisplay">
          <div>
            <div className="cancellationParagraph">
              {this.props.data.cancellationSummary}
            </div>
          </div>
        </div>
      )
      : (
        <div className="rulesDisplay">
          <div className="rulesDescription" className="cancellationParagraph">
            <span>
              {this.props.data.cancellationSummary.slice(0, 130).concat('...')}
            </span>
            <button onClick={this.showCancellationDescription} className="readMoreButton">Read more</button>
          </div>
        </div>
      );
    return (
      <div>
        <div className="">
          <div className="marginTop">
            <div className="title_1">Cancellations</div>
          </div>
          <div className="marginTop_1">
            <div className="paragraph">{cancellationType}</div>
          </div>
          <div className="">
            {cancellationText}
          </div>
        </div>
        <div className="button_1">
          <div className="buttonHover_1">
            <div>Get details</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cancellations;
