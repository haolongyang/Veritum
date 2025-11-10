import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import './ServicesPage.css';

const content = {
  en: {
    title: 'Our Services',
    consultingTitle: '1. Application Consulting',
    consultingServices: [
      'Personalized school selection plans',
      'Analysis of school ranking, location, and employment outcomes',
      'Scholarship and tuition analysis',
      'Transparent application management (timeline, documentation, submission tracking)',
    ],
    enhancementTitle: '2. Background Enhancement',
    enhancementServices: [
      'Internship placement and academic research opportunities',
      'Research assistant and international conference participation',
      'Guidance on resume and recommendation letter preparation',
      'Cultural exchange and short-term study abroad experiences',
    ],
    trainingTitle: '3. Training & Preparation',
    trainingServices: [
      'Language exam training (IELTS, TOEFL, Duolingo)',
      'GRE & GMAT test preparation',
      'Interview skill coaching',
      'Undergraduate study planning (for Year 3–4 students)',
    ],
  },
  zh: {
    title: '我们的服务',
    consultingTitle: '1. 申请咨询',
    consultingServices: [
      '个性化选校方案',
      '院校排名、地理位置及就业前景分析',
      '奖学金和学费分析',
      '透明化申请管理（时间线、文件、提交追踪）',
    ],
    enhancementTitle: '2. 背景提升',
    enhancementServices: [
      '实习安排与学术研究机会',
      '研究助理和国际会议参与',
      '简历和推荐信准备指导',
      '文化交流和短期留学体验',
    ],
    trainingTitle: '3. 培训与准备',
    trainingServices: [
      '语言考试培训（雅思、托福、多邻国）',
      'GRE和GMAT备考',
      '面试技巧辅导',
      '本科学习规划（针对大三、大四学生）',
    ],
  },
};

const ServicesPage = () => {
  const { language } = useContext(LanguageContext);
  const pageContent = content[language];

  return (
    <div className="services-page">
      <header className="services-header">
        <h1>{pageContent.title}</h1>
      </header>

      <section id="application-consulting" className="service-section">
        <h2>{pageContent.consultingTitle}</h2>
        <ul>
          {pageContent.consultingServices.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </section>

      <section id="background-enhancement" className="service-section">
        <h2>{pageContent.enhancementTitle}</h2>
        <ul>
          {pageContent.enhancementServices.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </section>

      <section id="training-preparation" className="service-section">
        <h2>{pageContent.trainingTitle}</h2>
        <ul>
          {pageContent.trainingServices.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ServicesPage;
