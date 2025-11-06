import { motion } from 'framer-motion';
import BloodFinder from '../assets/Images/OnlineBloodFinder_Thumbnail.png';
import TicTacToe from '../assets/Images/TicTacToe_Thumbnail.png';
import CardMemoryGame from '../assets/Images/CardMemoryGame_Thumbnail.png';
import MeetingRoomBooking from '../assets/Images/MeetingRoomApp_Thumbnail.png';
import Bomberman from '../assets/Images/BombermanApp_Thumbnail.png';

const Projects = () => {
  const projects = [
    {
      title: 'Blood Finder Web App',
      description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration.',
      technologies: ['ReactJs', 'Javascript', 'Bootstrap'],
      image: BloodFinder,
      link: 'https://online-blood-finder-major-project.vercel.app/',
    },
    {
      title: 'Tic-Tac-Toe Game',
      description: 'A collaborative task management application with real-time updates and team features.',
      technologies: ['ReactJs'],
      image: TicTacToe,
      link: 'https://newton-school-tic-tac-toe.vercel.app/',
    },
    {
      title: 'Card Memory Game',
      description: 'A modern portfolio website showcasing projects and skills with smooth animations.',
      technologies: ['React', 'Javascript', 'Bootstrap'],
      image: CardMemoryGame,
      link: 'https://company-assignment-3-card-memory-game.vercel.app/',
    },
    {
      title: 'Meeting Room Booking App - Optimizing Reservation Workflow',
      description: 'A modern portfolio website showcasing projects and skills with smooth animations.',
      technologies: ['React', 'Javascript', 'Bootstrap'],
      image: MeetingRoomBooking,
      link: 'https://company-assignment-meeting-room-booking.vercel.app/',
    },
    {
      title: 'Bomberman',
      description: 'A modern portfolio website showcasing projects and skills with smooth animations.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: Bomberman,
      link: 'https://kshitinjay.github.io/BomberMan.github.io/',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title">My Projects</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-tertiary dark:bg-[#2a2a2a] rounded-lg overflow-hidden transition-colors border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-textPrimary dark:text-white">{project.title}</h3>
                  <p className="text-sm sm:text-base text-textSecondary dark:text-[#8892b0] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-100 dark:bg-[#1a1a1a] px-2 py-1 rounded text-sm text-textPrimary dark:text-white border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 dark:text-secondary hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 