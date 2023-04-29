import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  flutter,
  html,
  css,
  reactjs,
  kotlin,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  firebase,
  swam_tech,
  walee,
  jobify,
  upmeal_app,
  talawa,
  instagram,
  shopApp,
  threejs,
  upmeal,
  GDSC,
  community,
  yaruq,
  shahryar
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

const services = [
  {
    title: 'Web Developer',
    icon: web
  },
  {
    title: 'Mobile Application Developer',
    icon: mobile
  },
  {
    title: 'Backend Developer',
    icon: backend
  },
  {
    title: 'UI/UX Designer',
    icon: creator
  }
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'Flutter',
    icon: flutter
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Kotlin',
    icon: kotlin
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'Three JS',
    icon: threejs
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'figma',
    icon: figma
  },
  {
    name: 'Firebase',
    icon: firebase
  }
]

const experiences = [
  {
    title: 'Flutter Developer',
    company_name: 'SWAM Tech',
    icon: swam_tech,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining mobile applications using Flutter and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'MERN Stack Developer',
    company_name: 'Walee',
    icon: walee,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'As a MERN stack developer, I worked extensively with React.js and related technologies to build and maintain web applications.',
      'Collaborating closely with designers, product managers, and other developers, I ensured that our products were of the highest quality and met our clients needs.',
      'Implementing responsive design and ensuring cross-browser compatibility.'
    ]
  },
  {
    title: 'Mobile Application Lead',
    company_name: 'GDSC NUST',
    icon: GDSC,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'As the App Lead at GDSC NUST, I have been responsible for overseeing the entire mobile app development lifecycle, from ideation and design to development, testing, and deployment.',
      'I have worked closely with team members to provide mentorship and guidance, resulting in a high-performing team that consistently delivers top-quality results.',
      'This has allowed me to develop a comprehensive understanding of mobile app development and management.'
    ]
  },
  {
    title: 'Lead Flutter Developer',
    company_name: 'Upmeal',
    icon: upmeal,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'I have been responsible for leading the development of a discounted fine dining application for users in different restaurants.',
      'Leveraging my expertise in Flutter, Dart, and related technologies, I have played a key role in the design, development of this innovative product.',
      'Working closely with cross-functional teams, including designers, product managers, and other developers, I have ensured that the application meets the highest standards of quality and user experience.'
    ]
  }
]

const testimonials = [
  {
    testimonial:
      'As an intern, he was able to showcase his technical expertise and strong communication skills, which were essential to the successful delivery of our MVP.',
    name: 'Shahryar Khan',
    designation: 'CEO',
    company: 'SWAM Tech',
    image: shahryar
  },
  {
    testimonial:
      'During his tenure with our school, he displayed exceptional professionalism, work ethic, and dedication to his role. Highly recommend her for any future endeavors.',
    name: 'Dorothea Stubs',
    designation: 'Head',
    company: 'Excalibur',
    image: 'https://randomuser.me/api/portraits/women/6.jpg'
  },
  {
    testimonial:
      'He demonstrated exceptional skills in software development, which were evident in the timely delivery of the Minimum Viable Product (MVP) for the launch.',
    name: 'Yaruq Nadeem',
    designation: 'Head',
    company: 'NSTP',
    image: yaruq
  }
]

const projects = [
  {
    name: 'Jobify',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'JS',
        color: 'blue-text-gradient'
      },

      {
        name: 'laravel',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: jobify,
    source_code_link: 'https://github.com/ALIRAZA17/web-project'
  },
  {
    name: 'Coffee Shop App',
    description:
      'A mobile application that allows customers to order coffee and other beverages on the go. It provides a convenient way to browse the menu, place orders, without any wait. ',
    tags: [
      {
        name: 'kotlin',
        color: 'blue-text-gradient'
      },
      {
        name: 'restapi',
        color: 'green-text-gradient'
      }
    ],
    image: shopApp,
    source_code_link: 'https://github.com/ALIRAZA17/Shop-App-Kotlin'
  },
  {
    name: 'Talawa App',
    description:
      'Open-Source Mobile Application which helps community based organizations collaborate with their members through sharing information, events, and different resources.',
    tags: [
      {
        name: 'Flutter',
        color: 'blue-text-gradient'
      },
      {
        name: 'GraphQL',
        color: 'green-text-gradient'
      },
      {
        name: 'MongoDB',
        color: 'pink-text-gradient'
      }
    ],
    image: talawa,
    source_code_link: 'https://github.com/ALIRAZA17/talawa'
  },
  {
    name: 'Marham',
    description:
      'A platform to connect people in need with those who are willing and able to provide assistance.  Specifically designed to help those who are struggling financially.',
    tags: [
      {
        name: 'Flutter',
        color: 'blue-text-gradient'
      },
      {
        name: 'Firebase',
        color: 'green-text-gradient'
      },
      {
        name: 'GMAPI',
        color: 'pink-text-gradient'
      }
    ],
    image: community,
    source_code_link: 'https://github.com/ALIRAZA17/Marham'
  },
  {
    name: 'Upmeal',
    description:
      'A platform where you can avail discounts on every item on the menu. Upmeal will connect hungry tummies to empty tables by providing time-based discounts to users.',
    tags: [
      {
        name: 'Flutter',
        color: 'blue-text-gradient'
      },
      {
        name: 'Nodejs',
        color: 'green-text-gradient'
      },
      {
        name: 'ML',
        color: 'pink-text-gradient'
      }
    ],
    image: upmeal_app,
    source_code_link: 'https://github.com/ALIRAZA17/upmeal_app'
  },
  {
    name: 'Instagram Clone',
    description:
      'The mobile application serves as a social media platform that allows users to share photos and videos with their followers, similar to the popular social media app Instagram.',
    tags: [
      {
        name: 'Flutter',
        color: 'blue-text-gradient'
      },
      {
        name: 'Firebase',
        color: 'green-text-gradient'
      },
      {
        name: 'restapi',
        color: 'pink-text-gradient'
      }
    ],
    image: instagram,
    source_code_link: 'https://github.com/ALIRAZA17/Instagram-clone-Flutter'
  }
]

export { services, technologies, experiences, testimonials, projects }
