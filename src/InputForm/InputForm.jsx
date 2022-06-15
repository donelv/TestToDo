import './InputForm.css'
const InputForm = (props) => {
  return (
    <div className="form">
      <input
        value={props.inpValue}
        onChange={props.handleChange}
        className="form__input"
        placeholder="Добавьте новую задачу"
      />
      <button onClick={props.addNote} className="form__add-button">
        ADD
      </button>
    </div>
  )
}
export default InputForm
