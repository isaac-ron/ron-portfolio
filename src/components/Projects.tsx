import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Projects = () => {
  const projects: {
    id: number;
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    category: string;
    bg: string;
    featured: boolean;
    demoUrl?: string;
    githubUrl?: string;
  }[] = [
    {
      id: 1,
      title: 'CrisisConnect',
      description: 'Community crisis reporting with ML triage. Residents report emergencies from their phone (even offline); fine-tuned RoBERTa models classify and prioritize reports, related reports are grouped into incidents, and trust comes from corroboration across independent reporters, photo evidence and USGS/GDACS alerts. Models are int8-quantized ONNX (515 MB to 130 MB) so the ML service fits on a free 512 MB instance.',
      image: 'https://raw.githubusercontent.com/isaac-ron/TSCrisisConnect/main/docs/screenshots/map.png',
      technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'PyTorch', 'ONNX'],
      category: 'ML + Full Stack',
      bg: 'bg-[var(--hot-pink)]',
      featured: true,
      githubUrl: 'https://github.com/isaac-ron/TSCrisisConnect'
    },
    {
      id: 2,
      title: 'FeeDesk',
      description: "Multi-tenant fee management system for schools. Handles M-PESA payments, bank statement imports, term-based billing, SMS receipts via Africa's Talking and live transaction updates, with role-based access for admins, bursars and teachers.",
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'M-PESA API', 'Docker'],
      category: 'Full Stack',
      bg: 'bg-[var(--electric-blue)]',
      featured: true,
      githubUrl: 'https://github.com/isaac-ron/FeeDesk'
    },
    {
      id: 3,
      title: 'ReRoot Africa',
      description: 'Media website, built from a high-fidelity Figma design.',
      technologies: ['React', 'TypeScript', 'Tailwind'],
      category: 'Web Dev',
      bg: 'bg-[var(--lime-green)]',
      featured: false,
      demoUrl: 'https://rerootafrica.vercel.app',
      githubUrl: 'https://github.com/isaac-ron/rerootafrica'
    },
    {
      id: 4,
      title: 'Virtue Literacy Africa',
      description: 'Content-managed organisation website with blog, events, team and gallery pages editable through Keystatic.',
      technologies: ['Astro', 'TypeScript', 'Keystatic'],
      category: 'Web Dev',
      bg: 'bg-[var(--orange)]',
      featured: false,
      githubUrl: 'https://github.com/isaac-ron/virtueliteracyafrica'
    },
    {
      id: 5,
      title: 'KES Currency Converter',
      description: 'Small Python package for converting currencies with the Kenyan Shilling as the base rate.',
      technologies: ['Python'],
      category: 'Package',
      bg: 'bg-[var(--deep-purple)]',
      featured: false,
      githubUrl: 'https://github.com/isaac-ron/currencyconverterpackage'
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
                  {project.demoUrl && (
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 ${project.bg} text-white brutal-border brutal-shadow hover-brutal font-bold uppercase`}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </motion.a>
                  )}

                  {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white brutal-border brutal-shadow hover-brutal font-bold uppercase"
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                  )}
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
                    {project.image ? (
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-80 lg:h-96 object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-80 lg:h-96 flex items-center justify-center bg-[var(--cream)]">
                        <span className="text-4xl md:text-5xl font-bold uppercase">{project.title}</span>
                      </div>
                    )}
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
                  {project.image ? (
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 flex items-end p-4 pt-16 bg-[var(--cream)]">
                      <span className="text-2xl font-bold uppercase">{project.title}</span>
                    </div>
                  )}
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
                    {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 text-center py-2 ${project.bg} text-white brutal-border-2 font-bold text-sm uppercase`}
                    >
                      Demo
                    </a>
                    )}
                    {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 bg-white brutal-border-2 font-bold text-sm uppercase"
                    >
                      Code
                    </a>
                    )}
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
            href="https://github.com/isaac-ron"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-[var(--charcoal)] text-white brutal-border brutal-shadow-lg hover-brutal font-bold uppercase tracking-wide"
            whileTap={{ scale: 0.98 }}
          >
            More on GitHub →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
