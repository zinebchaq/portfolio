export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  gallery: string[];
  githubLink?: string;
  category: string;
}

export const allProjects: Project[] = [
  {
    id: 1,
    title: "Application de Prédiction du Diabète",
    description: "Application web multilingue de prédiction du risque de diabète à l’aide d’algorithmes de Machine Learning. Elle analyse des données médicales et présente les résultats de façon claire. Elle propose aussi la visualisation des résultats, l’export de rapports PDF et des recommandations personnalisées.",
    fullDescription: `Cette application utilise des algorithmes de Machine Learning pour prédire le risque de diabète chez les patients. L'interface est disponible en plusieurs langues et permet aux professionnels de santé d'obtenir des résultats précis en temps réel.

Les fonctionnalités incluent : analyse de données médicales, visualisation des résultats, export de rapports PDF, et système de recommandations personnalisées.`,
    technologies: ["Python","Flask","HTML5","CSS3","JavaScript","PHP","Machine Learning"],
    image: "/assets/projects/diabete/1.webp",
    gallery: [
      "/assets/projects/diabete/1.webp",  // ← Nouvelle photo 1
      "/assets/projects/diabete/2.webp",  // ← Nouvelle photo 2
      "/assets/projects/diabete/3.webp",  // ← Nouvelle photo 3
      "/assets/projects/diabete/4.webp", 
      "/assets/projects/diabete/5.webp" // ← Nouvelle photo 4
    ],
    githubLink: "https://github.com/votreusername/diabetes",
    category: "fullstack, ai, backend"
  },
  {
    id: 2,
    title: "Système de Gestion de Pharmacie",
    description: "Application de gestion de pharmacie développée avec React, Node.js et Oracle. Elle permet de gérer les médicaments, les stocks, les ventes, les fournisseurs et les clients. Des traitements PL/SQL et des triggers automatisent certaines tâches et appliquent des règles métier en base de données.",
    fullDescription: `Application full-stack de gestion de pharmacie développée avec React et TypeScript pour l’interface, Node.js pour la logique serveur et Oracle pour la base de données. Elle centralise la gestion des médicaments, des stocks, des ventes, des fournisseurs et des clients.

La couche base de données s’appuie sur PL/SQL pour automatiser certaines tâches de gestion. Des triggers exécutent des traitements lors d’opérations en base et contribuent à appliquer les règles métier ainsi qu’à maintenir la cohérence des données.`,
    technologies: ["React", "Node.js", "Oracle", "PL/SQL", "TypeScript"],
    image: "/assets/projects/pharmacie/1.webp",
    gallery: [
      "/assets/projects/pharmacie/1.webp",  // ← Nouvelles photos
      "/assets/projects/pharmacie/2.webp",
      "/assets/projects/pharmacie/3.webp",
      "/assets/projects/pharmacie/4.webp",  
      "/assets/projects/pharmacie/5.webp",
      "/assets/projects/pharmacie/6.webp"
    ],
    category: "fullstack, backend"
  },
  {
    id: 3,
    title: "Application de Location de Voitures",
    description: "Application desktop développée en Java Swing pour la gestion d’une agence de location de voitures. Elle regroupe les fonctionnalités de gestion dans une interface dédiée. Les données sont stockées dans MS Access, avec une connexion assurée par JDBC.",
    fullDescription: `Application desktop développée en Java Swing pour la gestion complète d'une agence de location de voitures.`,
    technologies: ["Java","Swing","MS Access","JDBC"],
    image: "/assets/projects/location/1.webp",
    gallery: [
      "/assets/projects/location/1.webp",   // ← Nouvelles photos
      "/assets/projects/location/2.webp",
      "/assets/projects/location/3.webp",   // ← Nouvelles photos
      "/assets/projects/location/4.webp",
      "/assets/projects/location/5.webp",   // ← Nouvelles photos
      "/assets/projects/location/6.webp",
      "/assets/projects/location/7.webp",   // ← Nouvelles photos
      "/assets/projects/location/8.webp",
      "/assets/projects/location/10.webp",
      "/assets/projects/location/11.webp",   // ← Nouvelles photos
      "/assets/projects/location/12.webp",
      "/assets/projects/location/13.webp",   // ← Nouvelles photos
      "/assets/projects/location/14.webp"
    ],
    category: "fullstack, backend"
  },
  
  {
      id: 4,
      title: "Quich'Art — Site Vitrine & Commande",
      description: "Site vitrine et de commande conçu pour Quich’Art, une pâtisserie artisanale de Fès spécialisée dans les tartelettes sucrées et salées. Il présente les produits et les créations dans des galeries interactives, avec filtres par catégorie. Les clients peuvent passer commande ou envoyer une demande personnalisée via WhatsApp.",
      fullDescription: `Site web complet pour Quich'Art, une pâtisserie artisanale basée à Fès.
    Le site inclut une galerie de produits avec filtres dynamiques, un système de commande avec panier, une page de création  présentant les réalisations de Quich'Art en  catégories, chaque catégorie dispose d'une galerie photo interactive avec navigation par flèches. Un formulaire de demande personnalisée permet au client de décrire son projet et de l'envoyer directement via WhatsApp , et une intégration WhatsApp pour les commandes. Design premium avec mode dark/light.`,
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "React Router DOM"],
      image: "/assets/projects/quichart/1.webp",
      gallery: [
        "/assets/projects/quichart/1.webp",
        "/assets/projects/quichart/2.webp",
        "/assets/projects/quichart/3.webp",
        "/assets/projects/quichart/4.webp",
        "/assets/projects/quichart/5.webp",
        "/assets/projects/quichart/6.webp",
        "/assets/projects/quichart/7.webp",
        "/assets/projects/quichart/8.webp",
      ],
      githubLink: "https://github.com/zinebchaq/quichart",
      category: "frontend"
    },

    {
    id: 5,
    title: "Stage PFA ALTEN — Application Full-Stack & Sécurité",
    description: "Stage PFA chez ALTEN Maroc consacré à la sécurisation d’une application full-stack à trois niveaux (.NET Core, Angular et SQL Server). Les travaux comprennent l’authentification JWT, le hachage PBKDF2 et le contrôle d’accès RBAC à quatre rôles. Des audits SAST/DAST ont aussi contribué au traitement de vulnérabilités et à l’ajout d’une limitation du débit des requêtes.",
    fullDescription: `Projet réalisé dans le cadre d’un stage PFA chez ALTEN Maroc. Contribution à la sécurisation des accès aux données d’une application full-stack organisée en trois tiers, ainsi qu’au développement et à la correction de code au sein d’une équipe utilisant Git.

Les travaux de sécurité comprennent l’authentification JWT sur HTTPS/TLS, le hachage des mots de passe avec PBKDF2 et le contrôle d’accès RBAC à quatre rôles. Des audits SAST/DAST avec Snyk et OWASP ZAP ont permis de traiter des vulnérabilités telles que XSS et SQLi, et d’intégrer une limitation du débit des requêtes.`,
    technologies: [".NET Core", "Angular", "SQL Server", "JWT", "HTTPS/TLS", "PBKDF2", "RBAC", "Snyk", "OWASP ZAP"],
    image: "/assets/projects/alten_pfa_sparks/accueil.jpg",
    gallery: ["/assets/projects/alten_pfa_sparks/accueil.jpg", 
       "/assets/projects/alten_pfa_sparks/count_locked.png", 
       "/assets/projects/alten_pfa_sparks/invalid_mail_mdp.png", 
       "/assets/projects/alten_pfa_sparks/xss.png"],
    category: "sécurité, backend"
  },
    {
        id: 6,
        title: "CarLocation — Application Android de Location de Voitures",
        description: "Application Android de gestion d’une agence de location de voitures, développée en Java. Elle propose des espaces adaptés à l’administrateur, à l’employé et au client, et permet de gérer les véhicules, les clients, les réservations et les paiements. Basée sur SQLite, elle fonctionne hors ligne.",
        fullDescription: `Application mobile Android développée en Java sous Android Studio, dédiée à la gestion complète d'une agence de location de voitures fictive appelée CarLocation.
          L'application propose trois profils utilisateurs distincts : l'administrateur dispose d'un accès complet à toutes les fonctionnalités, l'employé peut gérer les réservations et les paiements, et le client peut consulter les véhicules disponibles et effectuer des demandes de réservation.
          Les fonctionnalités principales incluent : gestion du parc automobile avec mise à jour automatique de la disponibilité, gestion des fiches clients, création et suivi des réservations avec un cycle de statuts (En attente → Confirmée → Terminée / Annulée), détection automatique des chevauchements de dates, encaissement des paiements avec choix du mode (espèces, carte, virement), historique complet des transactions, et notifications système en temps réel pour chaque événement (nouvelle réservation, confirmation, annulation, paiement).
          L'architecture repose sur le patron DAO (Data Access Object) avec une séparation claire entre les couches UI, logique métier et accès aux données via SQLite embarqué, garantissant un fonctionnement entièrement hors ligne.`,
        technologies: ["Java", "Android Studio", "SQLite", "Material Design", "DAO Pattern", "RecyclerView"],
        image: "/assets/projects/location_android/1.webp",
        gallery: [
          "/assets/projects/location_android/1.webp",
        "/assets/projects/location_android/2.webp",
        "/assets/projects/location_android/3.webp",
        "/assets/projects/location_android/4.webp",
        "/assets/projects/location_android/5.webp",
        "/assets/projects/location_android/6.webp",
        "/assets/projects/location_android/7.webp",
        "/assets/projects/location_android/8.webp",
          "/assets/projects/location_android/9.webp",
          "/assets/projects/location_android/10.webp",

        ],

        githubLink: "https://github.com/zinebchaq/CarLocation-Android",
        category: "mobile"
      },
      {
    id: 7,
    title: "AI Resume Screening & Job Matching",
    description: "Système intelligent de tri de CV et de rapprochement sémantique avec des offres d’emploi. Il classe les CV dans des catégories professionnelles et compare leurs compétences aux exigences des offres. Le projet combine TF-IDF + SVM, Sentence-BERT et LLaMA3.",
    fullDescription: `Système complet de classification et de matching de CVs développé dans le cadre du module Deep Learning & NLP à l'ENSA de Fès.

Le système propose deux fonctionnalités principales : la classification automatique d'un CV dans sa catégorie professionnelle (24 catégories) via un modèle TF-IDF + SVM enrichi d'un score hybride triple, et le matching sémantique entre un CV et une offre d'emploi via Sentence-BERT et la similarité cosinus.

Les fonctionnalités incluent : extraction de texte PDF via pdfplumber, détection automatique de la langue et traduction via GoogleTranslator, génération automatique de résumés professionnels en français via LLaMA3 (Ollama), affichage du Top 5 des domaines correspondants avec scores de confiance, détection des compétences matchées et manquantes, et une interface web React.js communiquant avec un backend FastAPI.

Deux modèles ont été comparés : DistilBERT fine-tuné (81.29% d'accuracy) et TF-IDF + SVM (72.03% d'accuracy). Le modèle TF-IDF + SVM a été retenu comme solution finale, étant plus adapté à la taille du dataset (2484 CVs).`,
    technologies: ["Python", "FastAPI", "React.js", "TF-IDF", "SVM", "Sentence-BERT", "DistilBERT", "LLaMA3", "Ollama", "pdfplumber", "scikit-learn"],
    image: "/assets/projects/cv_matching/1.webp",
    gallery: [
      "/assets/projects/cv_matching/1.webp",
      "/assets/projects/cv_matching/2.webp",
      "/assets/projects/cv_matching/3.webp",
      "/assets/projects/cv_matching/4.webp",
    ],
    githubLink: "https://github.com/zinebchaq/resume-matching-ai",
    category: "ai, backend"
  },
  

  {
    id: 8,
    title: "Plateforme Bureautique Web",
    description: "Plateforme web de gestion bureautique conçue pour une entreprise. Elle associe HTML, CSS et JavaScript pour l’interface, PHP pour la partie serveur et MySQL pour les données. Elle regroupe dans un même site les fonctionnalités de gestion bureautique du projet.",
    fullDescription: `Plateforme web complète pour la gestion bureautique d'une entreprise.`,
    technologies: ["HTML","CSS","JavaScript","PHP","MySQL"],
    image: "/assets/projects/bureautique/1.webp",
    gallery: [
      "/assets/projects/bureautique/1.webp",  
      "/assets/projects/bureautique/2.webp",
      "/assets/projects/bureautique/3.webp", 
      "/assets/projects/bureautique/4.webp",
      "/assets/projects/bureautique/5.webp",
      "/assets/projects/bureautique/6.webp"
    ],
    category: "fullstack, backend"
  },
];