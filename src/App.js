import React, { Component } from 'react';
import './App.css';

const quoteArray = [
  {
    quote: 'Remember that not getting what you want is sometimes a wonderful stroke of luck.',
    author: 'Dalai Lama'
  },
  {
    quote: 'If you can dream it, you can achieve it.',
    author: 'Zig Ziglar'
  },
  {
    quote: 'It does not matter how slowly you go as long as you do not stop.',
    author: 'Confucius'
  },
  {
    quote: 'Everything you’ve ever wanted is on the other side of fear.',
    author: 'George Addair'
  },
  {
    quote: 'Either you run the day, or the day runs you.',
    author: 'Jim Rohn'
  },
  {
    quote: 'Challenges are what make life interesting and overcoming them is what makes life meaningful.',
    author: 'Joshua J. Marine'
  },
  {
    quote: 'Too many of us are not living our dreams because we are living our fears.',
    author: 'Les Brown'
  },
  {
    quote: 'I didn’t fail the test. I just found 100 ways to do it wrong.',
    author: 'Benjamin Franklin'
  },
  {
    quote: 'Your time is limited, so don’t waste it living someone else’s life.',
    author: 'Steve Jobs'
  },
  {
    quote: 'You miss 100% of the shots you don’t take.',
    author: 'Wayne Gretzky'
  },
];

const colorArray = ['#282c34', '#364666', '#4d3b5c', '#662c4f', '#31662c', '#b71c1c', '#880e4f', '#4a148c', '#311b92', '#1a237e', '#004d40', '#33691e', '#f57f17', '#e65100', '#bf360c', '#6d4c41', '#616161', '#455a64'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteIndex: 0,
      colorIndex: 0
    }
    this.newQuote = this.newQuote.bind(this);
  }

  newQuote(){
    this.setState({
      quoteIndex: App.getNewRandom(quoteArray.length, this.state.quoteIndex),
      colorIndex: App.getNewRandom(colorArray.length, this.state.colorIndex)
    })
  }

  static getNewRandom(max, excludedNumber){
    let num = 0;
    do {
      num = Math.floor(Math.random() * max)
    } while (num === excludedNumber);;
    return num;
  }

  render() {
    const headerStyle = {
      backgroundColor: colorArray[this.state.colorIndex],
      color: colorArray[this.state.colorIndex]
    }
    return (
      <div className="App">
        <header className="App-header" style={ headerStyle }>
          <QuoteBox
            quote={quoteArray[this.state.quoteIndex].quote}
            author={quoteArray[this.state.quoteIndex].author}
            newQuote={this.newQuote}
          />
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
          {this.props.quote}
          <cite id="author">{this.props.author}</cite>
        </blockquote>
        <div id="button-container">
          <div id="social-media-btn-container">
            <button className="btn btn-success" id="tweet-quote"><i className="fab fa-twitter" /></button>
            <button className="btn btn-success"><i className="fab fa-tumblr" /></button>
          </div>
          <div id="new-quote-btn-container">
            <button onClick={this.props.newQuote} className="btn btn-success" id="new-quote">New Quote</button>
          </div>
        </div>
      </div>
    );
  }
}

class Credit extends Component {
  render() {
    return (
      <div id="credit">
        by Do Tuan Anh
      </div>
    );
  }
}
