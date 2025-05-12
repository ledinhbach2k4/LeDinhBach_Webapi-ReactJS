import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-gray-100">
      {/* Main Content */}
      <br />
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="todo-container text-center">
        <img 
              src="https://media1.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif?cid=6c09b952afj14u25dwfz4vyhs66cu1dl0cepon6q8rqhzt4s&ep=v1_gifs_search&rid=giphy.gif&ct=g" 
              alt="Your Company Logo" 
              className="error-img"
              onError={(e) => (e.target.src = 'https://via.placeholder.com/150x50')}
            />
        </div>
      </main>
      <br />
    </div>
  );
}

export default About;