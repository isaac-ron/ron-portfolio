import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  type Point = { lead?: string; text: string };

  const roles: {
    title: string;
    org: string;
    place: string;
    dates: string;
    bg: string;
    summary: string;
    points: Point[];
  }[] = [
    {
      title: 'Freelance Web Developer',
      org: 'Independent',
      place: 'Nairobi, Kenya',
      dates: 'Apr 2026 – Present',
      bg: 'bg-[var(--electric-blue)]',
      summary: 'Paid client work for NGOs and a regional media network, from requirements through to handover.',
      points: [
        {
          lead: 'ACNA',
          text: "For the launch of the Association of Care Leavers Networks in Africa's flagship East Africa chapter, built the membership application networks use to join, setting out the eligibility rules (care-leaver-led leadership, independence from donors and political parties) ahead of review by the management committee."
        },
        {
          lead: 'Virtue Literacy Africa',
          text: 'Built the site for a founding member network working on literacy in pastoralist, refugee and arid communities across Kenya, Ethiopia and South Sudan. Staff publish blog posts, events, team profiles and gallery images themselves through Keystatic, a git-based CMS, on Astro.'
        },
        {
          lead: 'Second Chances Kenya',
          text: 'Built the site for a founding member network supporting young people leaving care. Designed for care leavers arriving on low-bandwidth phones: help by WhatsApp, phone or email is one tap away, a quick-exit button covers anyone in an unsafe situation, and supporters get clear routes to donate, partner or refer.'
        },
        {
          lead: 'The Nile Explorer',
          text: "Rebuilt a media network's site (news, podcast, documentaries and festival) on Next.js with an embedded Sanity Studio. Publishing revalidates pages on demand, so the newsroom never waits on a rebuild, and read and share counts rank the front page's Top stories. Wrote a repeatable WordPress migration with a dry-run mode, and a handover manual covering both the publishing workflow and code maintenance."
        },
        {
          text: 'Worked directly with each client to gather requirements and turn organisational goals into working sites, delivered on self-managed timelines.'
        }
      ]
    },
    {
      title: 'Volunteer Web Developer & Trainer',
      org: 'Vijana Empowerment Initiative CBO',
      place: 'Sotik, Bomet County, Kenya',
      dates: 'May 2026 – Present',
      bg: 'bg-[var(--lime-green)]',
      summary: 'A community organisation training school leavers, young mothers and youth with disabilities in fashion, beauty, mechanics and digital work.',
      points: [
        {
          text: "Designed and built the organisation's website in Next.js and TypeScript, presenting its four trade programmes and impact, and routing visitors to apply as trainees or back one with a donation."
        },
        {
          text: 'Help run web development training for young people and marginalised members of the community.'
        }
      ]
    },
    {
      title: 'IT Support Intern',
      org: 'Kenya Revenue Authority',
      place: 'Nairobi, Kenya',
      dates: 'Jan 2026 – Mar 2026',
      bg: 'bg-[var(--hot-pink)]',
      summary: 'IT Service Delivery Department, supporting the systems behind national tax administration.',
      points: [
        {
          text: 'Provided first-line technical support and troubleshooting for enterprise hardware, software and network issues, keeping downtime on critical tax administration systems to a minimum.'
        },
        {
          text: 'Documented user issues, tracked them through to resolution and kept teams updated on status.'
        },
        {
          text: 'Coordinated with senior IT staff to implement fixes beyond first-line scope.'
        }
      ]
    },
    {
      title: 'Hackathon Winner',
      org: 'Egerton JavaScript Conference',
      place: 'Njoro, Kenya',
      dates: 'Mar 2025',
      bg: 'bg-[var(--vibrant-yellow)]',
      summary: 'Team lead for the winning entry.',
      points: [
        {
          text: 'Led a team of three to build a customer-service platform in React and MongoDB.'
        },
        {
          text: 'Added OCR-based QR check-in using Tesseract.js, cutting average response time by 25%.'
        }
      ]
    }
  ];

  const education = [
    {
      title: 'BSc Computer Science',
      org: 'Kabarak University',
      place: 'Nakuru, Kenya',
      dates: 'Expected Dec 2026',
      points: [
        'Coursework complete; on track for First Class Honours (CGPA 74%).',
        'Relevant coursework: Data Structures & Algorithms, Database Systems, Object-Oriented Programming, Web Development, Machine Learning.'
      ]
    },
    {
      title: 'Data Engineering Program',
      org: 'ALX',
      place: 'Certification, in progress',
      dates: 'May 2026 – Present',
      points: [
        'Building ETL pipelines in Python, orchestrated with Airflow, containerised with Docker and scaled out with Spark.',
        'Covering batch and streaming ingestion, data modelling and architecture, and data security practices.'
      ]
    },
    {
      title: 'Data Analytics Program with Professional Skills',
      org: 'ALX',
      place: 'Certification',
      dates: 'Sep 2025 – Apr 2026',
      points: [
        'Project-based program in data cleaning, exploratory analysis, visualisation and reporting.',
        'Combined datasets from multiple sources into reporting dashboards using SQL, Excel, Power BI and Python (Pandas).',
        'Professional skills track: time management, prioritisation, written and verbal communication, and working in cross-functional teams.'
      ]
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
                <p className="mb-4 font-medium">{role.summary}</p>
                <ul className="space-y-3 text-[var(--grey)] list-disc pl-5">
                  {role.points.map((point) => (
                    <li key={point.text}>
                      {point.lead && <span className="font-bold text-[var(--charcoal)]">{point.lead}: </span>}
                      {point.text}
                    </li>
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
                <p className="text-sm text-[var(--grey)]">{item.place}</p>
                <p className="text-sm font-bold uppercase">{item.dates}</p>
                <ul className="space-y-2 text-[var(--grey)] list-disc pl-5 pt-1">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
