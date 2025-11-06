import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: 'BlackNGreen',
      role: 'Sr. Software Engineer',
      location: 'Gurgaon, Haryana',
      period: 'June 2024 – Present',
      achievements: [
        'Built and maintained the complete front-end for TryEva and EvaStudio (flagship products of BlackNGreen), using ReactJS and Styled-Components to deliver a modular, scalable UI, improving page load times by 30%.',
        'Engineered a JSON-driven form generation system, reducing development time for new form features by 45%.',
        "Converted a complete application's CSS to styled-components for MWC Barcelona 2025.",
        'Integrated SonarQube into a React project, improving code quality by 30%.',
        'Enhanced testing efficiency with React Testing Library and Jest, achieving 50% better test accuracy and coverage.',
        'Created a theme system with CSS variables and styled-components for customizable and maintainable UI styling.'
      ]
    },
    {
      company: 'SirionLabs',
      role: 'Software Engineer',
      location: 'Gurgaon, Haryana',
      period: 'May 2021 – June 2024',
      achievements: [
        'Designed new user-facing features in ReactJS for Akirolabs (German based product).',
        'Incorporated ChatGPT into AkiroLabs, boosting user engagement by 40% and session duration by 25%.',
        'Added a PDF download feature, increasing user satisfaction by 35% and customer retention by 20%.',
        'Constructed analytics tools and charting components from backend JSON, cutting report generation time by 40%',
        'Built a file explorer feature in ReactJS, improving user productivity by 40%.',
        'Migrated from legacy AngularJS code to React new class/functional components, optimizing code structure and enhancing user experience.',
        'Presented bi-weekly product demonstrations to cross-functional stakeholders, gathering feedback to inform iterative design improvements and enhance user engagement by 15% within a quarter.',
        'Redesigned popup UI for improved consistency and user experience, implementing auto-triggered operations that reduced manual user actions by 40%.',
        'Led proof-of-concept (POC) initiatives and resolved critical bugs, enhancing application stability and reducing production issues.'
      ]
    },
    {
      company: 'Newton School',
      role: 'Intern',
      location: 'Bangalore, Karnataka',
      period: 'Oct 2020 – May 2021',
      achievements: [
        'Completed coding bootcamp and collaborated on real-world web development projects.'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-textPrimary dark:text-white">Experience</h1>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-teal-600 dark:border-secondary"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal-600 dark:bg-secondary"></div>
                <div className="mb-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                    <h2 className="text-2xl font-bold text-teal-600 dark:text-secondary">{exp.company}</h2>
                    <div className="text-left sm:text-right">
                      <h3 className="text-xl font-semibold text-textPrimary dark:text-white">{exp.role}</h3>
                      <div className="flex flex-wrap gap-2 sm:gap-4 text-textSecondary dark:text-[#8892b0] sm:justify-end">
                        <span>{exp.location}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-textSecondary dark:text-[#8892b0]">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="ml-4">{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience; 