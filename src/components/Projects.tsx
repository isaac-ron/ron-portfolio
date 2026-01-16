import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'Real-time analytics dashboard with sales tracking and inventory management.',
      image: 'https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTY0ODYzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      category: 'Web Dev',
      bg: 'bg-[var(--electric-blue)]',
      featured: true,
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'AI Image Recognition',
      description: 'ML application classifying images with 95% accuracy using deep learning.',
      image: 'https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc1NjQ1MzI2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
      category: 'ML',
      bg: 'bg-[var(--hot-pink)]',
      featured: true,
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative platform with real-time updates and advanced filtering.',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU2MzgyODQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Vue.js', 'Tailwind', 'Supabase'],
      category: 'Web Dev',
      bg: 'bg-[var(--lime-green)]',
      featured: false,
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block bg-[var(--vibrant-yellow)] px-6 py-2 brutal-border-2 brutal-shadow mb-6">
            <span className="font-bold uppercase tracking-wider text-sm">Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            STUFF I'VE <span className="text-[var(--electric-blue)]">BUILT</span>
          </h2>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className={`inline-block ${project.bg} text-white px-4 py-2 brutal-border-2 font-bold uppercase text-sm`}>
                  {project.category}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold uppercase">
                  {project.title}
                </h3>
                
                <p className="text-lg text-[var(--grey)]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[var(--cream)] brutal-border-2 text-sm font-bold uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.demoUrl}
                    className={`flex items-center gap-2 px-6 py-3 ${project.bg} text-white brutal-border brutal-shadow hover-brutal font-bold uppercase`}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </motion.a>
                  
                  <motion.a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-6 py-3 bg-white brutal-border brutal-shadow hover-brutal font-bold uppercase"
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                </div>
              </div>

              <motion.div
                className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative">
                  <div className={`absolute -bottom-4 -right-4 w-full h-full ${project.bg} brutal-border`} />
                  <div className="relative brutal-border-2 overflow-hidden bg-white">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 lg:h-96 object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="space-y-12">
          <h3 className="text-3xl font-bold uppercase text-center">More Projects</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white brutal-border brutal-shadow hover-brutal"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative brutal-border-2 border-t-0 border-x-0 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 left-4 ${project.bg} text-white px-3 py-1 brutal-border-2 font-bold text-xs uppercase`}>
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-bold uppercase">{project.title}</h4>
                  <p className="text-[var(--grey)]">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[var(--cream)] brutal-border text-xs font-bold uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <a
                      href={project.demoUrl}
                      className={`flex-1 text-center py-2 ${project.bg} text-white brutal-border-2 font-bold text-sm uppercase`}
                    >
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 text-center py-2 bg-white brutal-border-2 font-bold text-sm uppercase"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className="inline-block px-10 py-5 bg-[var(--charcoal)] text-white brutal-border brutal-shadow-lg hover-brutal font-bold uppercase tracking-wide"
            whileTap={{ scale: 0.98 }}
          >
            View All Projects →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
