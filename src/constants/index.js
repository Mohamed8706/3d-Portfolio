import {
  mobile,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  ic,
  ecommerce,
  registration,
  portfolio,
  leontemplate,
  toDoList,
  quiz
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
    title: "React Js Developer",
    icon: mobile,
  }
];

const technologies = [
  {
    name:"HTML 5",
    icon: html,
  },
  {
    name:"CSS 3",
    icon: css,
  },
  {
    name:"JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "React Js Developer (Intern)",
    company_name: "Ideas and Concepts",
    icon: ic,
    iconBg: "#E6DEDD",
    date: "September 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];


const projects = [
  {
    name: "E-Commerce",
    description:
      "Web-based platform that allows users to search, buy, and manage products. with a dashboard that allows admins and writers to manage and add users and categories.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "orange-text-gradient",
      },
      {
        name: "in-progress",
        color: "green-text-gradient",
      },
    ],
    image: ic,
    source_code_link: "https://github.com/Mohamed8706/E-Commerce",
  },
  {
    name: "Registration",
    description:
      "Web application that enables users to register and sign in using RestApi with a dashboard that allows admins to modify and add users.",
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
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: ic,
    source_code_link: "https://github.com/Mohamed8706/react",
  },
  {
    name: "Portfolio",
    description:
      "A personal portfolio website showcasing some of the projects that I have made using standard technologies throughout my learning journey.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: ic,
    source_code_link: "https://github.com/Mohamed8706/MyPortfolio/tree/master",
    live_preview_link: "https://mohamedkportfolio.netlify.app/"
  },
  {
    name: "Leon Template",
    description:
      "A modern minimal agency web template that I developed using standrad technologies.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: ic,
    source_code_link: "https://github.com/Mohamed8706/MyPortfolio/tree/master/Project-elzero1",
    live_preview_link: "https://mohamedkportfolio.netlify.app/project-elzero1/"
  },
  {
    name: "To-Do-List",
    description:
      "A web application that allows users to make a list of things they wish to do and the website stores their desired tasks for them to review and modify at any given time.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: ic,
    source_code_link: "https://github.com/Mohamed8706/MyPortfolio/tree/master/To-do-list",
    live_preview_link: "https://mohamedkportfolio.netlify.app/to-do-list/challange"
  },
  {
    name: "Quiz Page",
    description:
      "A simple quiz page that shows some questions related to front-end technologies and sends the answers to a server.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: ic,
    source_code_link: "https://github.com/Mohamed8706/MyPortfolio/tree/master/web6",
    live_preview_link: "https://mohamedkportfolio.netlify.app/web6/web6"
  },
];

export { services, technologies, experiences, projects };