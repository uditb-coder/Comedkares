
import { Program, Hub, Project, LeadershipMember, Milestone } from './types';

export const COLORS = {
  primary: '#003057', 
  secondary: '#FFB81C', 
  accent: '#E7F0F7', 
  text: '#1a1a1a',
  light: '#fcfcfc'
};

/**
 * Vertical SVG logo for ComedKares matching the screenshot layout.
 */
const svgLogo = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
  <g transform="translate(100, 10)">
    <path fill="#003057" d="M100,0 L0,40 L100,80 L200,40 Z"/>
    <path fill="#FFB81C" d="M40,60 L100,85 L160,60 v20 L100,105 L40,80 Z"/>
    <path fill="#003057" d="M200,40 v65 h-5 v-65 Z"/>
  </g>
  <text x="200" y="160" fill="#003057" font-family="Arial, sans-serif" font-weight="900" font-size="52" text-anchor="middle" letter-spacing="-1">Comedkares</text>
</svg>
`;

export const LOGO_URL = `data:image/svg+xml;base64,${btoa(svgLogo.trim())}`;

export const PARTNERS = {
  academic: [
    { name: 'VTU', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Visvesvaraya_Technological_University_logo.png/120px-Visvesvaraya_Technological_University_logo.png' },
    { name: 'IISc', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Indian_Institute_of_Science_logo.png/150px-Indian_Institute_of_Science_logo.png' },
    { name: 'IIT Bombay', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/150px-Indian_Institute_of_Technology_Bombay_Logo.svg.png' },
    { name: 'RVCE', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/RV_College_of_Engineering_Logo.png/150px-RV_College_of_Engineering_Logo.png' },
    { name: 'PESU', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/PES_University_logo.png/150px-PES_University_logo.png' },
    { name: 'BMSCE', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/BMS_College_of_Engineering_logo.png/150px-BMS_College_of_Engineering_logo.png' },
    { name: 'MSRIT', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/M._S._Ramaiah_Institute_of_Technology_logo.png/150px-M._S._Ramaiah_Institute_of_Technology_logo.png' },
    { name: 'MIT', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/150px-MIT_logo.svg.png' },
    { name: 'Stanford', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/150px-Stanford_Cardinal_logo.svg.png' },
    { name: 'Oxford', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/150px-Oxford-University-Circlet.svg.png' },
    { name: 'IIT Delhi', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/IIT_Delhi_logo.svg/150px-IIT_Delhi_logo.svg.png' },
    { name: 'IIT Madras', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/150px-IIT_Madras_Logo.svg.png' },
    { name: 'NITK', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/21/NITK_Logo.png/150px-NITK_Logo.png' },
    { name: 'BITS', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/150px-BITS_Pilani-Logo.svg.png' },
    { name: 'Manipal', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Manipal_University_logo.png/150px-Manipal_University_logo.png' },
    { name: 'GEF', logo: 'https://comedkares.org/wp-content/uploads/2023/04/GEF-Logo.png' },
    { name: 'ERA', logo: 'https://comedkares.org/wp-content/uploads/2023/04/ERA-Logo.png' },
    { name: 'VIT', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_logo_2017.svg/150px-Vellore_Institute_of_Technology_logo_2017.svg.png' },
    { name: 'Amrita', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Amrita_Vishwa_Vidyapeetham_logo.png/150px-Amrita_Vishwa_Vidyapeetham_logo.png' },
    { name: 'SRM', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/SRM_University_logo.png/150px-SRM_University_logo.png' },
    { name: 'Sathyabama', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Sathyabama_University_Logo.png/150px-Sathyabama_University_Logo.png' },
    { name: 'Anna University', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Anna_University_Logo.png/150px-Anna_University_Logo.png' }
  ],
  industry: [
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/150px-Google_2015_logo.svg.png' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/150px-Microsoft_logo_%282012%29.svg.png' },
    { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/150px-Amazon_Web_Services_Logo.svg.png' },
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/150px-IBM_logo.svg.png' },
    { name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282020%2C_light_blue%29.svg/150px-Intel_logo_%282020%2C_light_blue%29.svg.png' },
    { name: 'NVIDIA', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/150px-Nvidia_logo.svg.png' },
    { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Adobe_Corporate_logo.svg/150px-Adobe_Corporate_logo.svg.png' },
    { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/150px-Cisco_logo_blue_2016.svg.png' },
    { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/150px-Oracle_logo.svg.png' },
    { name: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/150px-SAP_2011_logo.svg.png' },
    { name: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/150px-Dell_logo_2016.svg.png' },
    { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/150px-Salesforce.com_logo.svg.png' },
    { name: 'Siemens', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/150px-Siemens-logo.svg.png' },
    { name: 'Bosch', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-Logo.svg/150px-Bosch-Logo.svg.png' },
    { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/150px-Samsung_Logo.svg.png' },
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/150px-Apple_logo_black.svg.png' },
    { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/150px-Tesla_Motors.svg.png' },
    { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/150px-Meta_Platforms_Inc._logo.svg.png' },
    { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
    { name: 'Arduino', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg' },
    { name: 'Autodesk', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Autodesk_logo.svg' },
    { name: 'Unity', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Unity_2021.svg/150px-Unity_2021.svg.png' }
  ]
};

// Fix: Added missing SOCIAL_LINKS export used by Footer component
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/comedkares',
  instagram: 'https://instagram.com/comedkares',
  linkedin: 'https://linkedin.com/company/comedkares',
  twitter: 'https://twitter.com/comedkares'
};

export const CONTACT_EMAIL = 'reachus@comedkares.org';

export const LEADERSHIP: LeadershipMember[] = [
  {
    name: 'Dr. M. R. Jayaram',
    designation: 'Chairman, COMEDK',
    image: 'https://comedkares.org/wp-content/uploads/2023/04/M-R-Jayaram.jpg',
    bio: 'A visionary leader in education, Dr. Jayaram is the Chairman of Gokula Education Foundation and COMEDK.'
  },
  {
    name: 'Dr. S. Kumar',
    designation: 'Executive Secretary, COMEDK',
    image: 'https://comedkares.org/wp-content/uploads/2023/04/image834.webp',
    bio: 'Oversees the strategic execution of ComedKares hubs across Karnataka.'
  },
  {
    name: 'Mr. Muralidhar Ponnaluri',
    designation: 'CEO, ERA Foundation & ComedKares',
    image: 'https://comedkares.org/wp-content/uploads/2023/04/Muralidhar2-Copy-480x519.jpg',
    bio: 'Brings extensive industrial experience to bridging the gap between academia and industry.'
  }
];

export const JOURNEY_MILESTONES: Milestone[] = [
  { date: 'Oct 2022', title: 'Concept', description: 'The vision of experiential engineering learning.', icon: 'Pencil' },
  { date: 'Dec 2022', title: 'Launch', description: 'First hubs established in Bengaluru.', icon: 'Building2' }
];

export const PROGRAMS: Program[] = [
  {
    id: 'idt',
    title: 'Innovation & Design Thinking',
    category: 'Foundational',
    overview: 'The fundamental track designed to transition students from theoretical learning to user-centric prototyping.',
    mode: 'Hybrid',
    tools: ['Figma', 'Design Sprints'],
    objectives: ['Master IDT framework']
  },
  {
    id: 'robotics',
    title: 'Robotics & Automation',
    category: 'Core Tech',
    overview: 'Physical construction and programming of robotic systems, covering kinematics and sensors.',
    mode: 'Physical Hub-based',
    tools: ['Arduino', 'ROS'],
    objectives: ['Build autonomous bots']
  },
  {
    id: 'iot',
    title: 'Internet of Things (IoT)',
    category: 'Core Tech',
    overview: 'Building connected systems that bridge physical hardware with cloud intelligence.',
    mode: 'Hybrid',
    tools: ['ESP32', 'MQTT'],
    objectives: ['Deploy sensor networks']
  },
  {
    id: 'data-science-ml',
    title: 'Data Science & AI/ML',
    category: 'Advanced Tech',
    overview: 'Extracting intelligence from data using statistical models and deep learning architectures.',
    mode: 'Hybrid',
    tools: ['Python', 'TensorFlow', 'PyTorch'],
    objectives: ['Build predictive models', 'Deploy neural networks']
  },
  {
    id: 'applied-ai-agentic',
    title: 'Applied AI & Agentic Systems',
    category: 'Next-Gen Tech',
    overview: 'The frontier of AI: Building autonomous agents, LLM reasoning systems, and intelligent workflows.',
    mode: 'Hybrid',
    tools: ['LangChain', 'OpenAI', 'Vector DBs'],
    objectives: ['Build AI Agents', 'Implement RAG architectures']
  },
  {
    id: 'makex-internships',
    title: 'MakeX Internships',
    category: 'Industrial track',
    overview: 'Intensive 16-week project-based learning tracks for building industrial prototypes.',
    mode: 'Physical / Hub-Based',
    tools: ['Industrial Mentors', '3D Prototyping'],
    objectives: ['Industrial grade project completion']
  }
];

export const HUBS: Hub[] = [
  { id: 'yelahanka', name: 'Bengaluru – Yelahanka', location: 'TABS Commercial Complex', facilities: ['3D Printing'], programs: ['All'], contact: '8951955092', coordinates: { x: 55, y: 78 } }
];

export const PROJECTS: Project[] = [
  { id: 'p1', title: 'Smart Rainwater', problem: 'Urban water scarcity.', solution: 'IoT monitoring.', involvement: 'IoT Track', category: 'Programs', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800' }
];
