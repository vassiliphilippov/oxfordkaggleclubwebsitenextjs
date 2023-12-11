const navContent = {
  logo: 'Oxford Kaggle Club',
  navLinks: [
    {
      item: 'What is Kaggle?',
      link: '#kaggle',
    },
    {
      item: 'About Us',
      link: '#about',
    },
    {
      item: 'Apply Now',
      link: '#apply',
    },
    {
      item: 'FAQs',
      link: '#faq',
    },
  ]
}

const heroContent = {
  title: 'Oxford Kaggle Club',
  subtitle: 'Master AI/ML with Kaggle',
  desc: 'Join Oxford Kaggle Club to tackle Kaggle AI challenges and graduate as a Master or Grandmaster, transforming your AI/ML career.',
  buttonText: 'Learn More',
  applyLink: '#helpyou',
  buttonTextTwo: 'Apply Now',
  learnLink: 'https://forms.gle/Ch1uvcLqQ4FHAhS38',
};

const brandContent = {
  title: 'Kagglers hired by',
  logos: [
    {
      src: '/logos/Google-Logo.webp',
    },
    {
      src: '/logos/Spotify-Logo.webp',
    },
    {
      src: '/logos/Gresearch-Logo.webp',
    },
    {
      src: '/logos/Nvidia-Logo.webp',
    },
    {
      src: '/logos/Janestreet-Logo.webp',
    },
    {
      src: '/logos/Dataroots-Logo.webp',
    },
    {
      src: '/logos/Airbnb-Logo.webp',
    },
    {
      src: '/logos/Seamlesscapital-Logo.webp',
    },
    {
      src: '/logos/Microsoft-Logo.webp',
    }
  ]
};

const helpYouContent = {
  title: 'Oxford Kaggle Club can help you with',
  card: [
    {
      icon: '/icons/Brain.svg',
      title: 'AI skills',
      desc: 'AI is of high demand and growing.',
    },
    {
      icon: '/icons/Rocket.svg',
      title: 'Boost CV',
      desc: 'Become Kaggle Master before graduation.',
    },
    {
      icon: '/icons/Practices.svg',
      title: 'Real-life',
      desc: 'Augment your academic skills with real-life ML projects.',
    },
    {
      icon: '/icons/Thumbs.svg',
      title: 'Social',
      desc: 'Connect with like minded individulas.',
    },
  ]
};

const spotLightContent = {
  img: '/pictures/frame_generic_light.webp',
  title: 'Kaggle - the largest platform for AI/ML Competitions',
  desc: 'Kaggle stands as the foremost arena for machine learning challenges, attracting professionals and enthusiasts globally.',
  desctwo: 'Kaggle competitions:',
  list: [
    {
      item: 'Real AI problems, not some learning exercises.',
    },
    {
      item: 'Co-hosted by world-class companies.',
    },
    {
      item: '3 months duration each',
    },
    {
      item: 'Require team work',
    },
  ]
};

