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
    client?: boolean;
    demoUrl?: string;
    githubUrl?: string;
  }[] = [
    {
      id: 1,
      title: 'CrisisConnect',
      description: 'Community crisis reporting with ML triage. Residents report emergencies from their phone (even offline); fine-tuned RoBERTa models classify and prioritize reports, related reports are grouped into incidents, and trust comes from corroboration across independent reporters, photo evidence and USGS/GDACS alerts. Models are int8-quantized ONNX (515 MB to 130 MB) so the ML service fits on a free 512 MB instance.',
      image: 'https://raw.githubusercontent.com/isaac-ron/TSCrisisConnect/main/docs/screenshots/map.png',
      technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Hugging Face', 'ONNX'],
      category: 'ML + Full Stack',
      bg: 'bg-[var(--hot-pink)]',
      featured: true,
      githubUrl: 'https://github.com/isaac-ron/TSCrisisConnect'
    },
    {
      id: 2,
      title: 'FeeDesk',
      description: "A venture I'm building: a multi-tenant fee platform for schools. Safaricom Daraja webhooks and bank IPN APIs feed transactions from every source into one reporting view, alongside term-based billing, SMS receipts and role-based access for admins, bursars and teachers.",
      technologies: ['React', 'Node.js', 'MongoDB', 'M-PESA Daraja', 'Bank IPN APIs', 'Socket.IO'],
      category: 'Venture',
      bg: 'bg-[var(--electric-blue)]',
      featured: true,
      demoUrl: 'https://feedesk-frontend.onrender.com/',
      githubUrl: 'https://github.com/isaac-ron/FeeDesk'
    },
    {
      id: 3,
      title: 'Grace Schools Portal',
      description: 'Admin, staff and parent portal for The Grace Schools, Chepilat. Row-level security on all 25 Postgres tables (checked by 71 authorization tests), CSV enrolment with a dry-run preview, and a teacher attendance register that saves offline and sends when signal returns. Runs on Cloudflare Workers and Supabase free tiers for KES 0 a month. Marks and report cards are next.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Cloudflare Workers'],
      category: 'Full Stack · In Progress',
      bg: 'bg-[var(--deep-purple)]',
      featured: true,
      githubUrl: 'https://github.com/isaac-ron/grace-schools-portal'
    },
    {
      id: 4,
      title: 'The Nile Explorer',
      description: 'Site for a media network covering peace, governance and geopolitics in South Sudan and the Nile basin: articles, podcast and video. Editors publish from an embedded Sanity Studio and pages refresh on publish without a rebuild. Content migrated from WordPress.',
      technologies: ['Next.js', 'Sanity', 'TypeScript'],
      category: 'Media',
      bg: 'bg-[var(--hot-pink)]',
      featured: false,
      client: true,
      githubUrl: 'https://github.com/isaac-ron/nile-explorer'
    },
    {
      id: 5,
      title: 'Virtue Literacy Africa',
      description: 'Site for an NGO advancing literacy for children and youth in pastoralist, refugee and arid communities across Kenya, Ethiopia and South Sudan. Blog, events, team and gallery are editable through Keystatic.',
      technologies: ['Astro', 'Keystatic', 'TypeScript'],
      category: 'NGO',
      bg: 'bg-[var(--orange)]',
      featured: false,
      client: true,
      demoUrl: 'https://virtueliteracyafrica.org',
      githubUrl: 'https://github.com/isaac-ron/virtueliteracyafrica'
    },
    {
      id: 6,
      title: 'Second Chances Kenya',
      description: 'Site for an NGO giving young people leaving care in Kenya practical support: counselling, education, legal aid and community.',
      technologies: ['Astro', 'TypeScript'],
      category: 'NGO',
      bg: 'bg-[var(--electric-blue)]',
      featured: false,
      client: true,
      demoUrl: 'https://preview.secondchances.co.ke/',
      githubUrl: 'https://github.com/isaac-ron/secondchances'
    },
    {
      id: 7,
      title: 'Vijana Empowerment Initiative',
      description: 'Site for a community organisation in Sotik, Bomet County, offering vocational training, mentorship and entrepreneurship support to vulnerable youth.',
      technologies: ['Next.js', 'TypeScript', 'Prisma'],
      category: 'Community',
      bg: 'bg-[var(--lime-green)]',
      featured: false,
      client: true,
      demoUrl: 'https://vijanaempowermentcbo.org',
      githubUrl: 'https://github.com/isaac-ron/Vijana-Empowerment-CBO'
    },
    {
      id: 8,
      title: 'The Grace Schools',
      description: 'Public website for a faith-based primary school in Chepilat, Bomet County.',
      technologies: ['Next.js', 'TypeScript'],
      category: 'School',
      bg: 'bg-[var(--deep-purple)]',
      featured: false,
      client: true,
      githubUrl: 'https://github.com/isaac-ron/grace-schools'
    },
    {
      id: 9,
      title: 'ACNA Membership Form',
      description: 'Membership application for the Association of Care Leavers Networks in Africa.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'NGO',
      bg: 'bg-[var(--vibrant-yellow)]',
      featured: false,
      client: true,
      demoUrl: 'https://acna-form.vercel.app',
      githubUrl: 'https://github.com/isaac-ron/acna-form'
    },
    {
      id: 10,
      title: 'WasteNet',
      description: 'CNN that sorts waste into recyclable and organic (88.9% accuracy, 94.2% precision, 92.7% recall), deployed on a Raspberry Pi 4 driving Arduino sorting hardware, with a Flask dashboard for live and uploaded-image inference.',
      technologies: ['TensorFlow/Keras', 'Flask', 'Raspberry Pi'],
      category: 'ML + Hardware',
      bg: 'bg-[var(--lime-green)]',
      featured: false
    },
    {
      id: 11,
      title: 'ReRoot Africa',
      description: 'Media website, built from a high-fidelity Figma design.',
      technologies: ['React', 'TypeScript', 'Tailwind'],
      category: 'Web Dev',
      bg: 'bg-[var(--orange)]',
      featured: false,
      demoUrl: 'https://rerootafrica.vercel.app',
      githubUrl: 'https://github.com/isaac-ron/rerootafrica'
    },
    {
      id: 12,
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
                    Live
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
                      Live Site
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
