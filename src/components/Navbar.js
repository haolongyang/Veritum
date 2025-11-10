import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';

const content = {
  en: {
    home: 'Home',
    about: 'About Us',
    services: 'Our Services',
    successStories: 'Success Stories',
    contact: 'Contact Us',
    toggle: '中文',
  },
  zh: {
    home: '首页',
    about: '关于我们',
    services: '我们的服务',
    successStories: '成功案例',
    contact: '联系我们',
    toggle: 'English',
  },
};

const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const navContent = content[language];

  return (
    <nav>
      <ul>
        <li><Link to="/">{navContent.home}</Link></li>
        <li><Link to="/about">{navContent.about}</Link></li>
        <li><Link to="/services">{navContent.services}</Link></li>
        <li><Link to="/success-stories">{navContent.successStories}</Link></li>
        <li><Link to="/contact">{navContent.contact}</Link></li>
      </ul>
      <button onClick={toggleLanguage} className="lang-toggle">
        {navContent.toggle}
      </button>
    </nav>
  );
};

export default Navbar;
