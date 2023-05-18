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
  shahryar,
  insta_logo,
  linkedIn_logo,
  gmail
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

const experiences_icons = [
  {
    icon: swam_tech
  },
  {
    icon: walee
  },
  {
    icon: GDSC
  },
  {
    icon: upmeal
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

const options = [
  {
    logo: linkedIn_logo,
    link: 'https://www.linkedin.com/in/ali-raza-296793219/'
  },
  {
    logo: insta_logo,
    link: 'https://www.instagram.com/m_aliiii_5/'
  },
  {
    logo: gmail,
    link: 'mailto:ialidar2001@gmail.com'
  }
]

export {
  services,
  technologies,
  experiences_icons,
  testimonials,
  projects,
  options
}
