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
    description: "Application web multilingue ...",
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
    category: "fullstack"
  },
  {
    id: 2,
    title: "Système de Gestion de Pharmacie",
    description: "Application complète ...",
    fullDescription: `Système complet de gestion de pharmacie développé avec React et Node.js. Cette application permet la gestion des stocks de médicaments, des ventes, des fournisseurs et des clients.`,
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
    category: "fullstack"
  },
  {
    id: 3,
    title: "Application de Location de Voitures",
    description: "Application desktop ...",
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
    category: "fullstack"
  },
  {
    id: 4,
    title: "Plateforme Bureautique Web",
    description: "Site web complet ...",
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
    category: "fullstack"
  },
  {
      id: 5,
      title: "Quich'Art — Site Vitrine & Commande",
      description: "Site web pour une pâtisserie artisanale à Fès — tartelettes sucrées et salées.",
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
      category: "fullstack"
    },
    {
        id: 6,
        title: "CarLocation — Application Android de Location de Voitures",
        description: "Application mobile Android de gestion complète d'une agence de location de voitures : véhicules, clients, réservations et paiements.",
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
    description: "Système intelligent de classification automatique de CVs et matching sémantique avec offres d'emploi, développé avec TF-IDF + SVM, Sentence-BERT et LLaMA3.",
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
    category: "ai"
  }
];