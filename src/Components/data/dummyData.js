import {
  Settings,
  CropRotate,
  ViewInAr,
  Code,
  BarChart,
  CloudOutlined,
  FavoriteBorder,
  Public,
  PersonOutline,
  AddLocationOutlined,
  PhoneIphone,
  EmailOutlined,
  Facebook,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";
import cover from "../../assets/man.jpg";
import port1 from "../../assets/port1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";
import port4 from "../../assets/port4.png";
import port5 from "../../assets/port5.png";
import port6 from "../../assets/port7.png";
import ti1 from "../../assets/team-1.png";
import ti2 from "../../assets/team-2.jpg";

export const navLink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/certification",
    text: "Certification",
  },

  {
    url: "/contact",
    text: "Contact",
  },
];

export const home = [
  {
    text: "Hello I am",
    name: "Momen Mustafa",
    post: "Frontend Developer",
    design: "React Developer",
    desc: "Application/Web developer armed with proficient knowledge of react expertise, adept at using HTML, CSS, JavaScript, Material UI, Bootstrap and Storybook to design the user interface and deploy it effectively in applications, always focus on the best user experience, all the while balancing the needs of the business to create a perfect product.",
  },
];

export const about = [
  {
    desc: "I’m a Front-End Developer located in Egypt. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.",
    desc1:
      "Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor activities, TV series and English literature. A family person and father of two fractious boys.",
    desc2:
      "Interested in the entire frontend spectrum and working on ambitious projects with positive people.",
    cover,
  },
];

export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Creative Design",
    desc: "Creative design involves using computer-generated imagery and digital animation to visualise a product",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Clean Code",
    desc: "Writing clean, understandable, and maintainable code",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Responsive Design",
    desc: "Fully Responsive websites",
  },

  {
    id: 5,
    icon: <Code />,
    title: "Material UI Icons",
    desc: "Using Icons with Material UI",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Awesome Support",
    desc: "Supporting you with my skills and anything",
  },
];

export const social = [
  {
    icon: <Facebook />,
    url: "https://www.facebook.com/momen.kara",
  },
  {
    icon: <LinkedIn />,
    url: "https://www.linkedin.com/in/momen-mustafa-917280234/",
  },
  {
    icon: <GitHub />,
    url: "https://github.com/MomenMustafa45",
  },
];

export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "89",
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "231",
    title: "PROJECTS COMPLEATED",
  },
  {
    id: 3,
    icon: <Public />,
    num: "108",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <PersonOutline />,
    num: "1446",
    title: "LIENS OF CODE",
  },
];

export const portfolio = [
  {
    id: 1,
    cover: port1,
    name: "Company's Website",
    category: "development",
    title: "Shift Advanced",
    url: "https://shift-adv.com/",
  },
  {
    id: 2,
    cover: port2,
    name: "Ecommerce",
    category: "design",
    title: "MAD CHEQ STORE",
    url: "https://momenmustafa45.github.io/ecommerce-project/",
  },
  {
    id: 4,
    cover: port4,
    name: "Website",
    category: "development",
    title: "Gaman",
    url: "https://capable-cajeta-e1ebe9.netlify.app/",
  },
  {
    id: 3,
    cover: port3,
    name: "Books",
    category: "development",
    title: "My Reads",
    url: "https://momenmustafa45.github.io/MyReads/",
  },

  {
    id: 5,
    cover: port5,
    name: "Movies",
    category: "development",
    title: "WatchMovies",
    url: "https://night-movies.vercel.app",
  },
  {
    id: 6,
    cover: port6,
    name: "Mobile App",
    category: "development",
    title: "Delivery App",
    url: "https://drive.usercontent.google.com/download?id=1T1MUcgVlPYdSMBAkFy06JD1KXOnZA7UH&export=download&authuser=0",
  },
];

export const certification = [
  {
    id: 1,
    text: "Certificated from Udacity company as frontend developer",
    image: ti1,
    name: "Udacity",
    post: "FrontEnd Developer",
  },

  {
    id: 2,
    text: "Certificated from Udemy company as frontend developer",
    image: ti2,
    name: "Udemy",
    post: "React/React-Native Developer",
  },
];

export const contact = [
  {
    icon: <AddLocationOutlined />,
    text1: "39 fest street, haram",
    text2: "Giza, Egypt-11023",
  },
  {
    icon: <PhoneIphone />,
    text1: "01126134052",
    text2: "01127078911",
  },
  {
    icon: <EmailOutlined />,
    text1: "momenkara2@gmail.com",
    text2: "momenmustafa201@gmail.com",
  },
];
