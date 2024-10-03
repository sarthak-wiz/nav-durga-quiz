import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="bg-transparent absolute mt-4 w-full p-4 flex flex-row justify-around flex-1">
        {/* Logo/Home Button */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-orange-600 hover:text-orange-800 transition-colors mr-20"
        >
          <span className="text-4xl font-bold sanskrit-text">ॐ</span>
        </button>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          {location.pathname !== '/' && (
            <button
              onClick={() => navigate('/')}
              className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors"
            >
              Home
            </button>
          )}
        </div>
    </nav>
  );
}
