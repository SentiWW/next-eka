import style from './AnchorButton.module.css';

interface AnchorButtonProps {
    text: string
    href: string
}

const AnchorButton : React.FC<AnchorButtonProps> = ({text, href}) => {
    return (
        <a className={style.anchor} href={href}>
            {text}
        </a>
    );
};

export default AnchorButton;