const competitionContent = {
  title: "Here's a glimpse into some Kaggle Competitions",
  competitions: [
    {
      img: '/pictures/llm.webp',
      logo: '/pictures/brands-orgs/llm-logo.webp',
      title: 'LLM - Detect AI Generated Text',
      desc: 'Identify which essay was written by a large language model.',
      category: [
        {
          item: 'Featured',
        },
        {
          item: 'Code Competition',
        },
      ],
      teams: '2171 Teams',
      amount: '$110,000',
      link: 'https://www.kaggle.com/competitions/llm-detect-ai-generated-text',
    },
    {
      img: '/pictures/stanford.webp',
      logo: '/pictures/brands-orgs/stanford-logo.webp',
      title: 'Stanford Ribonanza RNA Folding',
      desc: 'Create a model that predicts the structures of any RNA molecule.',
      category: [
        {
          item: 'Research',
        },
      ],
      teams: '761 Teams',
      amount: '$100,000',
      link: 'https://www.kaggle.com/competitions/stanford-ribonanza-rna-folding',
    },
    {
      img: '/pictures/optiver.webp',
      logo: '/pictures/brands-orgs/optiver-logo.webp',
      title: 'Optiver - Trading at the Close',
      desc: 'Retrieve the landmark images from the database.',
      category: [
        {
          item: 'Featured',
        },
        {
          item: 'Code Competition',
        },
      ],
      teams: '3964 Teams',
      amount: '$100,000',
      link: 'https://www.kaggle.com/competitions/optiver-trading-at-the-close',
    },
    {
      img: '/pictures/nfl.webp',
      logo: '/pictures/brands-orgs/nfl-logo.webp',
      title: 'NFL Big Data Bowl 2024',
      desc: 'Help evaluate tackling tactics and strategy.',
      category: [
        {
          item: 'Analytics',
        },
      ],
      teams: '0 Teams',
      amount: '$100,000',
      link: 'https://www.kaggle.com/competitions/nfl-big-data-bowl-2024',
    },
    {
      img: '/pictures/sennet.webp',
      logo: '/pictures/brands-orgs/sennet-logo.webp',
      title: 'SenNet + HOA - Hacking the Human Vasculature in 3D',
      desc: 'Segment vasculature in 3D scans of human kidney.',
      category: [
        {
          item: 'Research',
        },
        {
          item: 'Code Competition',
        },
      ],
      teams: '200 Teams',
      amount: '$80,000',
      link: 'https://www.kaggle.com/competitions/blood-vessel-segmentation',
    },
    {
      img: '/pictures/linking.webp',
      logo: '/pictures/brands-orgs/llm-logo.webp',
      title: 'Linking Writing Processes to Writing Quality',
      desc: 'Use typing behavior to predict essay quality.',
      category: [
        {
          item: 'Featured',
        },
        {
          item: 'Code Competition',
        },
      ],
      teams: '1292 Teams',
      amount: '$55,000',
      link: 'https://www.kaggle.com/competitions/linking-writing-processes-to-writing-quality',
    },
    {
      img: '/pictures/ubc.webp',
      logo: '/pictures/brands-orgs/ubc-logo.webp',
      title: 'UBC Ovarian Cancer Subtype Classification and Outlier Detection (UBC-OCEAN)',
      desc: 'Navigating Ovarian Cancer: Unveiling Common Histotypes and Unearthing Rare Variants.',
      category: [
        {
          item: 'Research',
        },
        {
          item: 'Code Competition',
        },
      ],
      teams: '880 Teams',
      amount: '$50,000',
      link: 'https://www.kaggle.com/competitions/UBC-OCEAN',
    },
    {
      img: '/pictures/enefit.webp',
      logo: '/pictures/brands-orgs/enefit-logo.webp',
      title: 'Enefit - Predict Energy Behavior of Prosumers',
      desc: 'Predict Prosumer Energy Patterns and Minimize Imbalance Costs.',
      category: [
        {
          item: 'Featured',
        },
        {
          item: 'Code Competition',
        },
      ],
      teams: '801 Teams',
      amount: '$50,000',
      link: 'https://www.kaggle.com/competitions/predict-energy-behavior-of-prosumers',
    },
  ]
}

