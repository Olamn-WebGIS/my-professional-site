import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-6 mt-10 border-t border-gray-200">
      <div className="text-center text-sm text-gray-600">
        <p>© 2026 My Professional Site</p>
        <div className="mt-2 space-x-4">
          <Link to="/privacy" className="hover:text-blue-600 hover:underline">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-blue-600 hover:underline">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}