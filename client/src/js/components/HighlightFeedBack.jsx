import React from 'react';

class HighlightFeedBack extends React.Component {
  constructor(props) {
    super(props);
    this.handleNotHelpfullFeedback = this.handleNotHelpfullFeedback.bind(this);
    this.handletHelpfullFeedback = this.handletHelpfullFeedback.bind(this);
    this.state = {
      helpfulFeedback: null,
    };
  }

  handleNotHelpfullFeedback() {
    this.setState({ helpfulFeedback: false });
  }

  handletHelpfullFeedback() {
    this.setState({ helpfulFeedback: true });
  }

  render() {
    const feedbackGiven = this.state.helpfulFeedback === null;
    const option = feedbackGiven ? (
      <div className="highlightFeedBack" >
        <div className="pointer">
          <div onClick={this.handletHelpfullFeedback} className="highlightFeedback_1" >Helpful</div>
        </div>
        <img className="highlightThumbsUp" alt="thumbs up" src="https://s3-us-west-1.amazonaws.com/napbnb/icon7.png" />
        <div className="dot" >&#183;</div>
        <div className="pointer">
          <div className="pointer" onClick={this.handleNotHelpfullFeedback} className="highlightFeedback_2" >Not Helpful</div>  
        </div>
      </div>
    ) : (
      <div className="feedbackResult" >
        <div className="thanksForFeedback" >Thank you for your feedback.</div>
      </div>
    );

    return (
      <div>
        {option}
      </div>
    );
  }
}

export default HighlightFeedBack;
