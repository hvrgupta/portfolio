export type SocialLink = {
  label: string
  url: string
}

export type ExperienceItem = {
  company: string
  role: string
  period: string
  location?: string
  summary: string
  achievements?: string[]
  tech?: string[]
  links?: SocialLink[]
}

export type ProjectItem = {
  name: string
  description: string
  tech?: string[]
  highlights?: string[]
  links?: SocialLink[]
}

export type EducationItem = {
  institution: string
  degree: string
  period: string
  location?: string
  gpa?: string
  courses?: string[]
  links?: SocialLink[]
}

export type PortfolioSpec = {
  info: {
    name: string
    title: string
    version: string
    summary: string
    location?: string
    email?: string
    avatarUrl?: string
    links?: SocialLink[]
    skills?: Record<string, string[]>
  }
  experience: ExperienceItem[]
  projects: ProjectItem[]
  education: EducationItem[]
}

export const portfolioSpec: PortfolioSpec = {
  info: {
    name: 'Harsh Gupta',
    title: 'Software Engineer',
    version: 'v1.2.0',
    summary: "👋 Hello, I'm Harsh, a Software Engineer with over two years of experience at Tata Consultancy Services, where I worked on diverse projects and collaborated with cross-functional teams.\n\n I recently completed my Master’s in Software Engineering from the University of Maryland, which helped me deepen my technical expertise and explore emerging technologies.\n\n My interests include Full Stack Web Development, DevOps, Distributed Computing, and Security. I’m currently seeking full-time opportunities where I can apply my skills, continue learning, and contribute meaningfully to impactful projects.",
  location: 'Open to Relocation',
    email: 'harshhgupta16@gmail.com',
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/hvrgupta' },
      { label: 'GitHub', url: 'https://www.github.com/hvrgupta' },
      { label: 'Leetcode', url: 'https://www.leetcode.com/u/hvrgupta' }
    ],
    skills: {
      "Languages & Frameworks": ["Java", "Python", "Spring Boot", "Nodejs", "Expressjs", "JUnit", "FastAPI"],
      "Data Management": ["MySQL", "PostgreSQL", "MongoDB (NoSQL)", "Elasticsearch"],
      "Web Development": ["HTML/CSS", "JavaScript", "Typescript", "Angular", "Reactjs", "Redux", "Swagger"],
      "Infrastructure & Tools": ["Git", "Bitbucket", "Jira", "Docker", "Kubernetes (Beginner)", "Ansible", "Jenkins (CI/CD)", "Kafka", "RabbitMQ", "Eclipse", "IntelliJ", "Visual Studio", "ZAP", "Burp Suite", "Wireshark"],
      "Cloud & OS": ["Amazon Web Services (S3, RDS, EC2)", "Windows", "Mac", "Linux", "Unix"],
      "Software Development Principles": ["REST/SOAP", "Microservices", "Design Patterns", "SDLC", "Agile", "SOLID Principles", "Distributed Systems"],
      "Certifications": ["AWS Certified Cloud Practitioner", "CodePath’s TIP"]
    }
  },
  experience: [
    {
      company: 'Center for Advanced Transportation Technology',
      role: 'Software Developer Intern',
      period: 'Feb. 2024 — May 2025',
      location: 'College Park, MD',
      summary:
        'Contributed to RITIS Map modernization with performant vector tile endpoints and platform automation.',
      achievements: [
        'Developed vector tile endpoints in Java; reduced map load times by ~20%',
        'Configured Nginx proxy for SSL termination to enhance security and performance',
        'Automated deployments with Ansible; improved server management/monitoring by ~30%',
        'Built flexible playbooks for debugging and memory management'
      ],
      tech: ['Java', 'Spring Boot', 'Nginx', 'Ansible'],
      links: []
    },
    {
      company: 'Tata Consultancy Services',
      role: 'Software Engineer',
      period: 'Jul. 2021 — Jul. 2023',
      location: 'Pune, India',
      summary:
        'Built and launched a gamification platform from scratch, delivering backend APIs and a web frontend for 40k+ associates.',
      achievements: [
        'Designed and implemented REST APIs with Spring Boot and Java; frontend in Angular',
        'Optimized SQL queries improving data retrieval performance',
        'Implemented authentication/authorization and core business logic',
        'Led SAST/DAST efforts to proactively identify and resolve vulnerabilities',
        'Maintained Jenkins CI/CD pipelines; automated builds/tests/deployments (−40% manual ops)',
        'Integrated SonarQube to fix security issues and enforce code quality'
      ],
      tech: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Jenkins', 'SonarQube'],
      links: []
    }
  ],
  projects: [
    {
      name: 'Microservices E‑Commerce Platform',
      description:
        'Scalable, event‑driven e‑commerce platform with observability and resilience patterns.',
      tech: ['Spring Boot', 'PostgreSQL', 'MongoDB', 'Kafka', 'RabbitMQ', 'Prometheus', 'Grafana'],
      highlights: [
        'Event‑driven microservices with horizontal scaling',
        'Asynchronous messaging via Kafka and RabbitMQ',
        'Observability with Prometheus/Grafana',
        'Resilience4J (circuit breakers, retries, rate limiting)',
        'Security with encryption and JWT/OAuth2'
      ],
      links: []
    },
    {
      name: 'Upskilled (LMS)',
      description:
        'Full‑stack Learning Management System supporting course management, submissions, and grading.',
      tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'AWS (EC2, S3)', 'Heroku'],
      highlights: [
        '50+ REST APIs; role‑based access (Admin/Instructor/Employee) with Spring Security + JWT',
        'Cloud file uploads via AWS S3 for materials and submissions',
        'Comprehensive JUnit tests with >85% coverage'
      ],
      links: [
        { label: 'Demo', url: 'https://upskilled.vercel.app' }
      ]
    }
  ]
  ,
  education: [
    {
      institution: 'University of Maryland, College Park',
      degree: 'Masters of Engineering, Software Engineering',
      period: 'Aug. 2023 — May 2025',
      location: 'College Park, MD',
      links: []
    },
    {
      institution: 'Shri Vaishnav Vidyapeeth Vishwavidyalaya',
      degree: 'Bachelor of Technology, Computer Science and Engineering',
      period: 'Aug. 2017 — May 2021',
      location: 'Indore, India',
      links: []
    }
  ]
}

export default portfolioSpec


