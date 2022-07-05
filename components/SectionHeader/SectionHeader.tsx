import style from './SectionHeader.module.css';

interface SectionHeaderProps {
    children?: any
}

const SectionHeader : React.FC<SectionHeaderProps> = ({children}) => {
    return (
        <h1 className={style.h1}>
            {children}
        </h1>
    );
};

export default SectionHeader;