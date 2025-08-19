// Centralized app data: contact, nav, skills, experience, education, achievements

export const CONTACT = {
  name: 'Ritesh Kumar Shikarwar',
  location: 'Noida, UP, India',
  phone: '+91 8700567381',
  email: 'riteshkshik@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ritesh-kumar-shikarwar-149b171b9/',
  github: 'https://github.com/riteshkshik',
  photo:
    'https://loclse-app.s3.ap-south-1.amazonaws.com/service_provider/1754645156774-profile.jpg',
};

export const SUMMARY =
  'Results-driven Full Stack developer with 2+ years of experience specializing in scalable backend systems, API development, and performance optimization. Proven track record of improving system performance by 35% and handling 10x concurrent requests through efficient architecture design and Redis caching implementation.';

export const NAV = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const SKILLS = {
  Languages: ['JavaScript', 'TypeScript', 'SQL', 'HTML5'],
  Frameworks: ['Node.js', 'Express', 'React', 'MongoDB', 'REST APIs', 'JWT', 'Redis', 'KML APIs'],
  Tools: ['PM2', 'Docker', 'Postman', 'VS Code', 'Git', 'GitHub', 'JIRA', 'NPM', 'CI/CD'],
  Fundamentals: [
    'Data Structures & Algorithms',
    'OOP',
    'DBMS',
    'Operating Systems',
    'Asynchronous Programming',
  ],
};

export const EXPERIENCE = [
  {
    company: 'Execution Force Pvt. Ltd.',
    role: 'Backend Developer',
    project: 'LocalSe - Hyperlocal Services Discovery Platform',
    location: 'Noida, UP',
    period: 'May 2025 — Jul 2025',
    bullets: [
      'Built scalable backend using Node.js & Express; developed 45+ RESTful APIs.',
      'Implemented geospatial queries in MongoDB with indexing, cutting retrieval time by 40%.',
      'Boosted API performance by 35% with strategic caching for hot endpoints.',
      'Collaborated with frontend & mobile teams for smooth integrations and releases.',
      'Set up CI/CD using GitHub and PM2 for seamless deployments.',
    ],
  },
  {
    company: 'Dvertex Info Systems',
    role: 'Software Developer',
    project: 'SafaiMitra – Waste management solution with GPS tracking and payments',
    location: 'Noida, UP',
    period: 'Jun 2023 — Present',
    bullets: [
      'Built advanced GPS services: path visualization, trip counting, coverage measurement.',
      'Improved backend performance by 35% via Redis caching and reduced SQL load.',
      'Handled 10x concurrent requests using PM2 cluster mode across 12 CPU cores.',
      'Designed KPI dashboard APIs for attendance, routes, trip data, and complaints.',
      'Automated PDF ID generation with QR codes for streamlined collection.',
    ],
  },
  {
    company: 'Dvertex Info Systems',
    role: 'Software Developer',
    project: 'SurakshaMitra – SaaS platform for UP Police patrol digitization & monitoring',
    location: 'Noida, UP',
    period: 'Jun 2023 — Present',
    bullets: [
      'Developed real-time dashboard APIs for patrols, QR scans, and reports (30% efficiency).',
      'Built secure QR-based tracking with 10-minute cooldown enforcement.',
      'Implemented pagination increasing response speed by 60% for analytics views.',
      'Interactive map via KML APIs for scan locations and operational boundaries.',
      'Secured endpoints with JWT-based authentication.',
    ],
  },
];

export const EDUCATION = [
  {
    school: 'MGM College Of Engineering and Technology',
    degree: 'Bachelor of Technology in Computer Science (CGPA: 7.43)',
    place: 'Noida, UP',
    period: 'May 2020 — Jun 2024',
  },
  {
    school: 'Rajkiya Pratibha Vikas Vidyalaya',
    degree: 'Class 12th (PCM) – 77%',
    place: 'IP Extension, Delhi',
    period: 'Apr 2018 — Jul 2020',
  },
];

export const ACHIEVEMENTS = [
  { title: '700+ problems solved on LeetCode', detail: 'Strong DSA practice and consistent problem-solving streak.' },
  { title: '158th of 9,000+ – CodeChef November Long (Div 4)', detail: 'Ranked by solving complex algorithmic challenges.' },
  { title: '3223rd of 17,000+ – LeetCode Biweekly 103', detail: 'Solved 3 of 4 problems within time constraints.' },
];


