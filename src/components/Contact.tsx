import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'isaacron195@gmail.com', link: 'mailto:hello@alexdev.com', bg: 'bg-[var(--electric-blue)]' },
    { icon: Phone, title: 'Phone', value: '+1 (555) 123-4567', link: 'tel:+15551234567', bg: 'bg-[var(--hot-pink)]' },
    { icon: MapPin, title: 'Location', value: 'Nairobi, KE', link: '#', bg: 'bg-[var(--vibrant-yellow)]' }
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', url: '#', bg: 'bg-[var(--charcoal)]' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', bg: 'bg-[var(--electric-blue)]' },
    { icon: Twitter, name: 'Twitter', url: '#', bg: 'bg-[var(--hot-pink)]' },
    { icon: Instagram, name: 'Instagram', url: '#', bg: 'bg-[var(--deep-purple)]' }
  ];

  return (
    <section id="contact" className="py-24 bg-[var(--cream)] relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--vibrant-yellow)] brutal-border rotate-12 opacity-20" />
      <div className="absolute bottom-40 right-20 w-24 h-24 bg-[var(--hot-pink)] brutal-border -rotate-12 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block bg-[var(--hot-pink)] text-white px-6 py-2 brutal-border-2 brutal-shadow mb-6">
            <span className="font-bold uppercase tracking-wider text-sm">Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            LET'S <span className="text-[var(--electric-blue)]">MAKE</span> SOMETHING
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-[var(--grey)] mb-8">
              Got a project in mind? Drop me a line and let's create something amazing together.
            </p>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.title}
                  href={info.link}
                  className="flex items-center gap-4 bg-white brutal-border brutal-shadow hover-brutal p-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`${info.bg} text-white p-3 brutal-border-2`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold uppercase text-sm">{info.title}</div>
                    <div className="text-[var(--grey)]">{info.value}</div>
                  </div>
                </motion.a>
              );
            })}

            <div className="pt-6">
              <h4 className="font-bold uppercase mb-4">Follow Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      className={`${social.bg} text-white w-12 h-12 brutal-border-2 brutal-shadow hover-brutal flex items-center justify-center`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white brutal-border brutal-shadow-lg p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-bold uppercase text-sm mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 brutal-border-2 focus:outline-none focus:brutal-shadow"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-bold uppercase text-sm mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 brutal-border-2 focus:outline-none focus:brutal-shadow"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block font-bold uppercase text-sm mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 brutal-border-2 focus:outline-none focus:brutal-shadow"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-bold uppercase text-sm mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 brutal-border-2 focus:outline-none focus:brutal-shadow resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-10 py-4 bg-[var(--electric-blue)] text-white brutal-border brutal-shadow-lg hover-brutal font-bold uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-2xl md:text-3xl font-bold uppercase max-w-3xl mx-auto">
            "Good design is <span className="text-[var(--hot-pink)]">obvious</span>. Great design is <span className="text-[var(--electric-blue)]">transparent</span>."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
