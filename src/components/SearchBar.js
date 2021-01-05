import react from "react";

class SearchBar extends react.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    //calls onSearchSubmit(term) from appjs
    //the props object that was passed to the search bar
    //will be the value of 'this' inside of sendTerm
    this.props.sendTerm(this.state.term);
  };
  //
  //this.onInputchange no brackets for event handler -> callback
  //(e) means event
  //value and onchange make it a controlled element so react itself knows the value of
  //the input

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>image search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
