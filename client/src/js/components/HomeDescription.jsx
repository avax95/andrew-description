import React from 'react';

class HomeDescription extends React.Component {
  constructor(props) {
    super(props);
    this.hideDescription = this.hideDescription.bind(this);
    this.showDescription = this.showDescription.bind(this);
    this.state = {
      displayDescription: false,
    };
  }

  hideDescription() {
    this.setState({ displayDescription: false });
  }

  showDescription() {
    this.setState({ displayDescription: true });
  }

  render() {
    const descriptionContent = this.props.data.map((item) => {
      return (
        <div className="descriptionSection" key={item.title}>
          <div className="descriptionTitle" className="title_1">{item.title}</div>
          <div className="descriptionContent" className="paragraph">{item.comment}</div>
        </div>
      );
    });

    const descriptionDisplay = this.state.displayDescription ? (
      <div className="showDescription">
        <div className="descriptionContent">
          {descriptionContent}
        </div>
        <div className="descriptionReadButton">
          <button className="button_1" onClick={this.hideDescription}>Hide</button>
          <span className="arrow">&and;</span>
        </div>
      </div>
    ) : (
      <div className="descriptionReadButton">
        <button className="button_1" onClick={this.showDescription}>Read more about the space</button>
        <span className="arrow"> &or;</span>
      </div>
    );

    return (
      <div className="descriptionBoard">
        {descriptionDisplay}
      </div>
    );
  }
}

export default HomeDescription;
