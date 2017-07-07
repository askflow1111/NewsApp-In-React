import React, { Component } from "react";
import News from "./News";

class NewsList extends Component {
  render() {
    return (
      <div className="titlebox">
        <section className="todo">
          <ul className="todo-list" id="todo">
            {this.props.data.map(newsList => {
              return (
                <News
                  newsList={newsList}
                  id={newsList.id}
                  key={newsList.id}
                  eachNews={this.props.eachNews}
                />
              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default NewsList;
