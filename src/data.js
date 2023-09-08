// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Projects Images (add your images to the images directory and import below)
// import Logo from "./images/logo.svg";
import Pokemon from "./images/Pokemon.png";
import Readme from "./images/Readme.png"
import Hackaton from "./images/Hackaton.png"
import Portfolio from "./images/Portfolio.png"
import Layout8M from "./images/Layout8M.png"
import Quiz from "./images/Quiz.png"
import ToDoList from "./images/ToDoList.png"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "Bangarrett";

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Soy un profesional del área de la tecnología, especializado en desarrollo web fullstack, con alta tolerancia a la frustración y habilidad para trabajar en equipo de manera empática y paciente. Estudié el Bootcamp en desarrollo web FullStack en Fundación F5, donde adquirí experiencia en estructura y diseño web utilizando HTML, CSS, JavaScript, entre otras tecnologías. Soy organizado, comprometido y me adapto fácilmente a los cambios. Mi objetivo es seguir aprendiendo y aportar soluciones innovadoras y de calidad en cada proyecto, contribuyendo al éxito de los desafíos tecnológicos en mi carrera profesional.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="teenyicons:tailwind-solid" className="display-4" />,
    name: "Tailwind",
  },
  {
    id: 7,
    skill: <Icon icon="file-icons:php" className="display-4" />,
    name: "PHP",
  },
  {
    id: 8,
    skill: <Icon icon="simple-icons:laravel" className="display-4" />,
    name: "Laravel",
  },
  {
    id: 9,
    skill: <Icon icon="fontisto:docker" className="display-4" />,
    name: "Docker",
  },
  {
    id: 10,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 11,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];


export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["Api_pokemon", "Bangarrett", "Hackaton_Grupo_17", "Layout_8M", "Portfolio", "Quiz", "Snippets", "To-Do-List"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 4-5)
export const projectCardImages = [
  {
    name: "Api_pokemon",
    image: Pokemon,
  },
  {
    name: "Bangarrett",
    image: Readme,
  },
  {
    name: "Hackaton_Grupo_17",
    image: Hackaton,
  },
  {
    name: "Portfolio",
    image: Portfolio,
  },
  {
    name: "Layout_8M",
    image: Layout8M,
  },
  {
    name: "Quiz",
    image: Quiz,
  },
  {
    name: "To-Do-List",
    image: ToDoList,
  },

];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
