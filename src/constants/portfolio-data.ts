import type { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Aditya Gola",
    role: "CSE student",
    tagline: "Software Developer building AI-powered applications and practical full-stack products",
    bio: "Computer Science and Engineering student at ABES Engineering College focused on software development, AI/ML, DSA, and building practical web applications.",
    location: "Noida, India",
    email: "aditya.gola003@gmail.com",
    github: "https://github.com/Adityagola003",
    githubUsername: "@Adityagola003",
    linkedin: "https://www.linkedin.com/in/aditya-gola/",
    linkedinUsername: "in/aditya-gola",
    resume: "/resume.pdf",
    readCv: "/resume.pdf",
  },

  hero: {
    heading: "Aditya Gola.",
    subheading:
      "Computer Science and Engineering student building AI-powered applications, developer tools, and full-stack web experiences with Python, JavaScript, React, Node.js, and modern AI technologies.",
    ctaText: "Get in touch",
    location: "Noida · India",
  },

  experience: [],

  achievements: [
    {
      year: "2026",
      title: "ARDEMA Hackathon Winner",
      detail:
        "Secured 1st place by developing a Disease Detector tool for early disease prediction using machine learning techniques within a 2-day timeframe.",
    },
    {
      year: "2025",
      title: "Published Research — Carbon Footprint Detection",
      detail:
        "Contributed to the published work 'Carbon footprint detector: an empirical approach for green and clean energy in smart cities' in the International Journal of Environmental Engineering.",
    },
    {
      year: "300+",
      title: "LeetCode Problems Solved",
      detail: "Solved 300+ problems focused on data structures and algorithms.",
    },
    {
      year: "5★",
      title: "HackerRank Python",
      detail: "Earned a 5-star Python rating on HackerRank.",
    },
  ],

  projects: [
    {
      year: "2026",
      title: "CodeLumen AI",
      description:
        "AI-assisted code review application that performs AST-based static analysis, detects issues such as unsafe eval() and use-before-assignment, and integrates NVD CVE-based dependency vulnerability scanning with an optional LLM analysis layer.",
      stack: ["Python", "JavaScript", "AST Analysis", "NVD CVE", "LLM"],
      link: "https://github.com/Adityagola003",
    },
    {
      year: "2026",
      title: "OmniVision",
      description:
        "AI-powered image assistant using image classification, semantic labeling, image captioning, metadata generation, and an image enhancement pipeline to support smarter image organization and retrieval.",
      stack: ["Python", "ResNet50", "Hugging Face", "Computer Vision"],
      link: "https://github.com/Adityagola003/OmniVision",
    },
    {
      year: "2025",
      title: "Carbon Footprint Calculator",
      description:
        "Interactive full-stack web application that calculates and visualizes carbon emissions using an empirical approach, with a responsive interface and JSON-based data management.",
      stack: ["HTML", "CSS", "JavaScript", "Node.js", "JSON"],
      link: "https://github.com/Adityagola003/Carbon-Footprint-Calculator",
    },
    {
      year: "—",
      title: "Students-Counter",
      description:
        "A lightweight web application for counting students with a simple interactive interface built using core web technologies.",
      stack: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Adityagola003/Students-Counter",
    },
  ],

  education: {
    period: "2023 — Present",
    institution: "ABES Engineering College, Ghaziabad",
    degree: "Bachelor of Technology — Computer Science and Engineering",
    gpa: "7.92 CGPA",
    coursework:
      "Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks",
  },

  skills: [
    {
      label: "Languages",
      items: ["C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
    },
    {
      label: "Frontend",
      items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      label: "Backend",
      items: ["Node.js", "Express.js", "FastAPI", "RESTful API Development"],
    },
    {
      label: "AI / ML",
      items: ["LLM APIs", "RAG", "Hugging Face Transformers", "Computer Vision", "Image Classification", "Image Captioning"],
    },
    {
      label: "Data & Databases",
      items: ["Pandas", "Matplotlib", "MySQL", "JSON-based Data Management"],
    },
    {
      label: "Tools & Core CS",
      items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "DSA", "OOP", "DBMS", "OS", "Computer Networks"],
    },
  ],

  now: {
    prompt: "aditya@portfolio ~ %",
    learning: "AI/ML, backend development & DSA",
    reading: "Building practical software products",
    building: "OmniVision & CodeLumen AI",
    listening: "Deep-focus playlists",
    coffee: "Coffee while coding",
    status: "CSE student · exploring software & AI opportunities",
  },

  footer: {
    tagline: "Software Developer | AI/ML | DSA",
    colophon: "Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.",
    lastUpdated: "Last updated · October 2026",
  },
};
