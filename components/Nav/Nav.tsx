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

            <table className={style.table}>
                <tbody>
                    <td className={style.td}>
                    <AnchorButton text='Welcome'
                        href='idk'/>
                    </td>

                    <td className={style.td}>
                    <AnchorButton text='About us'
                        href='idk'/>
                    </td>

                    <td className={style.td}>
                    <AnchorButton text='Members'
                        href="#Members"/>
                    </td>

                    <td className={style.td}>
                    <AnchorButton text='Contact us'
                        href='idk'/>
                    </td>
                </tbody>
            </table>

            {children}
        </nav>
    );
};

export default Nav;