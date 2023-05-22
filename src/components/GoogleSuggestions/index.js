import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchElement: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchElement: event.target.value,
    })
  }

  selectedSuggestion = suggestion => {
    this.setState({
      searchElement: suggestion,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchElement} = this.state
    const temList = suggestionsList.filter(eachItem => {
      const searchVar = searchElement.toLowerCase()
      const temName = eachItem.name.toLowerCase()
      return temName.includes(searchVar)
    })

    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              onChange={this.onChangeSearchInput}
              value={searchElement}
            />
            <ul>
              {temList.map(eachItem => (
                <SuggestionItem
                  selectedSuggestion={this.selectedSuggestion}
                  key={eachItem.id}
                  suggItem={eachItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default SuggestionItem
