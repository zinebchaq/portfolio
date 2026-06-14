import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import styles from './Contact.module.css';
import linkedinIcon from '../../assets/icons/linkedin.png';
import githubIcon from '../../assets/icons/github.png';
import emailIcon from '../../assets/icons/mail.png';
import locationIcon from '../../assets/icons/location.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: '' });

    try {
      // Remplacez ces valeurs par vos vraies clés EmailJS depuis .env
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );
console.log(serviceId, templateId, publicKey);
      setStatus({
        type: 'success',
        message: 'Message envoyé avec succès ! Je vous répondrai bientôt.'
      });

      // Réinitialiser le formulaire
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: '/assets/icons/mail.png',
      label: 'Email',
      value: 'zinebchakchak75@gmail.com',
      link: 'mailto:zinebchakchak75@gmail.com'
    },
    {
      icon: '/assets/icons/linkedin.png',
      label: 'LinkedIn',
      value: 'lien de mon profil',
      link: 'https://www.linkedin.com/in/zineb-chaqchaq-a7721434b'
    },
    {
      icon: '/assets/icons/github.png',
      label: 'GitHub',
      value: '@zinebchaq',
      link: 'https://github.com/zinebchaq'
    },
    {
      icon: '/assets/icons/location.png',
      label: 'Localisation',
      value: 'Fès, Maroc',
      link: null
    }
  ];

  return (
    <div className={styles.contactPage}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Contactez-moi</h1>
          <p className={styles.heroSubtitle}>
            Une question ? Un projet ? N'hésitez pas à me contacter !
          </p>
        </div>
      </section>

      {/* Section Contact */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Formulaire */}
            <div className={styles.formContainer}>
              <h2 className={styles.formTitle}>Envoyez-moi un message</h2>
              <p className={styles.formSubtitle}>
                Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.
              </p>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Votre nom"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="votre.email@example.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={styles.textarea}
                    placeholder="Votre message..."
                    rows={6}
                  />
                </div>

                {/* Messages de statut */}
                {status.type && (
                  <div className={`${styles.statusMessage} ${styles[status.type]}`}>
                    {status.message}
                  </div>
                )}

                <Button 
                  type="submit" 
                  variant="primary" 
                  size="large" 
                  fullWidth
                  disabled={isLoading}
                >
                  {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
                </Button>
              </form>
            </div>

            {/* Informations de contact */}
            <div className={styles.infoContainer}>
              <h2 className={styles.infoTitle}>Informations de contact</h2>
              <p className={styles.infoSubtitle}>
                Vous pouvez également me contacter directement via ces canaux.
              </p>

              <div className={styles.contactInfoList}>
                {contactInfo.map((info, index) => (
                  <div key={index} className={styles.contactInfoItem}>
                    <div className={styles.contactIcon}>
                      <img
                        src={info.icon}
                        alt={info.label}
                        className={styles.iconImage}
                      />
                    </div>

                    <div className={styles.contactDetails}>
                      <span className={styles.contactLabel}>{info.label}</span>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={styles.contactValue}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className={styles.contactValue}>{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Disponibilité */}
              <div className={styles.availability}>
                <h3 className={styles.availabilityTitle}>Disponibilité</h3>
                <p className={styles.availabilityText}>
                  Je suis actuellement <strong>disponible</strong> pour de nouveaux projets
                  et collaborations. Je réponds généralement dans les 24 heures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;