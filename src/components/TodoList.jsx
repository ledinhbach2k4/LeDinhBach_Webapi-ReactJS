import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  const addTodo = (title) => {
    const newTodo = { title, completed: false };
    fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(data => {
        setTodos([...todos, data]);
        toast.success('Đã thêm công việc!', { autoClose: 2000 });
      });
  };

  const toggleTodo = (id) => {
    const todo = todos.find(t => t.id === id);
    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !todo.completed })
    })
      .then(() =>
        setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
      );
  };

  const deleteTodo = (id) => {
    fetch(`http://localhost:3001/todos/${id}`, { method: 'DELETE' })
      .then(() => {
        setTodos(todos.filter(t => t.id !== id));
        toast.error('Đã xóa công việc!', { autoClose: 2000 });
      });
  };

  const startEditing = (todo) => {
    setEditingTodo(todo);
  };

  const editTodo = (id, newTitle) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTitle })
    })
      .then(() => {
        setTodos(todos.map(t => t.id === id ? { ...t, title: newTitle } : t));
        setEditingTodo(null);
        toast.success('Đã cập nhật công việc!', { autoClose: 2000 });
      });
  };

  const cancelEditing = () => {
    setEditingTodo(null);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="todo-container">
      <h2 className="todo-heading">Danh sách công việc</h2>
      <AddTodo onAdd={addTodo} />
      <div className="todo-filter">
        <button
          onClick={() => setFilter('all')}
          className={`todo-filter-btn ${filter === 'all' ? 'active' : ''}`}
        >
          Tất cả
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`todo-filter-btn ${filter === 'active' ? 'active' : ''}`}
        >
          Chưa hoàn thành
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`todo-filter-btn ${filter === 'completed' ? 'active' : ''}`}
        >
          Đã hoàn thành
        </button>
      </div>
      {editingTodo && (
        <EditTodo
          todo={editingTodo}
          onEdit={editTodo}
          onCancel={cancelEditing}
        />
      )}
      <div className="todo-list custom-scrollbar">
        {filteredTodos.length === 0 ? (
          <p className="todo-empty">Chưa có công việc nào, hãy thêm ngay!</p>
        ) : (
          filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={() => startEditing(todo)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TodoList;