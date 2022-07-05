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

            <ul className={style.ul}>
                <li className={style.li}>
                    <AnchorButton text='Welcome'
                        href='#welcome'/>
                </li>
                <li className={style.li}>
                    <AnchorButton text='About us'
                        href='#about'/>
                </li>
                <li className={style.li}>
                    <AnchorButton text='Members'
                        href="#members"/>
                </li>
                <li className={style.li}>
                    <AnchorButton text='Contact us'
                        href='#contact'/>
                </li>
            </ul>

            {/*
            <table className={style.table}>
                <tbody>
                    <td className={style.td}>
                    <AnchorButton text='Welcome'
                        href='#welcome'/>
                    </td>

                    <td className={style.td}>
                    <AnchorButton text='About us'
                        href='#about'/>
                    </td>

                    <td className={style.td}>
                    <AnchorButton text='Members'
                        href="#members"/>
                    </td>

                    <td className={style.td}>
                    <AnchorButton text='Contact us'
                        href='#contact'/>
                    </td>
                </tbody>
            </table>
            */}

            {children}
        </nav>
    );
};

export default Nav;