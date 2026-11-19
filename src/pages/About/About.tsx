
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import styles from './About.module.css';

const About = () => {
  const skills = [
    {
      category: 'Développement web & programmation',
      items: [
        'Java', 'Python', 'C', 'JavaScript',
        'HTML5', 'CSS3', 'React',
        'Node.js',  'PHP', 'Flask', 'FastAPI'
      ]
    },
    {
      category: 'Intelligence artificielle',
      items: [
        'Machine Learning', 'Deep Learning', 'NLP', "Transformers",
        'DistilBERT', 'Sentence-BERT',
        'Scikit-learn', 'Pandas', 'NumPy',
        , 'LLM'
      ]
    },
    {
      category: 'Bases de données SQL & NoSQL',
      items: [
        'MySQL (SQL)', 'Oracle (PL/SQL)', 'SQL Server',
        'Microsoft Access', 'JDBC','MongoDB (NoSQL)'
      ]
    },
    {
      category: 'Cybersécurité',
      items: [
        'JWT', 'RBAC', 'PBKDF2',
        'HTTPS / TLS', 'SAST', 'DAST',
        'Snyk', 'OWASP ZAP',
        'Scapy', 'Nmap'
      ]
    },
    {
      category: 'Outils & Environnements',
      items: [
        'Git', 'GitHub', 'VS Code',
        'Docker', 'CI/CD', 'Linux Ubuntu',
        'Cisco Packet Tracer',
        'Virtualisation', 'Cloud Computing',
        'Microsoft Office'
      ]
    }
  ];

  const experience = [
    {
      year: '2026',
      title: 'Stage PFA – ALTEN Maroc, Fès',
      description:
        'Participation à la sécurisation de l’application SPARKS basée sur une architecture trois tiers (.NET Core, Angular et SQL Server). Mise en œuvre de JWT, RBAC, PBKDF2, HTTPS/TLS et participation aux audits SAST et DAST avec Snyk et OWASP ZAP.'
    },
    {
      year: 'Août 2025',
      title: 'Stage en cybersécurité – STARSYS',
      description:
        'Participation au développement d’un système de détection d’intrusion (IDS) utilisant Python, Scapy et le Machine Learning. Analyse du trafic réseau et visualisation des alertes sur un dashboard web.'
    },
    {
      year: 'Juillet 2025',
      title: 'Stage IA – SmartiaDev, Montréal (à distance)',
      description:
        'Développement d’une application web de prédiction du diabète intégrant un modèle de Machine Learning via une API Flask. Prétraitement et analyse d’un dataset médical d’environ 100 000 enregistrements.'
    },
    {
      year: 'Juillet - Août 2024',
      title: 'Stage – Société Orbite',
      description:
        'Gestion des stocks et des factures avec Microsoft Access. Création et exécution de requêtes pour l’extraction et l’analyse des données.'
    },
    {
      year: 'Février 2025',
      title: 'Certification Network Technician – Cisco Networking Academy',
      description:
        'Formation sur les fondamentaux des réseaux informatiques et des protocoles.'
    },
    {
      year: '2026 - 2027',
      title: '5ème année Cycle Ingénieur – ENSA Fès',
      description:
        'Filière Informatique, Intelligence Artificielle et Confiance Numérique.'
    },
    {
      year: '2022 - 2024',
      title: 'Classes Préparatoires Intégrées – ENSA Fès',
      description:
        'Formation en mathématiques, physique et informatique.'
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
            Élève ingénieure en Informatique, Intelligence
            Artificielle et Confiance Numérique, passionnée
            par le développement et l'innovation technologique.
          </p>
        </div>
      </section>

      {/* Présentation */}
      <section className={styles.introduction}>
        <div className={styles.container}>
          <div className={styles.introContent}>

            <div className={styles.photoContainer}>
              <div className={styles.photoFrame}>
                <img
                  src="/assets/profile-photo.webp"
                  alt="Zineb Chaqchaq"
                  className={styles.photo}
                />
              </div>
            </div>

            <div className={styles.bioContent}>
              <h2 className={styles.sectionTitle}>Qui suis-je ?</h2>

              <div className={styles.bioText}>
                <p>
                  Bonjour ! Je suis Zineb Chaqchaq, étudiante en
                  <strong> 5ème année du cycle ingénieur </strong>
                  à l'ENSA Fès, en filière
                  <strong> Informatique, Intelligence Artificielle
                  et Confiance Numérique (3IACN)</strong>.
                </p>

                <p>
                  Au cours de ma formation et de mes expériences,
                  j'ai développé des compétences en
                  <strong> développement web et mobile,
                  intelligence artificielle, traitement des données
                  et cybersécurité</strong>.
                </p>

                <p>
                  J'ai notamment travaillé sur des applications
                  web intégrant des modèles de Machine Learning,
                  des systèmes de détection d'intrusion et la
                  sécurisation d'applications Full Stack.
                </p>

                <p>
                  Ma force repose sur ma
                  <strong> capacité d'adaptation, mon autonomie
                  et ma volonté d'apprentissage continu</strong>.
                  J'aime découvrir de nouvelles technologies
                  et transformer des problématiques concrètes
                  en solutions techniques.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className={styles.skills}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Mes Compétences
          </h2>

          <p className={styles.sectionSubtitle}>
            Technologies, frameworks et outils utilisés
            dans mes projets et expériences.
          </p>

          <div className={styles.skillsGrid}>
            {skills.map((skillCategory, index) => (
              <div key={index} className={styles.skillCard}>
                <h3 className={styles.skillCategory}>
                  {skillCategory.category}
                </h3>

                <div className={styles.skillItems}>
                  {skillCategory.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className={styles.skillItem}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section className={styles.experience}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Mon Parcours</h2>

          <p className={styles.sectionSubtitle}>
            Expériences professionnelles, certifications
            et formation.
          </p>

          <div className={styles.timeline}>
            {experience.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineMarker}></div>

                <div className={styles.timelineContent}>
                  <span className={styles.timelineYear}>
                    {item.year}
                  </span>

                  <h3 className={styles.timelineTitle}>
                    {item.title}
                  </h3>

                  <p className={styles.timelineDescription}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className={styles.values}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Mes Valeurs</h2>

          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>💡</div>
              <h3 className={styles.valueTitle}>Innovation</h3>
              <p className={styles.valueDescription}>
                Intégration de l'intelligence artificielle dans
                des solutions concrètes.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🎯</div>
              <h3 className={styles.valueTitle}>Qualité</h3>
              <p className={styles.valueDescription}>
                Développement de solutions structurées,
                fiables et performantes.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3 className={styles.valueTitle}>Collaboration</h3>
              <p className={styles.valueDescription}>
                Travail en équipe et capacité d'adaptation.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>📚</div>
              <h3 className={styles.valueTitle}>Apprentissage</h3>
              <p className={styles.valueDescription}>
                Curiosité technologique et apprentissage continu.
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