const aboutContent = {
  title: 'About Oxford Kaggle Club',
  desc: 'Oxford Kaggle Club is a student-led initiative to help students learn AI/ML through Kaggle competitions. We are a group of students from different backgrounds and departments, with a common interest in AI/ML. We are passionate about learning and sharing knowledge with others. We are also passionate about Kaggle competitions and want to help others learn Kaggle competitions.',
  tableCaption: 'Note: We are still working to on the schedule. It is a preliminary schedule for 2024',
  table: [
    {
      headerName: 'Date',
      data: [
        {
          item: 'Feb 05 - Feb 11',
        },
        {
          item: 'Feb 12 - Feb 18',
        },
        {
          item: 'Feb 19 - Feb 25',
        },
        {
          item: 'Feb 26 - Mar 03',
        },
        {
          item: 'Mar 04 - Mar 10',
        },
        {
          item: 'Apr 22 - Apr 28',
        },
        {
          item: 'Apr 29 - May 05',
        },
        {
          item: 'May 06 - May 12',
        },
        {
          item: 'May 13 - May 19',
        },
        {
          item: 'May 20 - May 26',
        },
        {
          item: 'May 27 - Jun 02',
        },
        {
          item: 'Jun 03 - Jun 09',
        },
        {
          item: 'Jun 10 - Jun 16',
        },
        {
          item: 'Oct 14 - Oct 20',
        },
        {
          item: 'Oct 21 - Oct 27',
        },
        {
          item: 'Oct 28 - Nov 03',
        },
        {
          item: 'Nov 04 - Nov 10',
        },
        {
          item: 'Nov 11 - Nov 17',
        },
        {
          item: 'Nov 18 - Nov 24',
        },
        {
          item: 'Nov 25 - Dec 01',
        },
        {
          item: 'Dec 02 - Dec 08',
        },
      ]
    },
    {
      headerName: 'Activities',
      data: [
        {
          item: '- Introduction Lecture "What is Kaggle" by Kaggle Masters <br/> - Introduction hackaton "From nothing to your first ML project"',
        },
        {
          item: '- Kaggle Competition selection party <br/> - Kick-off lecture by Kaggle Masters how to tackel the chosen competition',
        },
        {
          item: '- Kaggle Competition pair programming evening',
        },
        {
          item: '- Kaggle Competition pair programming evening',
        },
        {
          item: '- Watch party of the Winner Kaggle competition solution',
        },
        {
          item: '- Kaggle Competition selection party <br/> - Kaggle Competition pair programming evening',
        },
        {
          item: '- Kick-off lecture by Kaggle Masters how to tackel the chosen competition <br/> - Kaggle Competition pair programming evening',
        },
        {
          item: '- Kaggle Competition pair programming evening',
        },
        {
          item: '- Kaggle Competition pair programming evening',
        },
        {
          item: '- Kaggle Competition pair programming evening',
        },
        {
          item: '- Kaggle Competition pair programming evening <br/> - Guest lectures from the industry (DeepMind/Google, Meta, Snap, XTX, etc)'
        },
        {
          item: '- Watch party of the Winner Kaggle competition solution',
        },
        {
          item: '- Kaggle Competition selection party <br/> - Kaggle Competition pair programming evening',
        },
        {
          item: '- Kick-off lecture by Kaggle Masters how to tackel the chosen competition <br/> - Kaggle Competition pair programming evening',
        },
        {
          item: '- Kaggle Competition pair programming evening',
        },
        {
          item: '- Kaggle Competition pair programming evening',
        },
        {
          item: '- Kaggle Competition pair programming evening',
        },
        {
          item: '- Kaggle Competition pair programming evening <br/> - Guest lectures from the industry (DeepMind/Google, Meta, Snap, XTX, etc)'
        },
        {
          item: '- Watch party of the Winner Kaggle competition solution',
        },
        {
          item: '- Kaggle Competition selection party <br/> - Kaggle Competition pair programming evening',
        },
        {
          item: '- Kick-off lecture by Kaggle Masters how to tackel the chosen competition <br/> - Kaggle Competition pair programming evening',
        },
        {
          item: '- Kaggle Competition pair programming evening <br/> - ML Hackaton',
        },
        {
          item: '- Kaggle Competition pair programming evening'
        },
        {
          item: '- Kaggle Competition pair programming evening <br/> - Guest lectures from the industry (DeepMind/Google, Meta, Snap, XTX, etc)',
        },
        {
          item: '- Kaggle Competition pair programming evening',
        },
        {
          item: '- Watch party of the Winner Kaggle competition solution',
        },
      ]
    },
  ]
}

