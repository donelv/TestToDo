import './FilterButtons.css'
const FilterButton = (props) => {
  return (
    <div className="navbar">
      {props.filterName.map((btn_name, index) => {
        const btnClasses =
          'navbar__filter-btn' +
          (btn_name === props.filter ? ' navbar__filter-btn_active' : ' ')

        return (
          <button
            key={`btn-${index}`}
            onClick={() => props.setFilter(btn_name)}
            className={btnClasses}
          >
            {btn_name}
          </button>
        )
      })}
    </div>
  )
}
export default FilterButton
