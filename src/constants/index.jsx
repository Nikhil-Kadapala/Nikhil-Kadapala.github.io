// Import necessary assets and icons
import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa6";

import pythonLogo from "../assets/python.svg";
import javaLogo from "../assets/java.svg";
import clogo from "../assets/c.svg";
import cppLogo from "../assets/c++.svg";
import sqlLogo from "../assets/sql.svg";
import jsLogo from "../assets/javascript.svg";
import tsLogo from "../assets/typescript.svg";
import reactLogo from "../assets/react.svg";
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import torch from "../assets/pytorch.svg";
import gitLogo from "../assets/git.svg";
import githubLogo from "../assets/github.svg";
import gitlabLogo from "../assets/gitlab.svg";
import jupyterLogo from "../assets/jupyter.svg";
import sklearn from "../assets/sklearn.svg";
import pandasLogo from "../assets/pandas.svg";
import awsLogo from "../assets/aws.svg";
import azureLogo from "../assets/azure.svg";
import gcpLogo from "../assets/gcp.svg";

import image1 from "../assets/project1.png";
import image2 from "../assets/project2.svg";
import image3 from "../assets/project3.svg";

import cert1 from "../assets/microsoft_cert.png";
import cert2 from "../assets/google_cert.png";
import cert3 from "../assets/hackerrank.png";
import cert4 from "../assets/pagerduty.png";
import cert5 from "../assets/atlassian.png";

import pdfLogo from "../assets/pdfFile.svg";

// Updated NAVIGATION_LINKS to remove Education
export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  //{ label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "#resume" },
];

export const PROFILE = {
  name: (
    <span style={{ fontFamily: "", fontSize: "3rem", color: "#FFFFFF", fontWeight: "700" }}>
      Nikhil Kadapala
    </span>
  ),
  info: [
    "AI & ML Enthusiast | Expertise in Python Programming, DSA, Machine Learning .",
  ],
};

export const ABOUT = {
  text1:
    "Hi! I'm Nikhil👋",
  text2: [
    "I'm always on the lookout for oppoertunities that push me out of my comfort zone, something that keeps me excited to wake up and dive in every day. I love learning new things, figuring out how they work, and then using that knowledge to create something unique and meaningful.", 
    "For me, it's all about solving interesting problems and building applications that feel innovative and impactful. If it's challenging and gives me room to grow, I'm all in.", 
    "I'll admit it—I'm not the 'grind LeetCode all day' kind of person. But what I bring to the table is a strong focus on top-down analysis and a first-principles approach to problem-solving.",
    "I love breaking down complex challenges into actionable steps and collaborating with my team to ship clean, working code. Oh, and yes, I know my way around GitHub and can definitely merge that PR 😊.",
    "PS: I learned React.js, Java script, HTML, and CSS to build this website over the winter break ❄️ 🔍📖💻 🏋️‍♂️",
  ],
};

// Projects section remains unchanged
export const PROJECTS = [
  {
    title: "Claimifying Social Media Posts with Self-Refinement",
    subtitle: "This project uses a combination of prompting strategies and an iterative Self-Refinement stage. In this stage, the same LLM that generates the initial claim provides feedback based on specific criteria evaluating the check-worthiness of the claim against the input text. This feedback, along with the input and initial claim, is fed back into the same LLM, which generates a refined version of the claim.",
    image: image1,
    githubLink: "https://github.com/Nikhil-Kadapala/clef2025-checkthat-lab-task2",
    demoLink: "https://nikhil-kadapala.github.io/clef2025-checkthat-lab-task2"
  },
  {
    title: "Resume Job Description Ranking",
    subtitle: "This project exploits the capability of LLMs towards evaluating resumes against a given job description and classify them as either good fit, partial fit, or not fit along with providing an overall score, a rationale explaining the reasons for the classification and the score, and suggestions to better tailor the resume to fit the job description including personalized recommendations to close any and all gaps in the resume.",
    image: image2,
    githubLink: "https://github.com/Nikhil-Kadapala/Resume-Job-Description-Ranking",
    demoLink: "https://nikhil-kadapala.github.io/Resume-Job-Description-Ranking"
  },
  {
    title: "Sentiment Analysis through Human-aligned Rationalization",
    subtitle: "A project on teaching Deep Neural Networks to Rationalize through human-annotated training data and LIME Feedback. The model is trained to think like a human when predicting sentiment. The model's internal rationalization is validated through LIME Analysis of sampled outputs and cross-verifying the highest ranking features with human-annotated data.",
    image: image3,
    githubLink: "https://github.com/Nikhil-Kadapala/Rational-NeuralNets",
    demoLink: "https://nikhil-kadapala.github.io/Rational-NeuralNets"
  },
];

