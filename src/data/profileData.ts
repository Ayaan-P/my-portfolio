import { ProfileSection } from '../types/profile';
import ProfilePic from "../images/profile.jpg";
import NorthwesternImg from '../images/Northwestern.png';
import CathedralImg from '../images/Cathedral.png';
import UIUCImg from '../images/uiuc.png';
import EpigeneresImg from '../images/epigen.png';
import NetworkImg from '../images/Network.png';
import KarsunImg from '../images/Karsun.png';
import DTIImg from '../images/DTI.png';
import BostonImg from '../images/Boston.png';
import GamePng from '../images/Cliff.png';
import ChicagoImg from '../images/Chicago.png';
import CTImg from '../images/CT.png';


interface ProfileData {
  about: ProfileSection[];
  education: ProfileSection[];
  work: ProfileSection[];
  projects: ProfileSection[];
}

export const profileData: ProfileData = {
  about: [
    {
      id: 1,
      sectionTitle: "Full Stack Developer and ML Engineer",
      aboutText: `Hi, I'm Ayaan, a software/AI engineer and founder with a passion for building products that make life easier and more insightful.
I studied Computer Engineering at UIUC, worked as a federal contractor in DC, and later joined a biotech startup developing deep learning models for early cancer detection. Now, I'm pursuing my Master's in AI at Northwestern, refining my expertise in machine learning, automation, and product design.
I'm fascinated by how AI can enhance everyday experiences. This led me to create dytto, an AI-driven journaling app that seamlessly captures and analyzes daily life—solving the problem of journaling being too much effort while creating a memory bank that lasts forever.
`,
      date: "",
      imgSrc: ProfilePic,
      about: true,
      expandedDetails: {
        fullDescription: `As a Full Stack Developer and Machine Learning Engineer, I bridge the gap between cutting-edge AI research and practical software applications. My journey began with a solid foundation in Computer Engineering at UIUC, where I developed a strong understanding of both hardware and software systems.

My professional experience spans from federal contracting work in Washington DC to biotech innovation, where I applied deep learning techniques to solve critical healthcare challenges. This diverse background has given me a unique perspective on how technology can be leveraged across different domains.

Currently pursuing advanced studies in Artificial Intelligence at Northwestern University, I'm deepening my expertise in neural networks, computer vision, and natural language processing. My goal is to create intelligent systems that not only process data efficiently but also provide meaningful insights and enhance human experiences.

The culmination of my passion and expertise is dytto, an AI-powered journaling application I founded that transforms how people capture and reflect on their daily experiences. By automating the collection of contextual data and generating personalized narratives, dytto makes journaling effortless while creating a rich, searchable memory bank that grows more valuable over time.`,
        skills: [
          "Full Stack Development (React, Node.js, TypeScript)",
          "Machine Learning & Deep Learning",
          "Computer Vision",
          "Natural Language Processing",
          "Product Design & Development",
          "AI Application Architecture"
        ]
      }
    }
  ],
  education: [
    {
      id: 1,
      sectionTitle: "Northwestern University",
      subtitle: "Master of Science in Artificial Intelligence",
      aboutText: "I'm pursuing an advanced degree in Artificial Intelligence with focus on deep learning, computer vision, and natural language processing",
      date: "September 2024 - December 2025",
      imgSrc: NorthwesternImg,
      expandedDetails: {
        fullDescription: "",
        skills: [
          "Deep Neural Networks",
          "Natural Language Processing",
          "Reinforcement Learning",
          "AI Ethics & Responsible AI"
        ],
        achievements: [
          "GPA - 4.0",
        ],
        links: [
          {
            label: "Northwestern AI Program",
            url: "https://www.mccormick.northwestern.edu/artificial-intelligence/"
          }
        ]
      }
    },
    {
      id: 2, 
      sectionTitle: "University of Illinois at Urbana-Champaign",
      subtitle: "Bachelor of Science in Computer Engineering",
      aboutText: "My undergraduate education provided me with a strong foundation in Computer Engineering. The program's rigorous curriculum covered both hardware and software aspects",
      date: "August 2017 - December 2020",
      imgSrc: UIUCImg,
      expandedDetails: {
       
        skills: [
          "Data Structures & Algorithms",
          "Computer Architecture",
          "Digital Signal Processing",
          "Machine Learning Fundamentals",
          "Software Engineering"
        ],
        achievements: [
        
        ],
        links: [
          {
            label: "UIUC ECE Department",
            url: "https://ece.illinois.edu/"
          }
        ]
      }
    },
    {
      id: 3,
      sectionTitle: "Cathedral and John Connon School",
      subtitle: "ICSE, ISC Science",
      aboutText: "I completed my secondary education following the ICSE and ISC Science curriculum ",
      date: "May 2017",
      imgSrc: CathedralImg,
      expandedDetails: {
        
        achievements: [
          
        ]
      }
    }
  ],
  work: [
    {
      id: 1,
      sectionTitle: "American Family Insurance",
      subtitle: "Software Engineering Intern",
      aboutText: "Upcoming internship at where I'll be working on software solutions in the insurance technology space",
      date: "June 2025 - August 2025",
      imgSrc: BostonImg,
      expandedDetails: {

        skills: [
          "Full Stack Development",
          "Cloud Computing",
          "Data Analytics",
          "Insurance Technology"
        ]
      }
    },
    {
      id: 2,
      sectionTitle: "Epigeneres Biotech",
      subtitle: "Machine Learning Engineer",
      aboutText: "I worked on the developing deep learning models for early cancer detection",
      date: "October 2023 - August 2024",
      imgSrc: EpigeneresImg,
      expandedDetails: {

        skills: [
          "Deep Learning",
          "Data Analysis",
          "TensorFlow",
          "Healthcare",
          "Optimization"
        ],
        
      }
    },
    {
      id: 3,
      sectionTitle: "Karsun Solutions LLC",
      subtitle: "Software Engineer",
      aboutText: "I developed large-scale web applications for federal agencies including the Federal Aviation Administration (FAA) and General Services Administration (GSA). My work focused on modernizing legacy systems, implementing secure cloud-based solutions, and creating intuitive user interfaces for complex government operations",
      date: "March 2021 - September 2023", 
      imgSrc: KarsunImg,
      expandedDetails: {

        skills: [
          "Enterprise Application Development",
          "Cloud Migration (AWS)",
          "Agile Development Methodologies",
          "RESTful API Design",
      
        ],
        
      }
    },
    {
      id: 4,
      sectionTitle: "Network International LLC",
      subtitle: "Software Engineering Intern",
      aboutText: `During my internship at Network International, a leading payment solutions provider in the Middle East and Africa, I contributed to the development of robust payment processing systems`,
      date: "May 2018 - July 2018",
      imgSrc: NetworkImg,
      expandedDetails: {
        skills: [
          "Payment Gateway Integration",
         
          "API Development",
          "Testing"
        ],
       
      }
    }
  ],
  projects: [
    {
      id: 1,
      sectionTitle: "Drug Target Interaction Prediction",
      aboutText: "ML model that analyzes chemical structures represented in the SMILES (Simplified Molecular Input Line Entry System) format to identify potential interactions between drugs and biological targets. Accelerates the drug discovery process by computationally predicting promising drug candidates before laboratory testing",
      date: "2024",
      imgSrc: DTIImg,
      expandedDetails: {
        skills: [
          "XGBoost",
          "Feature Engineering",
          "Data Analysis"
        ],
        achievements: [
          "Achieved 85% prediction accuracy on benchmark datasets",
        ],
        links: [
          {
            label: "Project Repository",
            url: "https://github.com/ayaanpupala/dti-prediction"
          }
        ]
      }
    },
    {
      id: 4,
      sectionTitle: "Low Dose CT Scan Upscaler",
      aboutText: "Deep Learning model to enchance the resolution of low dose CT scans using a GAN",
      date: "2024",
      imgSrc: CTImg,
      expandedDetails: {
        skills: [
          "Generative Adversarial Networks",
          "Deep Learning",
          
        ],
        
        links: [
          {
            label: "Project Repository",
            url: "https://github.com/ayaanpupala/dti-prediction"
          }
        ]
      }
    },
    
    {
      id: 2,
      sectionTitle: "Chicago Energy Rating Predictor",
      aboutText: "Machine Learning models to predict the Chicago energy ratings of new buildings",
      date: "2024",
      imgSrc: ChicagoImg,
      expandedDetails: {
        fullDescription: "The Chicago Energy Rating Predictor is a machine learning system I developed to forecast energy efficiency ratings for new buildings in Chicago. By analyzing architectural features, building materials, location data, and historical energy consumption patterns, the model provides accurate predictions of how new constructions will perform under the city's energy rating system. This tool helps architects and developers optimize their designs for energy efficiency before construction begins.",
        skills: [
          "Regression Modeling", 
          "Feature Selection",
          "Ensemble Learning Methods",
        ],
        achievements: [
     
        ],
        links: [
          {
            label: "Project Repository",
            url: ""
          }
        ]
      }
    },
    {
      id: 3,
      sectionTitle: "2D Game Development",
      aboutText: "I designed and developed a Pokémon-inspired 2D game in Unity",
      date: "2020",
      imgSrc: GamePng,
      expandedDetails: {

        skills: [
          "Unity Game Development",
          "C# Programming",
          "2D Animation",
          "Game Design",
          "Turn-based Combat Systems",
          "Pixel Art Creation"
        ],
       
        
      }
    }
  ]
};
