import React, { Component } from "react";
import "./App.css";
import QuoteText from "./QuoteText";
import { quotes } from "../quote";
import { TwittQuoteButton, NewQuoteButton } from "./Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
  }

  componentDidMount() {
    this.updateNewQuote();
  }

  getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

  updateNewQuote = () => this.setState(this.getRandomQuote());

  onDismiss = () => this.updateNewQuote();

  render() {
    const { quote, author } = this.state;
    return (
      <div
        id="quote-box"
        className="flex items-center justify-center min-vh-100 cover athelas"
        style={{
          backgroundImage: "url('https://source.unsplash.com/random/600x800')"
        }}
      >
        <div className="min-vh-40 w-two-thirds w-6-l pa2 bg-white ba br2">
          <QuoteText text={quote} author={author} />
          <div className="flex justify-between item-start">
            <TwittQuoteButton />
            <NewQuoteButton onDismiss={this.onDismiss} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
// https://source.unsplash.com/random
