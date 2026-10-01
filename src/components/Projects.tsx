import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Projects = () => {
  const projects: {
    id: number;
    title: string;
    description: string;
    image?: string;
    screens?: string[];
    technologies: string[];
    category: string;
    bg: string;
    featured: boolean;
    client?: boolean;
    demoUrl?: string;
    demoLabel?: string;
    githubUrl?: string;
  }[] = [
    {
      id: 1,
      title: 'CrisisConnect',
      description: 'Community crisis reporting with ML triage. Residents report emergencies from their phone (even offline); fine-tuned RoBERTa models classify and prioritize reports, related reports are grouped into incidents, and trust comes from corroboration across independent reporters, photo evidence and USGS/GDACS alerts. Models are int8-quantized ONNX (515 MB to 130 MB) so the ML service fits on a free 512 MB instance.',
      screens: ['/projects/crisisconnect-alerts.jpg', '/projects/crisisconnect-dashboard.jpg', '/projects/crisisconnect-map.jpg'],
      technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Hugging Face', 'ONNX'],
      category: 'ML + Full Stack',
      bg: 'bg-[var(--hot-pink)]',
      featured: true,
      githubUrl: 'https://github.com/isaac-ron/TSCrisisConnect'
    },
    {
      id: 2,
      title: 'The Nile Explorer',
      description: 'News and analysis site for a media network covering peace, governance and geopolitics in South Sudan and the Nile basin, with articles, a podcast and video. Editors publish from an embedded Sanity Studio and pages refresh on publish without a rebuild. I migrated the existing archive from WordPress and handed the site over with documentation for the newsroom.',
      image: '/projects/nile.jpg',
      technologies: ['Next.js', 'TypeScript', 'Sanity', 'Tailwind CSS'],
      category: 'Client · Media',
      bg: 'bg-[var(--electric-blue)]',
      featured: true,
      demoUrl: 'https://www.nileexplorer.com',
      githubUrl: 'https://github.com/isaac-ron/nile-explorer'
    },
    {
      id: 3,
      title: 'FeeDesk',
      description: "A venture I'm building: a multi-tenant fee platform for schools. Safaricom Daraja webhooks and bank IPN APIs feed transactions from every source into one reporting view, alongside term-based billing, SMS receipts and role-based access for admins, bursars and teachers. Not yet in production; The Grace Schools is the planned pilot.",
      technologies: ['React', 'Node.js', 'MongoDB', 'M-PESA Daraja', 'Bank IPN APIs', 'Socket.IO'],
      category: 'Venture',
      bg: 'bg-[var(--deep-purple)]',
      image: '/projects/feedesk.jpg',
      featured: true,
      demoUrl: 'https://feedesk-frontend.onrender.com/',
      demoLabel: 'Staging',
      githubUrl: 'https://github.com/isaac-ron/FeeDesk'
    },
    {
      id: 4,
      title: 'Virtue Literacy Africa',
      description: "Site for an NGO advancing literacy for children in pastoralist, refugee and arid communities across Kenya, Ethiopia and South Sudan, and a founding member network of ACNA's East Africa chapter. Staff edit the blog, events, team and gallery through Keystatic.",
      image: '/projects/vla.jpg',
      technologies: ['Astro', 'Keystatic', 'TypeScript'],
      category: 'Client · ACNA',
      bg: 'bg-[var(--orange)]',
      featured: false,
      client: true,
      demoUrl: 'https://virtueliteracyafrica.org',
      githubUrl: 'https://github.com/isaac-ron/virtueliteracyafrica'
    },
    {
      id: 5,
      title: 'Second Chances Kenya',
      description: "Site for an NGO supporting young people leaving care with counselling, education, legal aid and community, and a founding member network of ACNA's East Africa chapter. Includes a quick-exit button so visitors can leave the page safely.",
      image: '/projects/sc.jpg',
      technologies: ['Astro', 'TypeScript'],
      category: 'Client · ACNA',
      bg: 'bg-[var(--hot-pink)]',
      featured: false,
      client: true,
      demoUrl: 'https://preview.secondchances.co.ke/',
      githubUrl: 'https://github.com/isaac-ron/secondchances'
    },
    {
      id: 6,
      title: 'ACNA Membership Application',
      description: 'Application form and eligibility criteria for networks joining the Association of Care Leavers Networks in Africa.',
      image: '/projects/acna.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'Client · ACNA',
      bg: 'bg-[var(--vibrant-yellow)]',
      featured: false,
      client: true,
      demoUrl: 'https://acna-form.vercel.app',
      githubUrl: 'https://github.com/isaac-ron/acna-form'
    },
    {
      id: 7,
      title: 'The Grace Schools',
      description: 'Website for a faith-based CBE school in Chepilat, Bomet County, running Pre-Primary through Grade 9 with a boarding section. A staff and parent portal for the school is in development.',
      image: '/projects/grace.jpg',
      technologies: ['Next.js', 'TypeScript'],
      category: 'School',
      bg: 'bg-[var(--deep-purple)]',
      featured: false,
      client: true,
      demoUrl: 'https://thegraceschools.co.ke',
      githubUrl: 'https://github.com/isaac-ron/grace-schools'
    },
    {
      id: 8,
      title: 'Vijana Empowerment Initiative',
      description: 'Volunteer build for a community organisation in Sotik, Bomet County, that trains school leavers, young mothers and youth with disabilities in fashion, beauty, mechanics and digital work.',
      image: '/projects/vijana.jpg',
      technologies: ['Next.js', 'TypeScript', 'Prisma'],
      category: 'Volunteer',
      bg: 'bg-[var(--lime-green)]',
      featured: false,
      client: true,
      demoUrl: 'https://vijanaempowermentcbo.org',
      githubUrl: 'https://github.com/isaac-ron/Vijana-Empowerment-CBO'
    },
    {
      id: 9,
      title: 'WasteNet',
      description: 'CNN that sorts waste into recyclable and organic (88.9% accuracy, 94.2% precision, 92.7% recall), deployed on a Raspberry Pi 4 driving Arduino sorting hardware, with a Flask dashboard for live and uploaded-image inference.',
      technologies: ['TensorFlow/Keras', 'Flask', 'Raspberry Pi'],
      category: 'ML + Hardware',
      bg: 'bg-[var(--lime-green)]',
      featured: false
    },
    {
      id: 10,
      title: 'KES Currency Converter',
      description: 'Small Python package for converting currencies with the Kenyan Shilling as the base rate.',
      technologies: ['Python'],
      category: 'Package',
      bg: 'bg-[var(--electric-blue)]',
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
                  {!project.demoUrl && !project.githubUrl && (
                    <span className="text-sm font-bold uppercase text-[var(--grey)]">Code available on request</span>
                  )}
                  {project.demoUrl && (
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 ${project.bg} text-white brutal-border brutal-shadow hover-brutal font-bold uppercase`}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    {project.demoLabel ?? 'Live'}
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
                className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''} ${project.image || project.screens ? '' : 'hidden lg:block'}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative">
                  <div className={`absolute -bottom-4 -right-4 w-full h-full ${project.bg} brutal-border`} />
                  <div className="relative brutal-border-2 overflow-hidden bg-white">
                    {project.screens ? (
                      <div className="w-full h-80 lg:h-96 grid grid-cols-3 gap-3 p-4 bg-[var(--cream)]">
                        {project.screens.map((src) => (
                          <ImageWithFallback
                            key={src}
                            src={src}
                            alt={`${project.title} screenshot`}
                            loading="lazy"
                            className="w-full h-full object-cover object-top brutal-border-2"
                          />
                        ))}
                      </div>
                    ) : project.image ? (
                      <ImageWithFallback
                        src={project.image}
                        alt={`${project.title} screenshot`}
                      loading="lazy"
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

        {/* Client work and other projects */}
        {[
          { title: 'Client & Nonprofit Work', items: projects.filter(p => !p.featured && p.client) },
          { title: 'Other Projects', items: projects.filter(p => !p.featured && !p.client) }
        ].map((section) => (
        <div key={section.title} className="space-y-12 mb-20 last:mb-0">
          <h3 className="text-3xl font-bold uppercase text-center">{section.title}</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.items.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white brutal-border brutal-shadow hover-brutal"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {project.image && (
                <div className="relative brutal-border-2 border-t-0 border-x-0 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className={`absolute top-4 left-4 ${project.bg} text-white px-3 py-1 brutal-border-2 font-bold text-xs uppercase`}>
                    {project.category}
                  </div>
                </div>
                )}

                <div className="p-6 space-y-4">
                  {!project.image && (
                    <div className={`inline-block ${project.bg} text-white px-3 py-1 brutal-border-2 font-bold text-xs uppercase`}>
                      {project.category}
                    </div>
                  )}
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
                    {!project.demoUrl && !project.githubUrl && (
                      <span className="text-sm font-bold uppercase text-[var(--grey)]">Code available on request</span>
                    )}
                    {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 text-center py-2 ${project.bg} text-white brutal-border-2 font-bold text-sm uppercase`}
                    >
                      {project.demoLabel ?? 'Live Site'}
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
        ))}

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
