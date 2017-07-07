import React, { Component } from "react";
import NewsList from "./components/NewsList";
import EachNews from "./components/EachNews";
import Header from "./components/Header";

let articles = [];

class App extends Component {
  constructor(articles) {
    super(articles);
    this.state = {
      newsApiData: null,
      newsApiDataLoaded: false,
      showEachNewsId: null,
      title: null,
      author: null,
      score: null,
      url: null,
    };
    this.eachNews = this.eachNews.bind(this);
  }

  articles = [];

  componentDidMount() {
    fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    ).then(response => {
      response.json().then(json => {
        json.forEach(value => {
          fetch(
            `https://hacker-news.firebaseio.com/v0/item/${value}.json`
          ).then(response => {
            response.json().then(json => {
              articles.push(json);
              this.setState({
                newsApiDataLoaded: true,
              });
            });
          });
        });
      });
    });
  }

  renderNewsList() {
    if (this.state.newsApiDataLoaded) {
      return (
        <NewsList
          data={articles}
          eachNews={this.eachNews}
          showDetails={this.showDetails}
        />
      );
    } else return <p className="loading">Loading</p>;
  }

  eachNews(id, titleValue, authorValue, scoreValue, urlValue) {
    this.setState({
      showEachNewsId: id,
      title: titleValue,
      author: authorValue,
      score: scoreValue,
      url: urlValue,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {this.renderNewsList()}
          <div className="descriptionbox">
            {this.state.showEachNewsId !== null
              ? <EachNews
                  title={this.state.title}
                  author={this.state.author}
                  score={this.state.score}
                  url={this.state.url}
                />
              : null}
          </div>
        </div>
      </div>
    );
  }
  // newsApiDataLoaded;
}

export default App;
