import React from 'react';
import HighlightFeedBack from './HighlightFeedBack';

class Highlights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const highlightsContent = this.props.data.map((item, i) =>
      <div key={i} className="highlight" >
        <div>
          <div className="highlightTitle" >{item.title}</div>
          <div className="highlightText" >&#183;{` ${item.comment}`}</div>
        </div>
        <HighlightFeedBack />
      </div>
    );

    return (
      <hgroup id="highlightsBoard" className="lightBorder" >
        <div className="title_0 " >HOME HIGHLIGHTS</div>
        <div className="allHighlights" >
          {highlightsContent}
        </div>
      </hgroup>
    );
  }
}

export default Highlights;