const libraryContent = {
  title: 'Our Library',
  desc: 'We have a library of the carefully selected best machine learning books.',
  books: [
    {
      img: 'https://m.media-amazon.com/images/I/411ruZISG3L._SX342_SY445_.jpg',
    },
    {
      img: 'https://m.media-amazon.com/images/I/61VvbmnN0GL._SY466_.jpg',
    },
    {
      img: 'https://m.media-amazon.com/images/I/71ycxzrff0L._SY466_.jpg',
    },
    {
      img: 'https://m.media-amazon.com/images/I/51fd3aERRFL._SX342_SY445_.jpg',
    },
    {
      img: 'https://m.media-amazon.com/images/I/41he7lvNPGL._SY445_SX342_.jpg',
    },
    {
      img: 'https://m.media-amazon.com/images/I/51eF41vu6cL._SY445_SX342_.jpg',
    },
    {
      img: 'https://m.media-amazon.com/images/I/51ZTHO2XgCL._SX342_SY445_.jpg',
    },
    {
      img: 'https://m.media-amazon.com/images/I/411CpImAaAL._SX342_SY445_.jpg',
    },
    {
      img: 'https://m.media-amazon.com/images/I/61qbj4KwauL._SY445_SX342_.jpg',
    },
    {
      img: 'https://m.media-amazon.com/images/I/41Mz2NrxmTL._SX342_SY445_.jpg',
    },
  ],
}

const applyContent = {
  title: "Ready to join our next cohort starting February 2024? Here's how to apply",
  buttonText: 'Apply Now',
  buttonLink: 'https://forms.gle/Ch1uvcLqQ4FHAhS38',
  applyMethod: [
    {
      title: 'Apply Method',
      list: [
        {
          item: 'Ensure you meet the prerequisites for our two cohorts – experienced and promising.',
        },
        {
          item: 'Submit your application by Dec 31, 2023.',
        },
        {
          item: 'Due to limited spots, we will screen applications to shortlist candidates.',
        },
        {
          item: 'Shortlisted applicants will be invited for an in-person interview.',
        },
        {
          item: 'Post-interview, selected candidates will receive an invitation to join the club.',
        }
      ]
    },
    {
      title: 'Prerequisites for Experienced Cohort',
      list: [
        {
          item: 'Advanced Python Skills: Proficiency in Python and relevant libraries.',
        },
        {
          item: 'Mathematical Foundation: Solid background in linear algebra and statistics.',
        },
        {
          item: 'ML Theoretical Knowledge: Understanding of core ML concepts.',
        },
        {
          item: 'ML Framework Familiarity: Experience with TensorFlow or PyTorch.',
        },
        {
          item: 'ML Project Experience: Demonstrated through past projects or competitions.',
        },
      ]
    },
    {
      title: 'Prerequisites for Promising Cohort',
      list: [
        {
          item: 'Basic Python Knowledge: Experience of several projects in Python.',
        },
        {
          item: 'Mathematical Foundation: Solid background in linear algebra and statistics.',
        },
        {
          item: 'ML Interest: Demonstrated curiosity in machine learning/AI.',
        },
        {
          item: 'ML Framework Familiarity: Basic understanding of TensorFlow or PyTorch.',
        },
        {
          item: 'Problem-Solving Ability: Proven skills in complex problem analysis in code.',
        },
      ]
    }
  ]
}

