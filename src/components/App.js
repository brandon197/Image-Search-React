import react from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends react.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    //arg1) address we want to make a get request to
    //arg2) object with options to customize request
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    //by doing console.log(this) this -> props object in SearchBar
    //from searchbar js  this.props.sendTerm(this.state.term);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar sendTerm={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
