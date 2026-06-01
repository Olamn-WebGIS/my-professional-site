import { Link } from 'react-router-dom';

export default function ProjectCard({ id, title, description }: { id: string, title: string, description: string }) {
  return (
    <div className="border rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={`/project-details/${id}`} className="text-blue-600 font-semibold hover:underline">
        View Details →
      </Link>
    </div>
  );
}