const faqContent = {
  title: 'Frequently Asked Questions',
  qa: [
    {
      question: 'How often does the club meet?',
      answer: 'The Oxford Kaggle Club meets once a week, offering a mix of hackathons, guest lectures, and competition-focused sessions.',
    },
    {
      question: 'When will the club start?',
      answer: 'Our inaugural session is planned for February 2024.',
    },
    {
      question: 'Where will the club meetings be held?',
      answer: 'We are finalizing the details of our location but rest assured, it will be within accessible parts of Oxford. Stay tuned for updates!',
    },
    {
      question: 'Is there a fee to join the club?',
      answer: 'Membership in the Oxford Kaggle Club is completely free. Our goal is to make AI/ML expertise accessible to all qualified students.',
    },
    {
      question: 'Will the club activities be conducted offline or online?',
      answer: 'Our club prioritizes offline interactions to foster a strong sense of community and hands-on learning.',
    },
    {
      question: 'What knowledge should I have before applying to the club?',
      answer: 'Please refer to the "Requirements" section on our landing page for detailed information on the prerequisites for both experienced and promising cohorts.',
    },
    {
      question: 'What kind of projects will we work on?',
      answer: "You'll engage in a variety of real-world Kaggle competitions, offering hands-on experience with practical AI/ML challenges. These projects are designed to enhance your skills and boost your portfolio.",
    },
    {
      question: 'How is the club structured?',
      answer: 'The club is structured around regular meetings, mentorship programs, and active participation in Kaggle competitions. Leadership roles like Club Leader and Vice President are integral to our organization.',
    },
    {
      question: 'How does the mentorship program work?',
      answer: 'Experienced club members, holding at least a bronze medal in Kaggle competitions, mentor new members, providing guidance, setting goals, and tracking progress through monthly formal assessments.',
    },
    {
      question: 'Are there networking opportunities with industry professionals?',
      answer: 'Yes, we regularly host guest lectures from industry experts and Kaggle Masters, providing invaluable networking and learning opportunities.',
    },
    {
      question: 'What learning resources does the club provide?',
      answer: 'In addition to mentorship, we provide a curated ML book library, access to premium GPU compute resources for project work, and hands-on experience with Kaggle competitions.',
    },
    {
      question: 'How can joining the club help my career?',
      answer: 'Participation in the club offers real-life ML experience, enhances your CV, and provides opportunities for team collaboration, all of which are highly valued in the AI/ML industry.',
    },
    {
      question: 'What is the expected level of commitment for club members?',
      answer: 'Members are expected to actively participate in weekly meetings and dedicate additional time for self-driven Kaggle competition projects.',
    },
    {
      question: 'Are there opportunities for leadership or mentorship roles within the club?',
      answer: 'Absolutely! Members can aspire to roles like Club Leader or Vice President, and experienced students can mentor newcomers, enriching their leadership and teaching skills.',
    },
    {
      question: 'How can I apply to join the Oxford Kaggle Club?',
      answer: 'To apply, ensure you meet our prerequisites for the cohorts, submit the online application form by the given deadline, and be prepared for an in-person interview. Selected candidates will be invited to join.',
    },
  ]
}

const footerContent = {
  name: 'Oxford Kaggle Club',
  footerMenu: [
    {
      item: 'Contact',
      link: '#',
    },
    {
      item: 'Terms of Services',
      link: '#',
    },
    {
      item: 'Privacy Policy',
      link: '#',
    },
  ]
}

const seo = {
  title: 'Oxford Kaggle Club',
  desc: 'Experience the synergy of education and competition at Oxford Kaggle Club. Our platform offers a rich blend of activities, competitions, and shared knowledge. Elevate your skills and become a part of a dynamic community passionate about AI and ML advancements.',
  keywords: 'Advanced machine learning techniques for Kaggle competitions, AI community for collaborative Kaggle challenges, Best practices for succeeding in Kaggle data science contests, Kaggle Community, Kaggle success tips, Oxford Kaggle Club, Kaggle, AI, ML, Machine Learning, Oxford, Oxford University, University of Oxford, Oxford Kaggle',
  type: 'educational website',
  author: 'Asiful Alam Fahim',
  photoPreview: '/oxford-kaggle-club-logo.webp',
}


export {
  navContent,
  heroContent,
  brandContent,
  helpYouContent,
  spotLightContent,
  competitionContent,
  aboutContent,
  libraryContent,
  applyContent,
  faqContent,
  footerContent,
  seo,
}