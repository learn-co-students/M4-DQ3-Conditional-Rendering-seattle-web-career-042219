import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component { 

  state = {
    active: 'profile'
  }
  
  onChangeDetails = active => {
    this.setState({active: active})
  }

  renderDetails = active => {
    switch (active) {
      case 'profile':
        return <Profile />
      case 'photo':
        return <Photos />
      case 'cocktail':
        return <Cocktails />
      case 'pokemon':
        return <Pokemon />
      default:
        console.log(active, "Oops, how did you do that?")
        break;
    }
  }

  render() {
    return (
      <div>
        <MenuBar changeDetails={this.onChangeDetails} active={this.state.active} />
        {this.renderDetails(this.state.active)}
      </div>
    )
  }

}

export default MainBox
