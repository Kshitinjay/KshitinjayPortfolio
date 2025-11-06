import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { skills } from '../data/skills';

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-textPrimary dark:text-white">
            Hi, I'm <span className="text-teal-600 dark:text-secondary">Kshitinjay</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-textSecondary dark:text-[#8892b0] mb-8">
            Senior Frontend Developer
          </h2>
          <p className="text-base sm:text-lg text-textSecondary dark:text-[#8892b0] mb-8">
            Software Developer with 4+ years of experience building scalable, user-focused web applications. Skilled in
            ReactJS, Redux Toolkit, JavaScript, TypeScript, Tailwind CSS, MUI, Bootstrap, SCSS, HTML/CSS, and testing
            with Jest and React Testing Library. Strong in creating responsive and accessible user interfaces and in
            collaborating in Agile teams.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn border-2 border-teal-600 dark:border-secondary text-teal-600 dark:text-secondary hover:bg-teal-600 dark:hover:bg-secondary hover:text-white dark:hover:text-[#1a1a1a] font-semibold transition-colors">
              Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-6 text-textPrimary dark:text-white">Tech Stack</h3>
          <div className="space-y-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h4 className="text-xl font-semibold mb-4 text-teal-600 dark:text-secondary">{skillGroup.category}</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {skillGroup.items.map((skill) => (
                    <div
                      key={skill}
                      className="bg-tertiary dark:bg-[#2a2a2a] p-4 rounded-lg text-center hover:transform hover:scale-105 transition-transform text-textPrimary dark:text-white border border-slate-200 dark:border-slate-700 shadow-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 