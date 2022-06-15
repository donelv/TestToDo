import style from './ToDoCard.module.css'
import classNames from 'classnames'
const ToDoCard = ({ id, name, done = false, toggleNoteDone, deleteNote }) => {
  let cnName = classNames(style.task__name, {
    [style.task__name_lt]: done,
  })
  return (
    <div className={style.task}>
      <input
        type="checkbox"
        defaultChecked={done}
        onChange={() => toggleNoteDone(id)}
        className={style.task__checkbox}
      />
      <p className={cnName}>{name}</p>
      <button onClick={() => deleteNote(id)} className={style.task__btn}>
        X
      </button>
    </div>
  )
}
export default ToDoCard
