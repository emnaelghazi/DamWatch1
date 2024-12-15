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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  
  export const navLinks = [
    {
      id: "about",
      title: "About us",
    },
    {
      id: "work",
      title: "Our work",
    },
    {
      id: "contact",
      title: "Contact us",
    },
    {
      id: "login",
      title: "Register", 
      link: "users-form.html",
    },
    
    {
      id: "Maps",
      title: "Dashboard",
      link: "/dashb.py",
    },
  ];
  
  const services = [
    {
      title: "Predict",
      icon: web,
    },
    {
      title: "Identify",
      icon: mobile,
    },
    {
      title: "Prepare",
      icon: backend,
    },
    {
      title: "Monitor",
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
    
    
  ];
  
  const experiences = [
    {
      title: "Predict",
      company_name: "MSE",
      icon: starbucks,
      iconBg: "#383E56",
      date: "2024- Beyond",
      points: [
        "Resident thresholds continuously checked against relevant data sources. Configured to maximize situational awareness.",
      ],
    },
    {
      title: "Identify",
      company_name: "MSE",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "2024- Beyond",
      points: [
        "Automated watchlists generated for monitored assets having met or exceeded defined limits. ",
      ],
    },
    {
      title: "Prepare",
      company_name: "MSE",
      icon: shopify,
      iconBg: "#383E56",
      date: "2024- Beyond",
      points: [
        "Real-time web interface to assess and develop an informed response.",
      ],
    },
    {
      title: "Monitor",
      company_name: "MSE",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "2024- Beyond",
      points: [
        "Web and Mobile applications to manage and document field activities.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "We thought it was impossible to make a website as beautiful as our product, but we proved ourselves wrong.",
      name: "Qatrennada Gouja",
      designation: "Our Product owner",
      company: "DamWatch",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Elaa does.",
      name: "Emna El Ghazi",
      designation: "Scrum Master",
      company: "DamWatch",
      image: "https://randomuser.me/api/portraits/women/4.jpg"
      
    },
    {
      testimonial:
        "After we optimized our website, our traffic increased by 50%. We can't thank us enough!",
      name: "Elaa Kahri",
      designation: "CTO & developer",
      company: "DamWatch",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Dam Engineering",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "engineering",
          color: "blue-text-gradient",
        },
        {
          name: "dams",
          color: "green-text-gradient",
        },
        {
          name: "save_resources",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      
    },
    {
      name: "Dams Safety",
      description:
        "Dam safety programmes, at all levels and over all types of dams large and small..",
      tags: [
        {
          name: "Monitoring",
          color: "blue-text-gradient",
        },
        {
          name: "Environment",
          color: "green-text-gradient",
        },
        {
          name: "Catastrophe",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
    },
    {
      name: "Instrumentation",
      description:
        "Instrumentation services including design installation and maintenance of geotechnical instrumentation systems for dams and civil structures, ranging from manual hydraulic piezometers, flow and deformation devices to the latest electronic instrument systems.",
      tags: [
        {
          name: "instrument",
          color: "blue-text-gradient",
        },
        {
          name: "flow_rates",
          color: "green-text-gradient",
        },
        {
          name: "danger",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  