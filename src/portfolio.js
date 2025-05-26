/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ronnachai Verasumrit's Portfolio",
  description:
    "Welcome to my portfolio website",
  og: {
    title: "Ronnachai Verasumrit Portfolio",
    type: "website",
    url: "http://ronnachai.com/",
  },
};

//Home Page
const greeting = {
  title: "Ronnachai Verasumrit",
  logo_name: "RonnachaiVerasumrit",
  nickname: "Sax",
  subTitle:
    "Welcome to my portfolio website.",
  resumeLink:
    "https://drive.google.com/file/d/1nfrZsxio1-qS48G7uFiQY6_TA-0px1qX/view?usp=drive_link",
  portfolio_repository: "",
  githubProfile: "",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ronnachai/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:ronnachai.sax@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  // Add or remove social media links as needed
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React, NextJS",
        "⚡ Creating application backend in Node, Express, NestJS",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
      ],
    }
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Kasetsart University (Bangken)",
      subtitle: "Computer Science",
      logo_path: "logo_ku.png",
      alt_name: "Kasetsart University",
      duration: "2013 - 2017",
      descriptions: [],
      website_link: "https://www.ku.ac.th/th/",
    },
  ],
};

const certifications = {
  certifications: [
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "I'm a Senior Full-Stack Developer with over 7 years of experience in building and maintaining scalable web applications. My main stack includes React, Next.js, Node.js, PostgreSQL, and MongoDB.I've worked on various platforms such as e-commerce, real estate, and digital services. I've also led small teams of developers, where I provided technical guidance, conducted code reviews, and ensured smooth delivery of features within timelines.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Full-Stack Developer",
          company: "Deft dev",
          company_url: "https://www.deftdev.tech/",
          logo_path: "deftdev_logo.png",
          duration: "August 2023 - February 2025",
          location: "Bangkok, Thailand",
          description:
            "At Deftdev, I worked as a Senior Full-Stack Developer, leading the development of back-office and trade web systems for a crypto exchange platform and building admin and counter web applications for an EV rental service. I was responsible for designing scalable backend services, integrating APIs, managing user and transaction data, and collaborating with cross-functional teams using technologies like React.js, Node.js, PostgreSQL, MongoDB, and Docker.",
          color: "#000000",
        },
        {
          title: "Software Engineer",
          company: "Rentspree",
          company_url: "https://www.rentspree.com/",
          logo_path: "rentspree_logo.png",
          duration: "February 2022 - July 2023",
          location: "Bangkok, Thailand",
          description:
            "At RentSpree, I worked as a Software Engineer on a U.S.-based real estate platform, where I was responsible for developing frontend and backend features. I led the integration of Stripe for the rent payment system, including identity verification for landlords and company-wide payment restructuring. I collaborated closely with cross-country teams, focusing on building secure, scalable, and maintainable systems using React.js, Node.js, and cloud services.",
          color: "#0879bf",
        },
        {
          title: "Software Developer",
          company: "Muze Innovation",
          company_url: "https://www.muze.co.th/",
          logo_path: "muze_logo.png",
          duration: "June 2017 - January 2022",
          location: "Bangkok, Thailand",
          description:
            "At Muze Innovation, I worked as a Software Developer focusing on e-commerce websites for well-known brands such as Superdry, McJean, and Warrix. I was responsible for developing and maintaining frontend and backend features using React.js, Node.js, Magento 2, and deploying on AWS. My role involved integrating third-party APIs, optimizing performance, and ensuring responsive, user-friendly interfaces tailored to business requirements.",
          color: "#9b1578",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Work Experience & Tech Stack",
  description:
    "My professional journey showcases my expertise in full-stack development, cloud services, and e-commerce solutions. I've worked with modern technologies to build scalable applications and deliver exceptional user experiences.",
  avatar_image_path: "projects_image.svg",
};
// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "",
    subtitle:
      "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
