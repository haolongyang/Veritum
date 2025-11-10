import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import './HomePage.css';

const content = {
  en: {
    heroTitle: 'Empowering Global Education Dreams',
    heroSubtitle: 'Your trusted partner in navigating the path to international education.',
    aboutTitle: 'About Veritum Education Consulting',
    aboutText: 'Veritum Education Consulting is dedicated to providing top-tier guidance for students aiming to study in the U.S., Canada, and Australia. We bridge resource gaps and offer personalized strategies to help you achieve your academic and career goals.',
    servicesTitle: 'Explore Our Services',
    appConsulting: 'Application Consulting',
    appConsultingText: 'Personalized school selection and application management.',
    langTraining: 'Language Training',
    langTrainingText: 'Prepare for IELTS, TOEFL, GRE, and GMAT with expert tutors.',
    successStories: 'Success Stories',
    successStoriesText: 'See the top universities our students have been accepted to.',
    strengthsTitle: 'Why Choose Us?',
    strength1: 'Personalized Consulting: Tailored plans to fit your unique profile and goals.',
    strength2: 'Expert Advisors: Guidance from educators with top university backgrounds.',
    strength3: 'Global Network: Connections to institutions and opportunities worldwide.',
  },
  zh: {
    heroTitle: '赋能全球教育梦想',
    heroSubtitle: '您值得信赖的国际教育领航伙伴。',
    aboutTitle: '关于立达教育咨询',
    aboutText: '立达教育致力于为计划在美国、加拿大和澳大利亚学习的学生提供顶尖指导。我们弥合资源差距，提供个性化策略，助您实现学术和职业目标。',
    servicesTitle: '探索我们的服务',
    appConsulting: '申请咨询',
    appConsultingText: '个性化选校和申请管理。',
    langTraining: '语言培训',
    langTrainingText: '由专家导师指导，备考雅思、托福、GRE和GMAT。',
    successStories: '成功案例',
    successStoriesText: '查看我们的学生已获得录取通知的顶尖大学。',
    strengthsTitle: '为什么选择我们？',
    strength1: '个性化咨询：量身定制的计划，以适应您独特的背景和目标。',
    strength2: '专家顾问：拥有顶尖大学背景的教育工作者提供指导。',
    strength3: '全球网络：连接全球的机构和机遇。',
  },
};

const HomePage = () => {
  const { language } = useContext(LanguageContext);
  const pageContent = content[language];

  return (
    <div className="home-page">
      <header className="hero-banner">
        <h1>{pageContent.heroTitle}</h1>
        <p>{pageContent.heroSubtitle}</p>
      </header>

      <section className="overview">
        <h2>{pageContent.aboutTitle}</h2>
        <p>{pageContent.aboutText}</p>
      </section>

      <section className="quick-links">
        <h2>{pageContent.servicesTitle}</h2>
        <div className="links-container">
          <Link to="/services" className="quick-link">
            <h3>{pageContent.appConsulting}</h3>
            <p>{pageContent.appConsultingText}</p>
          </Link>
          <Link to="/services" className="quick-link">
            <h3>{pageContent.langTraining}</h3>
            <p>{pageContent.langTrainingText}</p>
          </Link>
          <Link to="/success-stories" className="quick-link">
            <h3>{pageContent.successStories}</h3>
            <p>{pageContent.successStoriesText}</p>
          </Link>
        </div>
      </section>

      <section className="strengths">
        <h2>{pageContent.strengthsTitle}</h2>
        <ul>
          <li><strong>{pageContent.strength1.split(': ')[0]}:</strong> {pageContent.strength1.split(': ')[1]}</li>
          <li><strong>{pageContent.strength2.split(': ')[0]}:</strong> {pageContent.strength2.split(': ')[1]}</li>
          <li><strong>{pageContent.strength3.split(': ')[0]}:</strong> {pageContent.strength3.split(': ')[1]}</li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
