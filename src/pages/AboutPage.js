import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import './AboutPage.css';

const content = {
  en: {
    title: 'About Lida Education',
    missionTitle: 'Our Mission & Vision',
    missionText: 'To provide customized educational guidance and bridge resource gaps for students, empowering them to achieve their dreams of studying abroad.',
    philosophyTitle: 'Our Core Philosophy',
    philosophyQuote: '“己欲立立人，己欲达达人”',
    philosophyCite: '— Confucius',
    philosophyText: 'This principle guides us to help others succeed through personalized education, mirroring the success we wish for ourselves.',
    teamTitle: 'Meet Our Team',
    teamText: "Our team consists of over 20 experienced consultants and educators with diverse backgrounds from top universities, including the Ivy League, G5, and Canada's Top 3. With extensive overseas education and work experience, we possess deep expertise in global educational policies.",
    locationTitle: 'Our Location',
    locationText: 'Based in Vancouver, Canada, we are strategically positioned to offer expert advice on educational systems in the U.S., Canada, and Australia.',
  },
  zh: {
    title: '关于立达教育',
    missionTitle: '我们的使命与愿景',
    missionText: '为学生提供量身定制的教育指导，弥合资源差距，助力他们实现留学梦想。',
    philosophyTitle: '我们的核心理念',
    philosophyQuote: '“己欲立而立人，己欲达而达人”',
    philosophyCite: '— 孔子',
    philosophyText: '这一原则指导我们通过个性化教育帮助他人成功，就像我们希望自己成功一样。',
    teamTitle: '认识我们的团队',
    teamText: '我们的团队由20多名经验丰富的顾问和教育工作者组成，他们拥有来自常春藤盟校、G5精英大学和加拿大前三名大学等顶尖学府的多元化背景。凭借丰富的海外教育和工作经验，我们在全球教育政策方面拥有深厚的专业知识。',
    locationTitle: '我们的位置',
    locationText: '我们位于加拿大温哥华，地理位置优越，可为美国、加拿大和澳大利亚的教育体系提供专业建议。',
  },
};

const AboutPage = () => {
  const { language } = useContext(LanguageContext);
  const pageContent = content[language];

  return (
    <div className="about-page">
      <header className="about-header">
        <h1>{pageContent.title}</h1>
      </header>

      <section className="mission-vision">
        <h2>{pageContent.missionTitle}</h2>
        <p>{pageContent.missionText}</p>
      </section>

      <section className="core-philosophy">
        <h2>{pageContent.philosophyTitle}</h2>
        <blockquote>
          {pageContent.philosophyQuote}
          <cite>{pageContent.philosophyCite}</cite>
        </blockquote>
        <p>{pageContent.philosophyText}</p>
      </section>

      <section className="team-overview">
        <h2>{pageContent.teamTitle}</h2>
        <p>{pageContent.teamText}</p>
      </section>

      <section className="location">
        <h2>{pageContent.locationTitle}</h2>
        <p>{pageContent.locationText}</p>
      </section>
    </div>
  );
};

export default AboutPage;
