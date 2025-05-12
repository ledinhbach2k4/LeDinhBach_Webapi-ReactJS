import { useState } from 'react';
import { Save, X } from 'lucide-react';

function EditTodo({ todo, onEdit, onCancel }) {
  const [title, setTitle] = useState(todo.title);

  const handleEdit = () => {
    if (title.trim() !== '') {
      onEdit(todo.id, title);
    }
  };

  return (
    <div className="edit-todo">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Chỉnh sửa công việc..."
        className="edit-todo-input"
      />
      <button
        onClick={handleEdit}
        className="edit-todo-btn save"
      >
        <Save size={20} />
        Lưu
      </button>
      <button
        onClick={onCancel}
        className="edit-todo-btn cancel"
      >
        <X size={20} />
        Hủy
      </button>
    </div>
  );
}

export default EditTodo;