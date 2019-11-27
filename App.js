class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: { color: 'red' },
      bgColor: { backgroundColor: 'red' },
      indexQuote: 0,
      quote: '',
      author: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  loadQuote() {
    let newColor = '';
    let newIndex = 0;
    do {
      newColor = 'hsl(' + Math.floor(Math.random() * 255) + ', 40%, 30%)';
      newIndex = Math.floor(Math.random() * quoteList.length);
    }
    while (newColor == this.state.color || newIndex == this.state.indexQuote);
    this.setState({
      color: { color: newColor },
      bgColor: { backgroundColor: newColor },
      indexQuote: newIndex,
      quote: quoteList[newIndex].quote,
      author: quoteList[newIndex].author
    }
    );
  }

  // Load first quote on load page
  componentDidMount() {
    this.loadQuote();
  }

  // load new quote on click event
  handleClick() {
    this.loadQuote();
  }

  render() {
    return (
      <div className="App" style={this.state.bgColor}>
        <div id="quote-box" className="container-fluid">
          <div id="text" className="d-flex" style={this.state.color}>
            <i className="fas fa-quote-left mr-3"></i>
            <blockquote className="text-left">{this.state.quote}</blockquote>
          </div>
          <p id="author" className="text-right" style={this.state.color}>- {this.state.author}</p>
          <div className="row">
            <div className="col-md-2">
              <a id="tweet-quote" className="btn btn-block btn-primary border-0" href="https://twitter.com/intent/tweet" target="_blank" style={this.state.bgColor}>
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <div className="col-md-2">
              <a className="btn btn-block btn-primary border-0" href="https://tmbler.com" target="_blank" style={this.state.bgColor}>
                <i className="fab fa-tumblr"></i>
              </a>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <button id="new-quote" className="App-newQuote btn btn-block btn-primary border-0" onClick={this.handleClick} style={this.state.bgColor}>New quote</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
