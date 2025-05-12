import { useState } from 'react';
import { Plus } from 'lucide-react';

function AddTodo({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (title.trim() !== '') {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <div className="add-todo flex gap-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nhập công việc mới..."
        className="flex-1 px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-700"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 transition-all"
      >
        <Plus size={20} />
        Thêm
      </button>
    </div>
  );
}

export default AddTodo;