class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="App container-fluid">
        <Editor/>
        <Previewer/>
      </div>
    );
  }
}

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="card w-50 mt-5">
        <div className="card-header d-flex justify-content-between align-items-center">
          Editor<i className="fas fa-expand-arrows-alt"></i>
        </div>
        <textarea id="editor" className="card-body" defaultValue="hello"></textarea>
      </div>
    );
  }
}

class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="card w-75 mt-5">
        <div className="card-header d-flex justify-content-between align-items-center">
          Previewer<i className="fas fa-expand-arrows-alt"></i>
        </div>
        <input id="preview" type="text" className="card-body" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
