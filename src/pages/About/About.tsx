import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import styles from './About.module.css';

const About = () => {
  const skills = [
    { category: 'Développement', items: ['Java', 'Python', 'C', 'JavaScript', 'HTML/CSS', 'PHP', 'React'] },
    { category: 'Intelligence artificielle', items: ['Machine learning', 'Flask API', 'Analyse de données', 'Modèles prédictifs'] },
    { category: 'Base de données', items: ['MySQL', 'Oracle', 'Microsoft Access', 'SQL' , 'JDBC'] },
    { category: 'Réseaux & Systèmes', items: ['Cisco Packet Tracer', 'Linux Ubuntu', 'Configuration réseau ', 'sécurité'] },
    { category: 'Outils', items: ['Microsoft Office', 'Cloud Computing', ' Virtualisation '] },
  ];

  const experience = [
    {
      year: '2026 - Présent',
      title: 'création d un site ',
      description: 'Création d\'applications web modernes et performantes pour divers clients.'
    },
    {
      year: 'Juillet-2025',
      title: 'Stage Développement IA – SmartiaDev, Montréal (à distance)',
      description: "Développement d'une application web multilingue de prédiction du diabète avec ML.Analyse de 100 000 enregistrements médicaux, création d'une API Flask et interface web complète (97% de précision)."
    },
    {
      year: 'Juillet-2024',
      title: 'Stage Gestion de Bases de Données – Société Orbite',
      description: "Gestion de stocks et factures avec Microsoft Access. Création et exécution de requêtes pour l'extraction et l'analyse de données."
    },
    {
      year: '2025 (en cours)',
      title: '4ème année Cycle Ingénieur – ENSA Fès',
      description: "Spécialisation en Intelligence Artificielle et Confiance Numérique"
    },
    {
      year: 'Février-2025',
      title: 'Certification Network Technician – Cisco Networking Academy',
      description: "Certification sur les fondamentaux des réseaux et protocoles"
    },
    {
      year: '2022 - 2024',
      title: 'Classes Préparatoires Intégrées – ENSA Fès',
      description: "Formation intensive en mathématiques, physique et informatique"
    }
  ];

  return (
    <div className={styles.aboutPage}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>À propos de moi</h1>
          <p className={styles.heroSubtitle}>
           Étudiante ingénieure en Intelligence Artificielle passionnée par le développement 
            web et l'innovation technologique
           </p>
        </div>
      </section>

      {/* Section Présentation */}
      <section className={styles.introduction}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            {/* Photo */}
            <div className={styles.photoContainer}>
              <div className={styles.photoFrame}>
                <img 
                  src="/assets/profile-photo.jpg" 
                  alt="Zineb Chaqchaq" 
                  className={styles.photo}
                />
              </div>
            </div>

            {/* Texte de présentation */}
            <div className={styles.bioContent}>
              <h2 className={styles.sectionTitle}>Qui suis-je ?</h2>
              <div className={styles.bioText}>
                 <p>
                  Bonjour ! Je suis Zineb Chaqchaq, étudiante en <strong>4ème année ingénieur</strong> à l'ENSA Fès, 
                  avec une spécialisation en <strong>Intelligence Artificielle</strong>.
                </p>
                <p>
                  Ma force ? Une <strong>grande capacité d'adaptation</strong> et une <strong>autonomie reconnue</strong>. 
                  Lorsque je suis confrontée à une nouvelle technologie ou un défi technique complexe, je 
                  développe rapidement les compétences nécessaires grâce à une <strong>méthodologie rigoureuse</strong> et 
                  une <strong>auto-formation structurée</strong>.
                </p>
                <p>
                  Mon approche repose sur trois piliers : la <strong>rigueur professionnelle</strong>, 
                  l'<strong>apprentissage continu</strong>, et l'<strong>orientation résultats</strong>. 
                  Que ce soit en <strong>développement web</strong>, <strong>Machine Learning</strong> ou 
                  <strong>administration système</strong>, je m'engage pleinement dans chaque mission avec 
                  <strong>sérieux et détermination</strong>.
                </p>
                <p>
                  <strong>Polyvalente</strong>, <strong>organisée</strong> et <strong>persévérante</strong>, 
                  je ne recule jamais devant un obstacle technique. Chaque nouveau défi est une opportunité 
                  de prouver ma capacité à <strong>transformer l'inconnu en expertise</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section className={styles.skills}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Mes Compétences</h2>
          <p className={styles.sectionSubtitle}>
            Technologies et outils que je maîtrise
          </p>

          <div className={styles.skillsGrid}>
            {skills.map((skillCategory, index) => (
              <div key={index} className={styles.skillCard}>
                <h3 className={styles.skillCategory}>{skillCategory.category}</h3>
                <div className={styles.skillItems}>
                  {skillCategory.items.map((item, itemIndex) => (
                    <span key={itemIndex} className={styles.skillItem}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Parcours */}
      <section className={styles.experience}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Mon Parcours</h2>
          <p className={styles.sectionSubtitle}>
            Expérience professionnelle et formation
          </p>

          <div className={styles.timeline}>
            {experience.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineMarker}></div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineYear}>{item.year}</span>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className={styles.values}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Mes Valeurs</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>💡</div>
              <h3 className={styles.valueTitle}>Innovation</h3>
              <p className={styles.valueDescription}>
                Intégration de l'IA et du ML dans des solutions web concrètes
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🎯</div>
              <h3 className={styles.valueTitle}>Qualité</h3>
              <p className={styles.valueDescription}>
                Code propre bien structuré, performant et respectant les meilleures pratiques
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3 className={styles.valueTitle}>Collaboration</h3>
              <p className={styles.valueDescription}>
                Travail en équipe et capacité d'adaptation en environnement international
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>📚</div>
              <h3 className={styles.valueTitle}>Apprentissage</h3>
              <p className={styles.valueDescription}>
                Apprentissage continu et curiosité technologique permanente
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;