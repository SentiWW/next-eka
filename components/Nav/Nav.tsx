import style from './Nav.module.css';
import logo from './../../public/logo.png';
import AnchorButton from '../AnchorButton';

interface NavProps {
    children?: any
}

const Nav : React.FC<NavProps> = ({children}) => {
    return (
        <nav className={style.nav}>
            <img src={logo.src} alt='EKA.NET logo' className={style.logo} />
            <AnchorButton text='Heyy'
                          href='idk'/>
            {children}
        </nav>
    );
};

export default Nav;