import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from './shared/SectionTitle';
import { contactData } from '../data/portfolioData';
import { fadeUp, hoverLift, staggerContainer } from '../lib/motion';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'activation'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const payload = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        _subject: `[Portfolio] ${formData.subject}`,
        _template: 'table',
        _captcha: 'false',
      });

      const response = await fetch(`https://formsubmit.co/ajax/${contactData.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
        body: payload.toString(),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result || (result.success !== true && result.success !== 'true')) {
        const message = String(result?.message ?? '').toLowerCase();
        if (message.includes('confirm') || message.includes('activate') || message.includes('verify')) {
          setIsSubmitting(false);
          setSubmitStatus('activation');
          return;
        }

        throw new Error('Submission failed');
      }

      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: contactData.email,
      link: `mailto:${contactData.email}`,
    },
    {
      icon: <Github size={24} />,
      title: 'GitHub',
      value: 'Vedrockerz',
      link: contactData.github,
    },
    {
      icon: <Linkedin size={24} />,
      title: 'LinkedIn',
      value: 'Ved Shivhare',
      link: contactData.linkedin,
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: contactData.location,
      link: '#',
    },
  ];

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-zinc-950' : 'bg-zinc-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Get In" accent="Touch" subtitle="Open to internships, collaborations, and meaningful engineering conversations." />

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <h3 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-100">Let us build something useful</h3>
            
            <p className="text-base sm:text-lg mb-8 text-zinc-600 dark:text-zinc-300">
              I am actively exploring opportunities where I can contribute to backend, AI/ML, and full-stack product development.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-4"
            >
              {contactInfo.map((info) => (
                <motion.a
                  key={info.title}
                  variants={fadeUp}
                  whileHover={hoverLift}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-4 p-4 rounded-xl surface-card"
                >
                  <div className="flex-shrink-0 p-3 bg-brand-red text-white rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                      {info.title}
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="surface-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-100">
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-emerald-600 hover:bg-emerald-700'
                    : 'bg-brand-red hover:bg-brand-blood button-glow'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <span>Message sent successfully!</span>
                ) : submitStatus === 'activation' ? (
                  <span>Activate FormSubmit from your inbox, then retry.</span>
                ) : submitStatus === 'error' ? (
                  <span>Could not send message. Please try again.</span>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;