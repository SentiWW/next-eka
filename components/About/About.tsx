import ComponentWrapper from "../ComponentWrapper";
import SectionHeader from "../SectionHeader";

interface AboutProps {}

const About : React.FC<AboutProps> = () => {
    return (
        <ComponentWrapper id="about">
            <SectionHeader>
                About us
            </SectionHeader>
        </ComponentWrapper>
    );
};

export default About;