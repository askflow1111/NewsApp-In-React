import React, { Component } from "react";

class News extends Component {
  render() {
    return (
      <div>
        <div className="title">
          <h2>
            {this.props.title}
          </h2>
        </div>
        <div className="author">
          <h3>
            Added By: "{this.props.author}"
          </h3>
        </div>
        <div className="score">
          <h3>
            Score: {this.props.score}
          </h3>
        </div>
        <div className="link">
          <a href={this.props.url} target="_blank">
            Click Here To Read This Article
          </a>
        </div>
      </div>
    );
  }
}

export default News;
