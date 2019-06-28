import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor() {
    super()
    this.state = {
      selected: "profile"
    }
  }
 


  changeDisplay = (value) => {
    this.setState({
      selected: value
    })
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    let selectedDisplay = this.state.selected
    let detailsToDisplay;

    
    if (selectedDisplay === "profile") {
       detailsToDisplay =  <Profile/>
    } else if (selectedDisplay === "photo") {
      detailsToDisplay = <Photos/>
    } else if (selectedDisplay === "cocktail") {
      detailsToDisplay = <Cocktails/>
    } else if (selectedDisplay === "pokemon") {
      detailsToDisplay = <Pokemon/>
    }
  

    return (
      <div>
        <MenuBar onChangeDisplay={this.changeDisplay} selected={this.state.selected}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
