import ContactForm from '@/src/forms/contact-form'; 
import EmailIconOne from '@/src/svg/email-icon-1';
import PhoneIcon from '@/src/svg/phone-icon';
import React from 'react';

const ContactArea = () => {
    return (
        <>
            <section className="tp-contact-area pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tp-contact-wrapper">
                                <div className="tp-contact-title-wrapper">
                                    <h3 className="tp-contact-title">Bizimle <span className="title-color">İletişime Geçin</span></h3> 
                                    <p>E-posta gönderin, arayın veya formu doldurun; Kion'un bulut yönetimi ve denetim sorunlarınızı nasıl çözebileceğini öğrenin.</p>
                                </div>
                                <div className="tp-contact-content">
                                    <div className="tp-contact-content-mail d-flex align-items-center">
                                        <div className="tp-contact-content-mail-icon">
                                            <span> 
                                                <EmailIconOne /> 
                                            </span>
                                        </div>
                                        <h3 className="tp-contact-item-title"><a href="mailto:@info@regeditbilisim.com">info@regeditbilisim.com</a></h3>
                                    </div>
                                    <div className="tp-contact-content-phone d-flex align-items-center">
                                        <div className="tp-contact-content-phone-icon">
                                            <span>
                                                <PhoneIcon /> 
                                            </span>
                                        </div>
                                        <h3 className="tp-contact-item-title">
                                            <a href="tel+902165046728:">+0 216 504 67 28</a>
                                        </h3>
                                    </div>
                                    <div className="tp-contact-location-wrapper d-flex">
                                        <div className="tp-contact-location">
                                            <h3 className="tp-contact-location-title">
                                                Ofis Adresi
                                                <i className="fa-regular fa-arrow-down"></i>
                                            </h3>
                                            <p> Topselvi Mah. Arkoz Sk. No: 6 İç Kapı No:1 KARTAL/ İSTANBUL</p>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-contact-form">
                                <h3 className="tp-contact-form-title">Bizimle İletişime Geçin</h3>
                                <p>E-posta adresiniz yayımlanmayacak. Gerekli alanlar * ile işaretlenmiştir.</p>
                                <ContactForm /> 
                                <p className="ajax-response"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactArea;
