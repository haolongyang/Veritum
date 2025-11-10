import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import './SuccessStoriesPage.css';

const content = {
  en: {
    title: 'Our Success Stories',
    summaryTitle: 'A Track Record of Excellence',
    summaryText: "We pride ourselves on our students' achievements, with consistently high acceptance rates into top-ranked universities worldwide. Our personalized approach has helped countless students secure admission into their dream schools.",
    galleryTitle: 'Admission Offers Gallery',
    offers: [
      { id: 1, university: 'Ivy League University', program: 'Computer Science', imgSrc: 'https://via.placeholder.com/300x200.png?text=Ivy+League+Offer' },
      { id: 2, university: 'G5 University', program: 'Business Administration', imgSrc: 'https://via.placeholder.com/300x200.png?text=G5+Offer' },
      { id: 3, university: 'Canada Top 3', program: 'Engineering', imgSrc: 'https://via.placeholder.com/300x200.png?text=Canada+Top+3+Offer' },
      { id: 4, university: 'Group of Eight', program: 'Medicine', imgSrc: 'https://via.placeholder.com/300x200.png?text=Go8+Offer' },
      { id: 5, university: 'Top U.S. University', program: 'Data Science', imgSrc: 'https://via.placeholder.com/300x200.png?text=Top+U.S.+Offer' },
      { id: 6, university: 'Leading UK University', program: 'Law', imgSrc: 'https://via.placeholder.com/300x200.png?text=UK+Offer' },
    ],
  },
  zh: {
    title: '我们的成功案例',
    summaryTitle: '卓越的往绩记录',
    summaryText: '我们为学生的成就感到自豪，在全球顶尖大学的录取率一直很高。我们的个性化方法已帮助无数学生获得他们梦想学校的录取。',
    galleryTitle: '录取通知书展示',
    offers: [
      { id: 1, university: '常春藤盟校', program: '计算机科学', imgSrc: 'https://via.placeholder.com/300x200.png?text=Ivy+League+Offer' },
      { id: 2, university: 'G5 精英大学', program: '工商管理', imgSrc: 'https://via.placeholder.com/300x200.png?text=G5+Offer' },
      { id: 3, university: '加拿大前三', program: '工程学', imgSrc: 'https://via.placeholder.com/300x200.png?text=Canada+Top+3+Offer' },
      { id: 4, university: '八校集团', program: '医学', imgSrc: 'https://via.placeholder.com/300x200.png?text=Go8+Offer' },
      { id: 5, university: '美国顶尖大学', program: '数据科学', imgSrc: 'https://via.placeholder.com/300x200.png?text=Top+U.S.+Offer' },
      { id: 6, university: '英国顶尖大学', program: '法学', imgSrc: 'https://via.placeholder.com/300x200.png?text=UK+Offer' },
    ],
  },
};

const SuccessStoriesPage = () => {
  const { language } = useContext(LanguageContext);
  const pageContent = content[language];

  return (
    <div className="success-stories-page">
      <header className="success-header">
        <h1>{pageContent.title}</h1>
      </header>

      <section className="achievements-summary">
        <h2>{pageContent.summaryTitle}</h2>
        <p>{pageContent.summaryText}</p>
      </section>

      <section className="gallery">
        <h2>{pageContent.galleryTitle}</h2>
        <div className="gallery-grid">
          {pageContent.offers.map(offer => (
            <div key={offer.id} className="gallery-item">
              <img src={offer.imgSrc} alt={`Admission offer from ${offer.university}`} />
              <div className="caption">
                <p><strong>{offer.university}</strong></p>
                <p>{offer.program}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SuccessStoriesPage;
