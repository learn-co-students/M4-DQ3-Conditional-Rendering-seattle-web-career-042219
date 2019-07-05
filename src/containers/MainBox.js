import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor() {
    super()
    this.state = {
      selected: 'profile'
    }
  }

  handleMenuChange = event => {
    let selection = event.target.id
    this.setState({
      selected: selection
    })
  }

  renderState = () => {
    if (this.state.selected === 'photo') {
      return <Photos />
    } else if (this.state.selected === 'cocktail') {
      return <Cocktails />
    } else if (this.state.selected === 'pokemon') {
      return <Pokemon />
    } else {
      return <Profile />
    }
  }


  render() {

    return (
      <div>
        <MenuBar onMenuChange={this.handleMenuChange}/>
        {this.renderState()}
      </div>
    )
  }

}

export default MainBox
