import ComponentWrapper from "../ComponentWrapper";
import Nav from "../Nav";
import SectionHeader from "../SectionHeader";

interface WelcomeProps {}

const Welcome : React.FC<WelcomeProps> = () => {
    return (
        <ComponentWrapper id="welcome">
            <SectionHeader>
                Welcome!
            </SectionHeader>
        </ComponentWrapper>
    );
};

export default Welcome;