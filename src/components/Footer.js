import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const content = {
  en: {
    copyright: '© 2025 Veritum Education Consulting. All Rights Reserved.',
  },
  zh: {
    copyright: '© 2025 立达教育咨询。版权所有。',
  },
};

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const footerContent = content[language];

  return (
    <footer>
      <p>{footerContent.copyright}</p>
    </footer>
  );
};

export default Footer;
