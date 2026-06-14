import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './Home.module.css';

// IMPORTATION DES DONNÉES DEPUIS portfolioData.ts
// Le chemin remonte de pages/Home vers pages/Portfolio/portfolioData
import { allProjects } from '../Portfolio/portfolioData';

const Home = () => {
  // Sélection des 3 projets les plus percutants et essentiels pour votre CV (IDs: 7, 1 et 6)
  const featuredIds = [7, 1, 6];
  const featuredProjects = allProjects.filter(project => featuredIds.includes(project.id));

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.homePage}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          {/* Contenu texte à gauche */}
          <div className={styles.heroContent}>
            <p className={styles.welcome}>Bienvenue sur mon portfolio !</p>
            <h1 className={styles.heroTitle}>
              Bonjour, je m'appelle <span className={styles.highlight}>Zineb Chaqchaq</span>.
            </h1>
            <p className={styles.heroSubtitle}>
              Étudiante ingénieure en 4ème année à l'ENSA Fès, spécialisée en Intelligence 
              Artificielle et Confiance Numérique. Passionnée par le développement d'applications 
              web innovantes et l'intégration de solutions Machine Learning. Je conçois des 
              expériences numériques performantes alliant technologie et créativité.
            </p>
            
            <div className={styles.heroButtons}>
              <Link to="/Projets">
                <Button variant="primary" size="large">
                  Voir mes projets →
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="large">
                  Me contacter
                </Button>
              </Link>
            </div>

            {/* Scroll indicator */}
            <button className={styles.scrollDown} onClick={scrollDown}>
              <div className={styles.mouse}>
                <span className={styles.wheel}></span>
              </div>
              <span className={styles.scrollText}>Scroll down</span>
            </button>

          </div>

          {/* Image/Photo à droite */}
          <div className={styles.heroImage}>
            <div className={styles.imageFrame}>
              <img 
                src="/assets/profile-photo.jpg" 
                alt="Zineb Chaqchaq" 
                className={styles.profilePhoto}
              />
              {/* Formes décoratives */}
              <div className={styles.shape1}></div>
              <div className={styles.shape2}></div>
              <div className={styles.shape3}></div>
            </div>

            {/* Liens sociaux flottants */}
            <div className={styles.socialFloat}>
              <a 
                href="https://www.linkedin.com/in/zineb-chaqchaq-a7721434b" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="LinkedIn"
              >
                <img
                  src="/assets/icons/linkedin.png"
                  alt="linkedin"
                  className={styles.Icon}
                />
              </a>
              <a 
                href="https://github.com/zinebchaq" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="GitHub"
              >
                <img
                  src="/assets/icons/github.png"
                  alt="github"
                  className={styles.Icon}
                />
              </a>
              <a 
                href="mailto:zinebchakchak75@gmail.com"
                className={styles.socialIcon}
                aria-label="Email"
              >
                <img
                  src="/assets/icons/mail.png"
                  alt="mail"
                  className={styles.Icon}
                />
              </a>
            </div>

            {/* Texte "FOLLOW ME" vertical */}
            <div className={styles.followMe}>FOLLOW ME  ➔</div>
          </div>
        </div>
      </section>

      {/* Section Projets mis en avant */}
      <section className={styles.projects}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Projets en vedette</h2>
            <p className={styles.sectionSubtitle}>
              Découvrez une sélection de mes meilleures réalisations académiques et professionnelles
            </p>
          </div>

          <div className={styles.projectsGrid}>
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                image={project.image}
              />
            ))}
          </div>

          <div className={styles.viewAllContainer}>
            <Link to="/Projets">
              <Button variant="secondary" size="large">
                Voir tous les projets
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;