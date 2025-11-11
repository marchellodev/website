export type Experience =
  | {
      type: 'regular';
      name: string;
      nameDesc?: string;
      time: string;
      position?: string;
      points: string[];
    }
  | { type: 'point'; point: string; time: string };

export const experienceWork: Experience[] = [
  {
    type: 'regular',
    name: 'Genesis Tech',
    nameDesc: 'One of the biggest IT product-based companies in Ukraine',
    time: 'Jun 2022 - Present',
    position: 'Full-stack Software Engineer',
    points: [
      `Built a web platform ecosystem from scratch for ~10k students featuring selection flow, personal profile, calendar, session recordings, and more. Used SvelteKit, Tailwind CSS, Planetscale and Cloudflare Workers`,
      `Written various CLI automation scripts and web services for migration from Google Sites to Notion (on super.so front-end) for the Internal Education Platform used by 4k+ employee} Built & managed widely used internal CRM`,
      `Built &amp; managed widely used internal CRM tools (using Appsmith) and numerous automation workflows (via n8n) on a Hetzner infrastructure`

      // TODO: mention
      // - aws, nomad setup

      // TODO: recover the openai redteaming report
    ]
  },
  {
    type: 'regular',
    name: 'Hearty App',
    nameDesc: 'A mobile app helping parents spend more quality time with their kids',
    time: 'Apr 2022 - Sep 2022',
    position: 'Full-Stack Software Engineer',
    points: [
      `Used Flutter and TypeScript (NestJS) to implement Daily Reminders system, updated sign up workflow, tweaked UI, and more`,
      `Used Pandas, SQL, and Mixpanel API for conducting product analytics, providing the team with key user behaviour insights`
    ]
  },
  {
    type: 'regular',
    name: 'Freelance',
    // todo: should change for: Apr 2022

    time: 'Oct 2021 - Sep 2022 ',
    position: 'Full-Stack Software Engineer',
    points: [
      `Used Flutter for building Android, iOS and PWA apps, TypeScript and Golang for Back-ends`,
      `Built 2 commercial full-stack apps for businesses in domains of Cryptocurrency and Finances and finished 5+ small projects`
    ]
  },
  {
    type: 'regular',
    name: 'Sharik',
    nameDesc: 'An open-source, cross-platform application for sharing files',
    time: 'Feb 2020 - Oct 2021',
    position: 'Software Engineer, UI/UX Designer',
    points: [
      `After noticing a common problem at school and struggling to find a feasible solution, built a free app for sharing files via WI-FI`,
      ` Used Figma for design, Flutter for UI, and Golang (later Rust) for the sharing engine`,
      `Sharik has 1.2k+ stars on GitHub, 20 000+ monthly users, and 20+ crowdsourced translations`
    ]
  }
];

export const experienceEducation: Experience[] = [
  {
    type: 'regular',
    name: 'Kyiv School of Economics',
    position: 'Bachelor Degree in Business Economics',
    time: '2021 - 2025',
    points: [
      `GPA: 89.9/100 (weighted)`,
      `Participated in a Reproducible research using R summer school; built an animated map of Ukraine using R showing the history of air raid sirens, placing 2nd (among ~40 students)`,
      `Besides business and economics, through electives deepened knowledge in Data Analytics via Python and R, low-level systems programming in Rust and Golang`
    ]
  },
  {
    type: 'regular',
    name: 'Ukraine Global Scholars',
    nameDesc: 'Assistance in applying to the world’s best schools',
    position: 'Finaliast ',
    time: '2020',
    points: [
      `One of 47 finalists out of 750+ applicants selected through a rigorous 3-stage selection process focusing on academic skills, extracurricular achievements, and character`
    ]
  },
  {
    type: 'regular',
    name: 'School-lyceum №1 of Kamin-Kashyrskyi',
    position: 'High School Degree',
    time: '2009 - 2021',
    points: [
      `GPA: 10.9/12 (unweighted)`,
      `Received multi-year scholarships for high academic achievements (out of 2 000 students)`,
      `Successfully took part in various oblast-level competitions in Math, Physics, and Programming`
    ]
  }
];

export const experienceTests: Experience[] = [
  {
    type: 'point',
    point: `Ukrainian Independent Evaluation (out of 200): 196 in English, 186 in Math, 174 in Ukrainian`,
    time: 'May 2021'
  },
  {
    type: 'point',
    point: `Duolingo English Test: 125/160 (C1)`,
    time: 'Nov 2020'
  },
  {
    type: 'point',
    point: `SAT: 1450/1600 (99th percentile)`,
    time: 'Oct 2020'
  }
];

export const experienceCompetitions: Experience[] = [
  {
    type: 'regular',
    name: 'Research competition by Junior Academy of Sciences of Ukraine',
    time: 'May 2021',
    points: [
      `Used Flutter and Golang to build software for simulating distributed networks`,
      `Conducted research exploring ways to optimize peer-to-peer system`,
      `Presented two research papers at a national level, placing 2nd in Math, and 3rd in IT`
    ]
  },
  {
    type: 'regular',
    name: 'INT20H',
    nameDesc: 'One of the biggest hackathons in Ukraine',
    time: 'Feb 2021',
    points: [
      `Led a team of 4 people: 1 Designer, 2 Flutter developers, 1 Laravel developer`,
      `In under 20 hours, built an Android/Flutter application that helps users get to their taxi utilizing Location Technologies, Compass, and Augmented Reality`,
      `Our team placed 3rd, receiving special recognition as the youngest`
    ]
  }
];

export const experienceVolunteering: Experience[] = [
  {
    type: 'regular',
    name: 'Center for Sociological Research, Kyiv School of Economics Institute',
    time: 'Jun 2022 - Aug 2022',
    position: 'Intern Data Engineer',
    points: [
      `Used Python to parse geospacial data from websites related to the decentralization reform in
Ukraine`,
      `Used Golang to obtain a list of operating ukrainian businesses from Open Street Maps data`
    ]
  },
  {
    type: 'regular',
    name: 'Grey Box',
    nameDesc: 'a non-profit making popular internet resources available in remote regions',
    time: 'Jul 2021 - Sep 2021',
    position: 'Software developer, R&D',
    points: [
      `Improved and documented a Web Scraping workflow`,
      `Used Python and Rust to build an efficient downloading tool for complex websites`
    ]
  },
  {
    type: 'regular',
    name: 'ENGin',
    nameDesc: 'an NGO peer-to-peer English program for the Ukrainian youth',
    time: 'Jul 2021 - Sep 2021',
    position: 'Research Assistant',
    points: [`Evaluated 40+ English proficiency interviews according to internal metrics`]
  },
  {
    type: 'regular',
    name: 'Witals24',
    nameDesc: 'an Indian company manufacturing devices for real-time health monitoring',
    time: 'Jul 2020 - Sep 2020',
    position: 'Front-end developer, UI/UX Designer',
    points: [
      `Used Figma and Flutter to design and build a web dashboard for displaying ECG graphs and other patients’ data in real-time`
    ]
  }
];
