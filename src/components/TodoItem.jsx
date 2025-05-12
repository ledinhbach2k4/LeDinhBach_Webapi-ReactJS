import { Trash2, Edit2 } from 'lucide-react';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  return (
    <div className="todo-item">
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="todo-checkbox"
        />
        <span
          className={`todo-title ${todo.completed ? 'completed' : ''}`}
        >
          {todo.title}
        </span>
      </div>
      <div className="todo-actions">
        <button
          onClick={onEdit}
          className="todo-btn edit"
        >
          <Edit2 size={18} />
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="todo-btn delete"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;