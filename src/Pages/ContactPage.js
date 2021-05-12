import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d147552.08651305066!2d25.11295230284011!3d54.70080208729963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd93fb5c6408f5%3A0x400d18c70e9dc40!2sVilnius!5e0!3m2!1sen!2slt!4v1620726235073!5m2!1sen!2slt"
                        width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>

                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+370 67622926'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'mogintaras@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Vilnius'} text2={'Lithuania'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
