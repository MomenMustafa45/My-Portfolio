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
  Twitter,
  Instagram,
  YouTube,
} from "@mui/icons-material";
import cover from "../../assets/man.png";
import port1 from "../../assets/port1.jpg";
import port2 from "../../assets/port2.jpg";
import port3 from "../../assets/port3.jpg";
import port4 from "../../assets/port4.jpg";
import port5 from "../../assets/port5.jpg";
import port6 from "../../assets/port6.jpg";

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
    url: "/testimonials",
    text: "Testimonials",
  },
  {
    url: "/blog",
    text: "Blog",
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
    cover: cover,
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
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
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
    name: "Develop Posts",
    category: "development",
    title: "Blog Posts",
    url: "https://momenmustafa45.github.io/blog-post-web/",
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
    name: "Books",
    category: "development",
    title: "Read Books",
    url: "https://momenmustafa45.github.io/MyReads/",
  },
  {
    id: 3,
    cover: port3,
    name: "Brand",
    category: "development",
    title: "Brex Logo",
    url: "https://momenmustafa45.github.io/ecommerce-project/",
  },

  {
    id: 5,
    cover: port5,
    name: "Brand",
    category: "design",
    title: "Brex Logo",
    url: "https://momenmustafa45.github.io/ecommerce-project/",
  },
  {
    id: 6,
    cover: port6,
    name: "Brand",
    category: "development",
    title: "Brex Logo",
    url: "https://momenmustafa45.github.io/ecommerce-project/",
  },
];

export const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-1.png",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-2.png",
    name: "Alex Ander",
    post: "Back End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-3.png",
    name: "GorkCoder",
    post: "React Developer",
  },
];

export const blog = [
  {
    id: 1,
    title: "Master These Awesome",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b1.png",
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "The 20 Best Lightroom Presets",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b3.png",
  },
];

export const contact = [
  {
    icon: <AddLocationOutlined />,
    text1: "2651 Main Street, Suit 124",
    text2: "Seattle, WA, 98101",
  },
  {
    icon: <PhoneIphone />,
    text1: "0123456789",
    text2: "0345627891",
  },
  {
    icon: <EmailOutlined />,
    text1: "hello@thetheme.io",
    text2: "inf0@brex-theme.io",
  },
];
