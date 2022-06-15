import { useState } from 'react'
import './App.css'
import { nanoid } from 'nanoid'
import InputForm from './InputForm/InputForm'
import FilterButton from './FilterButtons/FilterButtons'
import ToDoList from './ToDoList/ToDoList'
const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.done,
  Completed: (task) => task.done,
}
const FILTER_NAME = Object.keys(FILTER_MAP)
const templateToDo = [
  { id: 'id-1', name: 'Сделать ToDo', done: true },
  { id: 'id-2', name: 'Написать тесты', done: false },
  { id: 'id-3', name: 'Отправить резюме', done: false },
]
function App() {
  let [inpValue, setInpValue] = useState('')
  let [toDoList, setToDoList] = useState(templateToDo)
  let [filter, setFilter] = useState('All')
  const handleChange = (el) => {
    setInpValue(el.target.value)
  }
  const addNote = () => {
    if (!!inpValue) {
      const newTask = { id: 'id-' + nanoid(), name: inpValue, done: false }
      setToDoList([...toDoList, newTask])
      setInpValue('')
    } else {
      alert('Поле не заполнено')
    }
  }
  const deleteNote = (id) => {
    setToDoList(toDoList.filter((note) => id !== note.id))
  }
  const toggleNoteDone = (id) => {
    const updatedNotes = toDoList.map((note) => {
      if (note.id === id) {
        return { ...note, done: !note.done }
      }
      return note
    })
    setToDoList(updatedNotes)
  }

  return (
    <div className="App">
      <h1>ToDo for mindbox</h1>
      <div className="list">
        <InputForm
          inpValue={inpValue}
          handleChange={handleChange}
          addNote={addNote}
        />
        <FilterButton
          filterName={FILTER_NAME}
          filter={filter}
          setFilter={setFilter}
        />
        <ToDoList
          toDoList={toDoList}
          filterMap={FILTER_MAP}
          filter={filter}
          deleteNote={deleteNote}
          toggleNoteDone={toggleNoteDone}
        />
      </div>
    </div>
  )
}

export default App
