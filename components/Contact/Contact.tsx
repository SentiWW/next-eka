import ComponentWrapper from "../ComponentWrapper";
import SectionHeader from "../SectionHeader";

interface ContactProps {}

const Contact : React.FC<ContactProps> = () => {
    return (
        <ComponentWrapper id="contact">
            <SectionHeader>
                Contact
            </SectionHeader>
        </ComponentWrapper>
    );
};

export default Contact;