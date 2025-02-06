import { ProfileSection } from '../types/profile';
import ProfilePic from "../images/profile.jpg";
import NorthwesternImg from '../images/Northwestern.png';
import CathedralImg from '../images/cathedral.jpg';
import UIUCImg from '../images/uiuc.jpg';
import EpigeneresImg from '../images/epigen.jpeg';
import NetworkImg from '../images/network.jpeg';
import KarsunImg from '../images/karsun.jpeg';
import GitImg from '../images/DTI.webp';
import GamePng from '../images/Cliff.png';
import ChicagoImg from '../images/Chicago.jpg';


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
      aboutText: `- Experienced Full Stack Developer with 3+ years in enterprise software development
- Machine Learning Engineer focused on cancer detection research
- MS in Artificial Intelligence candidate at Northwestern University (Fall 2024)
- Strong foundation in computer science fundamentals and modern software development practices`,
      date: "",
      imgSrc: ProfilePic,
      about: true
    }
  ],
  education: [
    {
      id: 1,
      sectionTitle: "Northwestern University",
      subtitle: "Master of Science in Artificial Intelligence",
      aboutText: "Focus on Deep Learning, Computer Vision and Natural Language Processing",
      date: "September 2024 - December 2025",
      imgSrc: NorthwesternImg
    },
    {
      id: 2, 
      sectionTitle: "University of Illinois at Urbana-Champaign",
      subtitle: "Bachelor of Science in Computer Engineering",
      aboutText: "Coursework in Data Structures, Algorithms, Machine Learning and Software Engineering",
      date: "August 2017 - December 2021",
      imgSrc: UIUCImg
    },
    {
      id: 3,
      sectionTitle: "Cathedral and John Connon School",
      subtitle: "ICSE, ISC Science",
      aboutText: "",
      date: "May 2017",
      imgSrc: CathedralImg
    }
  ],
  work: [
    {
      id: 1,
      sectionTitle: "Epigeneres Biotech",
      subtitle: "Machine Learning Engineer",
      aboutText: `- Developed deep learning models for early cancer detection
- Building ML pipelines and data processing workflows`,
      date: "October 2023 - August 2024",
      imgSrc: EpigeneresImg
    },
    {
      id: 2,
      sectionTitle: "Karsun Solutions LLC",
      subtitle: "Software Engineer",
      aboutText: `- Developed  large-scale web applications for the FAA and GSA
- Full stack development using React, Node.js, and Cloud technologies
- Implemented CI/CD pipelines and automated testing frameworks`,
      date: "March 2021 - september 2023", 
      imgSrc: KarsunImg
    },
    {
      id: 3,
      sectionTitle: "Network International LLC",
      subtitle: "Software Engineering Intern",
      aboutText: `- Developed payment processing solutions
- Built microservices and RESTful APIs`,
      date: "May 2018 - July 2018",
      imgSrc: NetworkImg
    }
  ],
  projects: [
    {
      id: 1,
      sectionTitle: "Drug Target Interaction Prediction",
      aboutText: "XGBoost model to predict DTIs by analyzing chemical structures in the SMILES format",
      date: "2024",
      imgSrc: GitImg,
    },
    {
      id: 2,
      sectionTitle: "Chicago Energy Rating Predictor",
      aboutText: "Machine Learning models to predict the Chicago energy ratings of new buildings",
      date: "2024",
      imgSrc: ChicagoImg,
    },
    {
      id: 3,
      sectionTitle: "2D Game Development",
      aboutText: "Pokemon style 2D game using unity",
      date: "2020",
      imgSrc: GamePng,
    }
  ]
};