
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import styles from './ProjectDetail.module.css';
import { allProjects } from '../portfolioData';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = allProjects.find(p => p.id === Number(projectId));


// TEMPORAIRE - pour déboguer
console.log("projectId reçu:", projectId);
console.log("Type:", typeof projectId);
console.log("Converti en nombre:", Number(projectId));
console.log("Projet trouvé:", project);
console.log("Tous les projets:", allProjects);
  if (!project) {
    return (
      <div>
        <Navbar />
        <div style={{ padding: '100px', textAlign: 'center' }}>
          <h1>Projet non trouvé</h1>
          <button onClick={() => navigate('/Projets')}>
            Retour au projets
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  // Défilement automatique des images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === project.gallery.length - 1 ? 0 : prev + 1
      );
    }, 3000); // Change toutes les 3 secondes

    return () => clearInterval(interval);
  }, [project.gallery.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  };

  return (
    <div className={styles.projectDetailPage}>
      <Navbar />

      {/* Bouton retour en haut à gauche */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <button 
            className={styles.backButton}
            onClick={() => navigate('/Projets')}
          >
            ← Retour au Projets
          </button>
        </div>
      </div>

      {/* Contenu principal */}
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.mainContent}>
            
            {/* GAUCHE : Description + Technologies */}
            <div className={styles.leftColumn}>
              <h1 className={styles.projectTitle}>{project.title}</h1>
              
              <div className={styles.descriptionSection}>
                <h2 className={styles.sectionTitle}>Description</h2>
                <p className={styles.description}>{project.fullDescription}</p>
              </div>

              <div className={styles.techSection}>
                <h2 className={styles.sectionTitle}>Technologies</h2>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* DROITE : Galerie */}
            <div className={styles.rightColumn}>
              <h2 className={styles.sectionTitle}>Galerie</h2>
              
              {/* Image principale avec navigation */}
              <div className={styles.mainImageContainer}>
                <button 
                  className={styles.navButton + ' ' + styles.prev}
                  onClick={prevImage}
                >
                  ‹
                </button>
                
                <img 
                  src={project.gallery[currentImageIndex]} 
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className={styles.mainImage}
                />
                
                <button 
                  className={styles.navButton + ' ' + styles.next}
                  onClick={nextImage}
                >
                  ›
                </button>

                <div className={styles.imageCounter}>
                  {currentImageIndex + 1} / {project.gallery.length}
                </div>
              </div>

              {/* Mini photos en grille */}
              <div className={styles.miniPhotos}>
                {project.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Miniature ${index + 1}`}
                    className={`${styles.miniPhoto} ${
                      index === currentImageIndex ? styles.activeMini : ''
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;