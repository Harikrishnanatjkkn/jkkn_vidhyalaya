import React from 'react';
import { motion } from 'framer-motion';

interface SchoolInfo {
  title: string;
  details: string;
}

interface Document {
  title: string;
  link: string;
}

const generalInfo: SchoolInfo[] = [
  { title: 'NAME OF THE SCHOOL', details: 'JKKN SCHOOL' },
  { title: 'AFFILIATION NO.', details: '1234567' },
  { title: 'SCHOOL CODE', details: '54321' },
  { title: 'COMPLETE ADDRESS WITH PIN CODE', details: '123 Education Street, Knowledge City - 600001' },
  { title: 'PRINCIPAL NAME', details: 'M Koshi Priya' },
  { title: 'PRINCIPAL QUALIFICATION', details: 'M.A (Eng)., M.A (His)., Diploma in M.T.T., B.Ed., TESOL' },
  { title: 'SCHOOL EMAIL ID', details: 'principal@jkknschool.edu' },
  { title: 'CONTACT DETAILS', details: '+91 98765 43210' },
];

const documents: Document[] = [
  { title: 'AFFILIATION LETTER', link: '/docs/affiliation.pdf' },
  { title: 'TRUST REGISTRATION CERTIFICATE', link: '/docs/trust.pdf' },
  { title: 'NO OBJECTION CERTIFICATE', link: '/docs/noc.pdf' },
  { title: 'RECOGNITION CERTIFICATE', link: '/docs/recognition.pdf' },
  { title: 'BUILDING SAFETY CERTIFICATE', link: '/docs/building-safety.pdf' },
  { title: 'FIRE SAFETY CERTIFICATE', link: '/docs/fire-safety.pdf' },
];

const MandatoryPublicDisclosure: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-cover bg-center" style={{ 
        backgroundImage: 'url("banner.jpg")' 
      }}>
        <div className="absolute inset-0 bg-purple-900 bg-opacity-80">
          <div className="h-full flex flex-col items-center justify-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-playfair font-bold text-center px-4"
            >
              Mandatory Public Disclosure
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-lg md:text-xl text-center max-w-2xl px-4"
            >
              Transparency and compliance information as per CBSE guidelines
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* General Information Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-playfair">General Information</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {generalInfo.map((info, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {info.title}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
                        {info.details}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* Documents Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-playfair">Documents and Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="ml-3 text-lg font-semibold text-gray-900">{doc.title}</h3>
                </div>
                <a
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700"
                >
                  <span>View Document</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default MandatoryPublicDisclosure; 