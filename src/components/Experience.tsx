import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const roles = [
    {
      title: 'Freelance Web Developer',
      org: 'Association of Care Leavers Networks in Africa (ACNA)',
      place: 'Nairobi, Kenya',
      dates: 'Apr 2026 – Present',
      bg: 'bg-[var(--electric-blue)]',
      points: [
        'Built and deployed a membership and content platform for a continental NGO network on a headless CMS, so partner organisations across several African countries publish and manage their own content.',
        'Worked directly with the client to turn organisational goals into requirements and delivered the site on a self-managed timeline.'
      ]
    },
    {
      title: 'Volunteer Web Developer & Trainer',
      org: 'Vijana Empowerment Initiative CBO',
      place: 'Bomet, Kenya',
      dates: 'May 2026 – Present',
      bg: 'bg-[var(--lime-green)]',
      points: [
        "Designed and built the organisation's website.",
        'Teach web development to young people and marginalised members of the community.'
      ]
    },
    {
      title: 'IT Support Intern',
      org: 'Kenya Revenue Authority, IT Service Delivery',
      place: 'Nairobi, Kenya',
      dates: 'Jan 2026 – Mar 2026',
      bg: 'bg-[var(--hot-pink)]',
      points: [
        'Provided first-line support for enterprise hardware, software and network issues on critical tax administration systems.',
        'Documented issues, tracked resolutions and coordinated with senior IT staff on fixes.'
      ]
    },
    {
      title: 'Hackathon Winner',
      org: 'Egerton JavaScript Conference',
      place: 'Njoro, Kenya',
      dates: 'Mar 2025',
      bg: 'bg-[var(--vibrant-yellow)]',
      points: [
        'Led a team of three to build a customer-service platform (React, MongoDB) with OCR-based QR check-in using Tesseract.js, cutting average response time by 25%.'
      ]
    }
  ];

  const education = [
    {
      title: 'BSc Computer Science',
      org: 'Kabarak University',
      dates: 'Expected Dec 2026 (coursework complete)',
      detail: 'Data Structures & Algorithms, Database Systems, Web Development, Machine Learning'
    },
    {
      title: 'Data Analytics Certification',
      org: 'ALX',
      dates: 'Apr 2026',
      detail: 'SQL, Excel, Power BI and Python (Pandas) reporting dashboards'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[var(--cream)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block bg-[var(--electric-blue)] px-6 py-2 brutal-border-2 brutal-shadow mb-6">
            <span className="font-bold uppercase tracking-wider text-sm text-white">Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            WHERE I'VE <span className="text-[var(--hot-pink)]">WORKED</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Roles */}
          <div className="lg:col-span-2 space-y-6">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                className="bg-white brutal-border brutal-shadow p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex items-start gap-4">
                    <div className={`${role.bg} text-white p-3 brutal-border-2 shrink-0`}>
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl uppercase">{role.title}</h3>
                      <p className="font-semibold">{role.org}</p>
                      <p className="text-sm text-[var(--grey)]">{role.place}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-[var(--cream)] brutal-border-2 text-sm font-bold uppercase whitespace-nowrap">
                    {role.dates}
                  </span>
                </div>
                <ul className="space-y-2 text-[var(--grey)] list-disc pl-5">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold uppercase">Education</h3>
            {education.map((item) => (
              <div key={item.title} className="bg-white brutal-border brutal-shadow p-6 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="bg-[var(--deep-purple)] text-white p-2 brutal-border-2">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold uppercase">{item.title}</h4>
                </div>
                <p className="font-semibold">{item.org}</p>
                <p className="text-sm font-bold uppercase">{item.dates}</p>
                <p className="text-[var(--grey)]">{item.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
