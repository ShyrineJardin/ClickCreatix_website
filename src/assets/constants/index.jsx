import {
    FaXTwitter,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaDiscord,
    FaInstagram,
  } from "react-icons/fa6";

import project1 from '../../assets/images/project1.jpg';
import project2 from '../../assets/images/project2.jpg';
import project3 from '../../assets/images/project3.jpg';
import project4 from '../../assets/images/project4.jpg';
import project5 from '../../assets/images/project5.jpg';
import project6 from '../../assets/images/project6.jpg';
import project7 from '../../assets/images/project7.jpg';
import project8 from '../../assets/images/project8.jpg';
import project9 from '../../assets/images/project9.jpg';
import service1 from '../../assets/images/service1.jpg';
import service2 from '../../assets/images/service2.jpg';
import service3 from '../../assets/images/service3.jpg';


  export const LINKS = [
    { id: "projects", name: "projects" },
    { id: "about", name: "about" },
    { id: "services", name: "services" },
    { id: "contact", name: "Contact" },
  ];

  export const SLIDE_TEXT =
  ", Glam, Click, Smile, Pose, Post, Slay";


  export const PROJECTS = [
    {
      id: 1,
      title: "Neon Glow Portraits",
      imgSrc: project1,
      link: "https://example.com/ecommerce-website",
    },
    {
      id: 2,
      title: "Model Headshots",
      imgSrc: project2,
      link: "https://example.com/social-media-app",
    },
    {
      id: 3,
      title: "Dramatic Close-Ups ",
      imgSrc: project3,
      link: "https://example.com/portfolio-website",
    },
    {
      id: 4,
      title: "Bridal & Pre-Wedding",
      imgSrc: project4,
      link: "https://example.com/blog-platform",
    },
    {
      id: 5,
      title: "Golden Hour Glow",
      imgSrc: project5,
      link: "https://example.com/task-management-tool",
    },
    {
      id: 6,
      title: "Birthday Glam Photoshoot",
      imgSrc: project6,
      link: "https://example.com/online-learning-platform",
    },
    {
      id: 7,
      title: "Elegant Couple Portraits",
      imgSrc: project7,
      link: "https://example.com/fitness-tracker",
    },
    {
      id: 8,
      title: "Cinematic Noir",
      imgSrc: project8,
      link: "https://example.com/recipe-app",
    },
    {
      id: 9,
      title: "Editorial Magazine-Style Portraits",
      imgSrc: project9,
      link: "https://example.com/weather-dashboard",
    },
  ];


  export const CardsData = [
    {
      id: 1,
      img: service1,
      title: "Lifestyle & Event Portraits",
      desc: "Family, Graduation, Wedding, Birthdays, & Anniversaries. Outdoor & Candid Lifestyle Sessions"
    },
    {
      id: 2,
      img: service2,
      title: "Creative & Themed Photoshoots",
      desc: "Fashion & Glamour Photography. Cinematic, Cosplay & Concept Shoots."
    },
    {
      id: 3,
      img: service3,
      title: "Commercial Product Shoots",
      desc: "Clean, high-quality images for e-commerce, advertising, and branding."
    }
  ]

  export const SOCIAL_MEDIA_LINKS = [
    {
      href: "https://x.com/",
      icon: <FaFacebook fontSize={26} className="hover:opacity-80" />,
    },
    {
      href: "https://x.com/",
      icon: <FaDiscord fontSize={26} className="hover:opacity-80" />,
    },
    {
      href: "https://x.com/",
      icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
    },
    {
      href: "https://x.com/",
      icon: <FaXTwitter fontSize={26} className="hover:opacity-80" />,
    },
    {
      href: "https://www.linkedin.com/",
      icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
    },
  ];