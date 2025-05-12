import TodoList from '../components/TodoList';

function Home() {
  return (
    <div className="home-container min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 flex flex-col items-center py-12 px-4">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-12 tracking-tight">
        Quản lý công việc
      </h1>
      <TodoList />
    </div>
  );
}

export default Home;