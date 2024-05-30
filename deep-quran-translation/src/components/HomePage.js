// HomePage.js
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Quran Deep Translation</h1>
      <div>
        <Link to="/english">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
            English
          </button>
        </Link>
        <Link to="/bengali">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2">
            Bengali

          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
