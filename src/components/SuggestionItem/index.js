// Write your code here
const SuggestionItem = props => {
  const {suggItem, selectedSuggestion} = props
  const {suggestion} = suggItem
  const selectSugg = () => {
    selectedSuggestion(suggestion)
  }
  return (
    <li>
      <div>
        <p>{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          onClick={selectSugg}
        />
      </div>
    </li>
  )
}
export default SuggestionItem
