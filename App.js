class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: ""
    }
  }

  changeInput(event) {
    this.setState({
      input: event.target.value,
      output: marked(event.target.value)
    });
    document.getElementById("preview").innerHTML = this.state.output;
  }



  render() {
    return (
      <div className="App container-fluid">
        <Editor change={this.changeInput.bind(this)} input={this.state.input} />
        <Previewer output={this.state.output} />
      </div>
    );
  }
}

class Editor extends React.Component {

  handleChange() {
    this.props.change(event);
  }

  render() {
    return (
      <div className="card w-50 mt-5">
        <div className="card-header d-flex justify-content-between align-items-center">
          Editor<i className="fas fa-expand-arrows-alt"></i>
        </div>
        <textarea id="editor" className="card-body" onChange={this.handleChange.bind(this)} value={this.props.intput}></textarea>
      </div>
    );
  }
}

class Previewer extends React.Component {

  render() {
    return (
      <div className="card w-75 mt-5">
        <div className="card-header d-flex justify-content-between align-items-center">
          Previewer<i className="fas fa-expand-arrows-alt"></i>
        </div>
        <object id="preview" type="type/html" className="card-body"></object>
      </div >
    );
  }
}

// Rend Application in html
ReactDOM.render(<App />, document.querySelector("#root"));
