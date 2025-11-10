import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import './ContactPage.css';

const content = {
  en: {
    title: 'Contact Us',
    subtitle: "We'd love to hear from you. Reach out with any questions or to start your consultation.",
    formTitle: 'Send Us a Message',
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    submitButton: 'Submit',
    contactInfoTitle: 'Contact Information',
    email: 'Email:',
    phone: 'Phone:',
    location: 'Location:',
    wechat: 'WeChat:',
    officeTitle: 'Our Office',
    mapPlaceholder: 'Embedded Google Map will be here.',
    alertMessage: 'Thank you for your message. We will get back to you shortly.',
  },
  zh: {
    title: '联系我们',
    subtitle: '我们很乐意听取您的意见。如有任何问题或需要开始咨询，请联系我们。',
    formTitle: '给我们留言',
    nameLabel: '姓名',
    emailLabel: '电子邮件',
    messageLabel: '信息',
    submitButton: '提交',
    contactInfoTitle: '联系信息',
    email: '电子邮件：',
    phone: '电话：',
    location: '地点：',
    wechat: '微信：',
    officeTitle: '我们的办公室',
    mapPlaceholder: '嵌入式谷歌地图将在此处显示。',
    alertMessage: '感谢您的留言。我们会尽快回复您。',
  },
};

const ContactPage = () => {
  const { language } = useContext(LanguageContext);
  const pageContent = content[language];

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(pageContent.alertMessage);
    // In a real application, you would handle form submission here.
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>{pageContent.title}</h1>
        <p>{pageContent.subtitle}</p>
      </header>

      <div className="contact-content">
        <div className="contact-form-container">
          <h2>{pageContent.formTitle}</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{pageContent.nameLabel}</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">{pageContent.emailLabel}</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">{pageContent.messageLabel}</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">{pageContent.submitButton}</button>
          </form>
        </div>

        <div className="contact-info-container">
          <h2>{pageContent.contactInfoTitle}</h2>
          <p><strong>{pageContent.email}</strong> info@lidaeducation.com</p>
          <p><strong>{pageContent.phone}</strong> +1 (604) 123-4567</p>
          <p><strong>{pageContent.location}</strong> Vancouver, Canada</p>
          {/* Placeholder for WeChat QR Code */}
          <div className="wechat-placeholder">
            <p><strong>{pageContent.wechat}</strong></p>
            <img src="https://via.placeholder.com/150" alt="WeChat QR Code" />
          </div>
        </div>
      </div>

      <div className="map-container">
        <h2>{pageContent.officeTitle}</h2>
        {/* Placeholder for Google Map */}
        <div className="map-placeholder">
          <p>{pageContent.mapPlaceholder}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
