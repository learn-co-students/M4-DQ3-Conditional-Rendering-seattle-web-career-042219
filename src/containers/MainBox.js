import React from "react";
import MenuBar from "../components/MenuBar.js";
import { Profile, Photos, Cocktails, Pokemon } from "../components/Pages.js";

class MainBox extends React.Component {
  state = {
    selected: "profile"
  };

  handleOnClick = e => {
    this.setState({ selected: e });
  };

  render() {
    let details;
    switch (this.state.selected) {
      case "profile":
        details = <Profile />;
        break;
      case "photo":
        details = <Photos />;
        break;
      case "cocktail":
        details = <Cocktails />;
        break;
      case "pokemon":
        details = <Pokemon />;
        break;
      default:
        details = null;
        break;
    }

    return (
      <div>
        <MenuBar
          handleOnClick={this.handleOnClick}
          selected={this.state.selected}
        />
        {details}
      </div>
    );
  }
}

export default MainBox;
