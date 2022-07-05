import ComponentWrapper from "../ComponentWrapper";
import SectionHeader from "../SectionHeader";

interface MembersProps {}

const Members : React.FC<MembersProps> = () => {
    return (
        <ComponentWrapper id="members">
            <SectionHeader>
                Members
            </SectionHeader>
        </ComponentWrapper>
    );
};

export default Members;