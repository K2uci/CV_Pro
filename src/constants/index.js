import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  xetid,
  tecopos,
  pixel,
  myicon
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python 3 Automation",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Xetid",
    icon: xetid,
    iconBg: "#383E56",
    date: "June 2020 - Agust 2022",
    points: [
      "We deployed the entire system infrastructure in 4 months.",
      "Member of the main development group of the TICKET platform.",
      "I deepened my skills as a FULL-STACK developer.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Support Technician ",
    company_name: "TECOPOS",
    icon: tecopos,
    iconBg: "#E6DEDD",
    date: "December 2022 - January 2024 ",
    points: [
      "Maintenance and migration to company-owned applications",
      "Creation of web management system for real estate sales.",
      "Development and automation of internal company processes (Python 3+ months).",
      "Level 2 Support Assistant (6+ months).",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Pixel Solutions",
    icon: pixel,
    iconBg: "#383E56",
    date: "February 2024 - December 2024 ",
    points: [
      "Continuous learning and improvement in the Odoo platform.",
      "Development of solutions based on Odoo (Python 3+ months).",
      "Management and work with the company's clients.",
      "Gathering and documenting functional requirements.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "FREELANCER",
    icon: myicon,
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    points: [
      "Development of AI models (Keras-Tensor Flow).",
      "Deployment and maintenance of already developed websites.",
      "Construction and development of personal systems.",
      "Consulting for various state entities as a developer.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ticket",
    description:
      "Web-based platform that allows users to search, book and manage their tickets for domestic online purchases, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "nest",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "text-indigo-300",
      },
      {
        name: "microservices",
        color: "text-amber-300",
      },
      {
        name: "redux",
        color: "text-gray-300",
      },
      {
        name: "typescript",
        color: "text-rose-300",
      },
    ],
    image: carrent,
    source_code_link: "https://ticket.xutil.net/",
  },
  {
    name: "Rent My",
    description:
      "Web application that allows users to search for rental housing offers, view rental price ranges, and locate available areas based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "text-amber-300",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "django",
        color: "text-indigo-300",
      },
      {
        name: "digitalocean",
        color: "text-amber-300",
      },
    ],
    image: jobit,
    source_code_link: "https://rentme.uy/",
  },
  {
    name: "Pixel Solution",
    description:
      "Home page of the company where I worked with all the projects they have developed to date.",
    tags: [
      {
        name: "odoo",
        color: "text-amber-300",
      },
      {
        name: "python",
        color: "text-rose-300",
      },
      {
        name: "aws",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "django",
        color: "text-indigo-300",
      },
      {
        name: "react",
        color: "text-amber-300",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.uic.cu/base/pyxel-solutions/",
  },
];

const REACT_APP_EMAILJS_USERID='service_hjdoi8a'
const REACT_APP_EMAILJS_TEMPLATEID='template_991j54i'
const REACT_APP_EMAILJS_RECEIVERID='iCzEuttyc7VJRaluB'

export { services, technologies, experiences, testimonials, projects , REACT_APP_EMAILJS_RECEIVERID , REACT_APP_EMAILJS_USERID , REACT_APP_EMAILJS_TEMPLATEID};
