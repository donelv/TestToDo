import style from './ToDoList.module.css'
import ToDoCard from '../ToDoCard/ToDoCard'
const ToDoList = (props) => {
  return (
    <ul className={style.list__ul}>
      {props.toDoList.filter(props.filterMap[props.filter]).map((toDo) => (
        <li key={toDo.id} style={{ listStyleType: 'none' }} data-testid="note">
          <ToDoCard
            id={toDo.id}
            name={toDo.name}
            date={toDo.date}
            done={toDo.done}
            deleteNote={props.deleteNote}
            toggleNoteDone={props.toggleNoteDone}
          />
        </li>
      ))}
    </ul>
  )
}
export default ToDoList
