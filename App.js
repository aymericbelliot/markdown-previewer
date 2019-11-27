const defaultInput = "\
# Bienvenue dans mon interpréteur Markdown\n\
___\n\
## Voici un titre...\n\
### ...Et un sous-titre par exemple\n\
___\n\
Voici un exemple de code `<div></div>` entre 2 apostrophes.\n\
```\n\
// Et un exemple de block de code\n\n\
<div>\n\
  <p>Hello World</p>\n\
</div>\n\
```\n\n\
Vous pouvez mettre du texte en **gras**, en _italic_ ou les **_deux_**\n\n\
Vous pouvez aussi [insérer un lien](#)\n\
> ou une citation\n\
Voici un\n\
- exemple\n\
- de\n\
- liste\n\n\
![React Logo w/ Text](https://goo.gl/Umyytc)\
";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: defaultInput,
      output: marked(defaultInput).replace(RegExp(/\n/g), '<br>')
    }
  }

  changeInput(event) {
    this.setState({
      input: event.target.value,
      output: marked(event.target.value).replace('\n', '<br>')
    });
    console.log(this.state.output);
  }

  render() {
    return (
      <div className="App container-fluid bg-light">
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
      <div className="card w-50 mt-5 shadow bg-primary text-white">
        <div className="card-header d-flex justify-content-between align-items-center shadow">
          Editor<i className="fas fa-expand-arrows-alt"></i>
        </div>
        <textarea id="editor" className="card-body" rows="10" onChange={this.handleChange.bind(this)} defaultValue={this.props.input}></textarea>
      </div>
    );
  }
}

class Previewer extends React.Component {
  render() {
    return (
      <div className="card w-75 mt-5 mb-5 shadow bg-success text-white">
        <div className="card-header d-flex justify-content-between align-items-center shadow">
          Previewer<i className="fas fa-expand-arrows-alt"></i>
        </div>
        <div id="preview" className="card-body bg-white text-dark" dangerouslySetInnerHTML={{ __html: this.props.output }} />
      </div >
    );
  }
}

// Render Application in html page
ReactDOM.render(<App />, document.querySelector("#root"));
