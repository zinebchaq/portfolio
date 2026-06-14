import { Link } from 'react-router-dom';
import styles from './Footer.module.css';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/zineb-chaqchaq-a7721434b',
      icon: '/assets/icons/linkedin.png',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/zinebchaq',
      icon: '/assets/icons/github.png',
    },
    {
      name: 'Email',
      url: 'mailto:zinebchakchak75@gmail.com',
      icon: '/assets/icons/mail.png',
    },
  ];

  const quickLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'Projets', path: '/Projets' },
    { label: 'À propos', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Section principale */}
        <div className={styles.content}>
          {/* Colonne 1: À propos */}
          <div className={styles.column}>
            <h3 className={styles.title}>Zineb Chaqchaq</h3>
            <p className={styles.description}>
              Étudiante ingénieure en IA | Développeuse Full Stack | Passionnée par l'innovation 
              technologique
            </p>
          </div>

          {/* Colonne 2: Liens rapides */}
          <div className={styles.column}>
            <h3 className={styles.title}>Navigation</h3>
            <ul className={styles.links}>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3: Réseaux sociaux */}
          <div className={styles.column}>
            <h3 className={styles.title}>Suivez-moi</h3>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.name}
                  title={social.name}
                >
                  <span className={styles.icon}>
                    <img
                      src={social.icon}
                      className={styles.socialIcon}
                    />
                  </span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Zineb Chaqchaq. Tous droits réservés.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;