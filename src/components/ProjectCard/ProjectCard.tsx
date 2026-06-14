import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink?: string;
}

const ProjectCard = ({
  id,
  title,
  description,
  technologies,
  image,
  githubLink,
}: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.overlay}>
          <div className={styles.links}>
            <Link to={`/Projets/${id}`} className={styles.linkButton}>
              Voir les details
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.technologies}>
          {technologies.slice(0, 4).map((tech, index) => (
            <span key={index} className={styles.tech}>
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className={styles.techMore}>+{technologies.length - 4}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;