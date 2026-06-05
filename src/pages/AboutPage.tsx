import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiTrendingUp, FiGlobe, FiShield, FiFileText, FiPackage, FiMail } from 'react-icons/fi';
import { LEGAL_SECTIONS, LegalSectionId } from '@data/legalContent';
import { FALLBACK_IMAGE } from '@utils/productImages';

const legalNav: { id: LegalSectionId; label: string; icon: React.ElementType }[] = [
  { id: 'privacy-policy', label: 'Privacy Policy', icon: FiShield },
  { id: 'terms-of-service', label: 'Terms of Service', icon: FiFileText },
  { id: 'cookie-policy', label: 'Cookie Policy', icon: FiPackage },
  { id: 'contact-us', label: 'Contact Us', icon: FiMail },
];

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Hero */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 scroll-mt-24"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Styla</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your trusted destination for clothes, footwear & beauty — based in Bilaspur, Chhattisgarh.
          </p>
        </motion.section>

        {/* Mission */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              At Styla, we believe everyone deserves access to high-quality fashion and beauty products
              at affordable prices. Our mission is to make online shopping convenient, trustworthy, and enjoyable.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              From Bilaspur to across India, we are committed to exceptional customer service and ensuring
              every purchase exceeds your expectations.
            </p>
          </div>
          <img
            src={FALLBACK_IMAGE}
            alt="Mission"
            className="rounded-2xl shadow-lg"
          />
        </motion.section>

        {/* Stats */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 bg-white dark:bg-gray-800 p-8 rounded-2xl"
        >
          {[
            { icon: FiUsers, label: 'Happy Customers', value: '50K+' },
            { icon: FiTrendingUp, label: 'Products Sold', value: '100K+' },
            { icon: FiAward, label: 'Verified Sellers', value: '500+' },
            { icon: FiGlobe, label: 'Cities Served', value: '200+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-2 text-primary-600 dark:text-primary-400" />
              <h3 className="text-xl font-bold mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Values */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Quality', description: 'Authentic, high-quality products from trusted suppliers.' },
              { title: 'Trust', description: 'Transparent dealings and customer satisfaction as our top priority.' },
              { title: 'Innovation', description: 'Constantly improving for the best shopping experience.' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center shadow-sm"
              >
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Legal Sections */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
          <h2 className="text-3xl font-bold text-center mb-8">Legal Information</h2>

          {/* Quick nav */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {legalNav.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium hover:border-primary-400 hover:text-primary-600 transition-colors"
              >
                <item.icon size={14} />
                {item.label}
              </a>
            ))}
          </div>

          <div className="space-y-10">
            {(Object.entries(LEGAL_SECTIONS) as [LegalSectionId, typeof LEGAL_SECTIONS[LegalSectionId]][]).map(
              ([id, section], index) => (
                <motion.section
                  key={id}
                  id={id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm scroll-mt-24"
                >
                  <h3 className="text-2xl font-bold mb-4 text-gradient">{section.title}</h3>
                  <div className="space-y-3">
                    {section.content.map((paragraph, i) => (
                      <p key={i} className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.section>
              )
            )}
          </div>

          <p className="text-center text-sm text-gray-500 mt-10">
            Have more questions?{' '}
            <Link to="/contact" className="text-primary-600 hover:underline font-medium">
              Visit our Contact page
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
