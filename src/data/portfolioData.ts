import { Briefcase, BrainCircuit, Code2, Database, Github, Linkedin, Mail, Rocket, ShieldCheck, Sparkles, Terminal } from 'lucide-react';

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const profileData = {
  name: 'Ved Shivhare',
  role: 'AI/ML Engineer & Backend Developer',
  tagline:
    'Building scalable AI-powered systems with real-world impact — from intelligent models to production-ready backend APIs.',
  summary:
    'I am a third-year B.Tech Computer Science student at Ajay Kumar Garg Engineering College, specializing in AI/ML and backend development. I build end-to-end machine learning systems, from data preprocessing and model training to deploying scalable backend services using FastAPI. My work focuses on bridging machine learning with real-world software engineering, creating intelligent, production-ready applications. I have hands-on experience in semantic search systems, recommendation engines, and REST API development, with a strong foundation in data structures, system design, and clean architecture.',
  heroImage: '/newpp2.jpg',
  resumeUrl: '/my_resume.pdf',
  phone: '+91-9450422714',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/Vedrockerz', icon: Github },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/vedshivhare06',
      icon: Linkedin,
    },
    { label: 'LeetCode', href: 'https://leetcode.com/u/Ved-Shivhare/', icon: Code2 },
    { label: 'Email', href: 'mailto:vedshivhare.dev@gmail.com', icon: Mail },
  ],
};

export const aboutHighlights = [
  {
    title: 'Full-Stack ML Systems',
    description: 'Building end-to-end machine learning pipelines from data preprocessing to production deployment.',
    icon: BrainCircuit,
  },
  {
    title: 'Backend Architecture',
    description: 'Designing scalable REST APIs and microservices with FastAPI and best practices.',
    icon: Terminal,
  },
  {
    title: 'Data Engineering',
    description: 'Strong foundation in data structures, algorithms, and clean system design patterns.',
    icon: Database,
  },
  {
    title: 'AI Innovation',
    description: 'Exploring semantic search, recommendation engines, and real-world AI applications.',
    icon: Sparkles,
  },
];

export const skillGroups = [
  {
    title: 'Programming',
    icon: Code2,
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Java', level: 78 },
      { name: 'SQL', level: 76 },
    ],
  },
  {
    title: 'AI/Machine Learning',
    icon: BrainCircuit,
    skills: [
      { name: 'TensorFlow/Keras', level: 82 },
      { name: 'Scikit-learn', level: 80 },
      { name: 'Feature Engineering', level: 79 },
      { name: 'Recommendation Systems', level: 78 },
    ],
  },
  {
    title: 'Backend Development',
    icon: Terminal,
    skills: [
      { name: 'FastAPI', level: 84 },
      { name: 'REST APIs', level: 82 },
      { name: 'Data Structures & Algorithms', level: 81 },
    ],
  },
  {
    title: 'Tools & Libraries',
    icon: Briefcase,
    skills: [
      { name: 'Pandas & NumPy', level: 80 },
      { name: 'Git & GitHub', level: 82 },
      { name: 'Postman', level: 78 },
    ],
  },
];

export const projects = [
  {
    title: 'AI Course Recommendation System',
    description:
      'Built a multilingual semantic recommendation engine using Sentence Transformers (BERT) on 10,000+ course titles with vector embeddings for context-aware recommendations. Developed FastAPI backend with REST APIs and integrated with Next.js frontend for a complete full-stack AI system.',
    stack: ['Python', 'FastAPI', 'Sentence Transformers', 'Next.js', 'Vector Embeddings'],
    githubUrl: 'https://github.com/Vedrockerz/Course-Recommendation-System',
    liveUrl: 'https://www.learn-wise.me/',
    icon: BrainCircuit,
  },
  {
    title: 'Phishing URL Detection System',
    description:
      'Developed an ML model to detect malicious URLs using lexical and domain-based features. Performed extensive EDA, compared multiple models (Random Forest, Logistic Regression), optimized using cross-validation, and built REST API with FastAPI for real-time predictions.',
    stack: ['Python', 'Scikit-learn', 'FastAPI', 'Pandas', 'Swagger UI'],
    githubUrl: 'https://github.com/Vedrockerz/networksecurity',
    liveUrl: null,
    icon: ShieldCheck,
  },
  {
    title: 'Customer Churn Prediction (ANN)',
    description:
      'Built an Artificial Neural Network using TensorFlow/Keras to predict customer churn. Applied feature scaling, encoding, and proper ML pipeline practices. Used early stopping to prevent overfitting and derived actionable business insights.',
    stack: ['Python', 'TensorFlow/Keras', 'Neural Networks', 'Pandas'],
    githubUrl: 'https://github.com/Vedrockerz/ANN-Classification-Bank-Churn',
    liveUrl: null,
    icon: Rocket,
  },
];

export const experiences = [
  {
    role: 'Backend Developer',
    org: 'ZYNTR',
    period: 'March 2026 - Present',
    description: 'Developing scalable backend systems using MERN stack architecture. Designing and managing MongoDB schemas for efficient data handling. Building and integrating RESTful APIs for seamless frontend-backend communication.',
  },
  {
    role: 'Open Source Mentor',
    org: 'GirlScript Summer of Code (GSSoC)',
    period: 'July 2025 – November 2025',
    description: 'Mentored contributors in open-source projects, guided development practices and collaboration workflows, and helped improve code quality and project structure.',
  },
];

export const education = [
  {
    degree: 'B.Tech in Computer Science',
    school: 'Ajay Kumar Garg Engineering College, Ghaziabad',
    period: '2023 - 2027',
    note: '3rd Year',
  },
  {
    degree: 'Intermediate (CBSE)',
    school: 'Alpine Public School, Jhansi',
    period: '2022',
    note: 'Completed',
  },
  {
    degree: 'Matriculation (ICSE)',
    school: 'Christ The King College, Jhansi',
    period: '2020',
    note: 'Completed',
  },
];

export const certifications = [
  {
    title: 'Data Science Bootcamp',
    issuer: 'Udemy',
    description: 'Learned end-to-end ML pipeline, deep learning, NLP, and real-world model deployment strategies.',
    link: 'https://drive.google.com/file/d/1Kiu2D_6Ec1YThnHgfAG8FY_oFtjRd7lr/view?usp=drive_link',
  },
  {
    title: 'Generative AI Mastermind',
    issuer: 'Outskill by Vaibhav Sisinty',
    description: 'Covered LLMs, Generative AI concepts, and real-world AI application development with hands-on projects.',
    link: 'https://drive.google.com/file/d/1GrehYr9DuXKHN9IG7x4d6US7Q-r0U7b8/view?usp=drive_link',
  },
];

export const contactData = {
  email: 'vedshivhare.dev@gmail.com',
  phone: '+91-9450422714',
  github: 'https://github.com/Vedrockerz',
  linkedin: 'https://linkedin.com/in/vedshivhare06',
  location: 'New Delhi, India',
};