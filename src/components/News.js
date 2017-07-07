import React, { Component } from 'react';

class News extends Component {
  render() {
    return (
      <li className="item" onClick={() => this.props.eachNews(this.props.newsList.id, this.props.newsList.title, this.props.newsList.by, this.props.newsList.score, this.props.newsList.url)}>
        {this.props.newsList.title}
      </li>
    )
  }
}


export default News;