// Skills section remains unchanged
export const SKILLS = [
  { src: pythonLogo, name: "Python"},
  { src: javaLogo, name: "Java" },
  { src: clogo, name: "C" },
  //{ src: cppLogo, name: "C++" },
  { src: sqlLogo, name: "SQL" },
  { src: jsLogo, name: "JavaScript" },
  { src: tsLogo, name: "TypeScript" },
  { src: reactLogo, name: "React" },
  { src: htmlLogo, name: "HTML" },
  { src: cssLogo, name: "CSS" },
  { src: torch, name: "PyTorch" },
  { src: gitLogo, name: "Git" },
  { src: githubLogo, name: "GitHub" },
  { src: gitlabLogo, name: "GitLab" },
  { src: jupyterLogo, name: "Jupyter" },
  //{ src: sklearn, name: "Scikit-learn" },
  { src: pandasLogo, name: "Pandas" },
  { src: awsLogo, name: "AWS" },
  //{ src: azureLogo, name: "Azure" },
  //{ src: gcpLogo, name: "GCP" },
];

// Updated to keep only the Experience section
export const EXPERIENCE = [
  {
    title: " Information Technology Help Desk Technician",
    company: "University of New Hampshire",
    duration: "2024 - 2025",
    description:"Provided technical support to end-users via phone, email, and in-person, resolving hardware, software, and network issues. Troubleshooted and resolved a wide range of technical problems, including operating system errors, application malfunctions, and network connectivity issues. Installed, configured, and maintained computer systems including re-imaging and end-point management. Assisted with user account management, including creating new accounts, resetting passwords, and managing user permissions. Documented all support requests and resolutions in a ticketing system. Contributed to maintaining a knowledge base of common issues and solutions."
  },
  {
    title: "SAP Security Consultant",
    company: "Tata Consultancy Services (TCS)",
    duration: "2021 - 2022",
    description:
      "SAP Security Management: Managed user accounts, roles, and authorizations, ensuring segregation of duties compliance. Security Implementation and Monitoring: Configured and implemented security measures, monitored security incidents, and ensured compliance with regulations. User Training and Documentation: Provided training on security best practices and created documentation on security configurations and procedures.",
  },
];

// Updated certifications section
export const CERTIFICATIONS = [
  {
    name: "Microsoft Data Analytics Professional",
    issuingOrganization: "Microsoft",
    issueDate: "August 2024",
    icon: cert1,
    link: "https://www.linkedin.com/learning/certificates/5d91fe163f3c87ad97c4b9d4f01bf2c4f96eb3d07a7519b8a919ef34bb7a78c1?u=127479866"
  },
  {
    name: "Google Cloud Data Analytics Professional",
    issuingOrganization: "Google",
    issueDate: "September 2024",
    icon: cert2,
    link: "https://www.credly.com/badges/9214866d-9171-442f-bd50-6f7648641955/public_url"
  },
  {
    name: "HackerRank SQL Advanced",
    issuingOrganization: "HackerRank",
    issueDate: "September 2024",
    icon: cert3,
    link: "https://www.hackerrank.com/certificates/7c0ea2e8eeb9"
  },
  {
    name: "PagerDuty DevOps Professional",
    issuingOrganization: "PagerDuty",
    issueDate: "Aug 2024",
    icon: cert4,
    link:"https://www.hackerrank.com/certificates/7c0ea2e8eeb9"
  },
  {
    name: "Atlassian Agile Project Management Professional",
    issuingOrganization: "Atlassian",
    issueDate: "April 2024",
    icon: cert5,
    link: "https://www.linkedin.com/learning/certificates/0228653ddf50d02ae45ac810794bf9c99d2aeacb1dc20807d3a4e9d7bf4b4e2c?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BpjAzQasFQ%2BaSlILimytd2Q%3D%3D"
  },
];

// Updated Social Media Links
export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/Nikhil-Kadapala",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/nikhil-kadapala",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://support.discord.com/hc/en-us/profiles/26385898744087",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
];

export const RESUME = [
  {
    path : "Resume.pdf",
    text: "Click to see Resume",
    icon: pdfLogo,
  },
];