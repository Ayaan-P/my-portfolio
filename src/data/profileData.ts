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
      aboutText: `Hi, I’m Ayaan, a software/AI engineer and founder with a passion for building products that make life easier and more insightful.
I studied Computer Engineering at UIUC, worked as a federal contractor in DC, and later joined a biotech startup developing deep learning models for early cancer detection. Now, I’m pursuing my Master’s in AI at Northwestern, refining my expertise in machine learning, automation, and product design.
I’m fascinated by how AI can enhance everyday experiences. This led me to create dytto, an AI-driven journaling app that seamlessly captures and analyzes daily life—solving the problem of journaling being too much effort while creating a memory bank that lasts forever.
`,
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
      date: "August 2017 - December 2020",
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
      sectionTitle: "American Family",
      subtitle: "Software Engineering Intern",
      aboutText: "Interning...",
      date: "June 2025 - August 2025",
      imgSrc: BostonImg
    },
    {
      id: 1,
      sectionTitle: "Epigeneres Biotech",
      subtitle: "Machine Learning Engineer",
      aboutText: "- Developed deep learning models for early cancer detection",
      date: "October 2023 - August 2024",
      imgSrc: EpigeneresImg
    },
    {
      id: 2,
      sectionTitle: "Karsun Solutions LLC",
      subtitle: "Software Engineer",
      aboutText: "- Developed  large-scale web applications for the FAA and GSA",
      date: "March 2021 - september 2023", 
      imgSrc: KarsunImg
    },
    {
      id: 3,
      sectionTitle: "Network International LLC",
      subtitle: "Software Engineering Intern",
      aboutText: `- Developed payment processing solutions`,
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
      imgSrc: DTIImg,
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
