// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodoItem} = props
  const {title, id} = todoDetails
  const deleteItem = () => {
    deleteTodoItem(id)
  }
  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={deleteItem}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
