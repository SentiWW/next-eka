import ComponentWrapper from "../ComponentWrapper";
import SectionHeader from "../SectionHeader";
import facebookIcon from "./../../public/icons/facebook.svg";
import envelopeIcon from "./../../public/icons/envelope.svg";
import twitterIcon from "./../../public/icons/twitter.svg";
import linkedinIcon from "./../../public/icons/linkedin.svg";

import style from "./Contact.module.css";

interface ContactProps {}

const Contact : React.FC<ContactProps> = () => {
    return (
        <ComponentWrapper id="contact">
            <SectionHeader>
                Contact us
            </SectionHeader>
            <div className={style.contactText}>
                Jeśli masz ochotę zostać
                członkiem naszego Koła lub
                masz interesującą ofertę współpracy
                to zapraszamy do kontaktu mailowego,
                bądź przez nasze kanały social media!
            </div>


            <ul className={style.ul}>
                <li className={style.li}>
                    <a href="https://www.facebook.com/ekadotnet/">
                        <img className={style.icon} src={facebookIcon.src} />
                    </a>
                </li>
                <li className={style.li}>
                    <a href="">
                        <img className={style.icon} src={envelopeIcon.src} />
                    </a>
                </li>
                <li className={style.li}>
                    <a href="https://twitter.com/EkaDotNet">
                        <img className={style.icon} src={twitterIcon.src} />
                    </a>
                </li>
                <li className={style.li}>
                    <a href="https://www.linkedin.com/company/ekadotnet/mycompany/">
                        <img className={style.icon} src={linkedinIcon.src} />
                    </a>
                </li>
            </ul>
        </ComponentWrapper>
    );
};

export default Contact;