// src/components/Common/ProjectCard.jsx
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  // Create slug from name
  const slug = project.name
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

  return (
    <div className="card group hover:shadow-lg transition-shadow duration-300">
      <Link to={`/du-an/${project.id}-${slug}`} className="block">
        <div className="relative">
          <img
            src={
              project.image ||
              `/api/placeholder/400/250?text=${encodeURIComponent(
                project.name
              )}`
            }
            alt={project.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white text-xs font-medium px-2 py-1 rounded-sm">
            {project.type}
          </div>
        </div>

        <div className="p-3">
          <h3 className="text-base font-medium mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {project.name}
          </h3>

          <p className="text-sm text-text-secondary mb-2 line-clamp-1">
            {project.location}
          </p>

          <div className="text-sm mb-1">
            <span className="text-text-secondary">Chủ đầu tư: </span>
            <span className="text-text-primary">{project.developer}</span>
          </div>

          <div className="text-sm mb-1">
            <span className="text-text-secondary">Giá: </span>
            <span className="text-primary font-medium">{project.price}</span>
          </div>

          <div className="text-sm mb-1">
            <span className="text-text-secondary">Trạng thái: </span>
            <span className="text-success">{project.status}</span>
          </div>

          <div className="text-sm">
            <span className="text-text-secondary">Bàn giao: </span>
            <span className="text-text-primary">{project.handoverDate}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
