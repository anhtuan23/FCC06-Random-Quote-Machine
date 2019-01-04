import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <QuoteBox />
          <Credit />
        </header>
      </div>
    );
  }
}

export default App;

class QuoteBox extends Component {
  render() {
    return (
      <div id="quote-box">
        <blockquote id="text">
        Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.
          <cite id="author">Johann Wolfgang von Goethe</cite>
        </blockquote>
        <div id="button-container">
          <div id="social-media-btn-container">
            <button className="btn btn-success" id="tweet-quote"><i className="fab fa-twitter"/></button>
            <button className="btn btn-success"><i className="fab fa-tumblr"/></button>
          </div>
          <div id="new-quote-btn-container">
            <button className="btn btn-success" id="new-quote">New Quote</button>
          </div>
        </div>
      </div>
    );
  }
}

class Credit extends Component {
  render(){
    return(
      <div id="credit">
        by Do Tuan Anh
      </div>
    );
  }
}
